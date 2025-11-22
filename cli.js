#!/usr/bin/env node

import { execSync } from "child_process";
import fs from "fs/promises";
import path from "path";
import https from "https";
import crypto from "crypto";

const REGISTRY_URL = "https://sergiolneves.github.io/Lib-Shared/r";
const REQUIRED_DEPS = ["class-variance-authority", "clsx", "tailwind-merge"];

// Allowed component names (whitelist to prevent path traversal)
const ALLOWED_COMPONENTS = ["button", "use-responsive", "container", "stack"];

// Validate component name to prevent path traversal attacks
function isValidComponentName(name) {
  if (!name || typeof name !== "string") return false;
  // Only allow alphanumeric, dash, and underscore
  if (!/^[a-z0-9_-]+$/i.test(name)) return false;
  // Check against whitelist
  if (!ALLOWED_COMPONENTS.includes(name.toLowerCase())) return false;
  return true;
}

// === Utilities ===

const logger = {
  info: (msg) => console.log(`\x1b[36m${msg}\x1b[0m`),
  success: (msg) => console.log(`\x1b[32m${msg}\x1b[0m`),
  warn: (msg) => console.log(`\x1b[33m${msg}\x1b[0m`),
  error: (msg) => console.log(`\x1b[31m${msg}\x1b[0m`),
  plain: (msg) => console.log(msg),
};

const fetchJson = (url) =>
  new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => {
          res.statusCode === 200
            ? resolve(JSON.parse(data))
            : reject(new Error(`HTTP ${res.statusCode}`));
        });
      })
      .on("error", reject);
  });

const detectPackageManager = async () => {
  try {
    await fs.access("pnpm-lock.yaml");
    return "pnpm";
  } catch {}
  try {
    await fs.access("yarn.lock");
    return "yarn";
  } catch {}
  return "npm";
};

const getInstallCommand = (pm) =>
  ({
    npm: "npm install",
    yarn: "yarn add",
    pnpm: "pnpm add",
  })[pm];

// === Core Functions ===

async function installDependencies() {
  logger.info("📥 Instalando dependências...");

  try {
    const pm = await detectPackageManager();
    
    // Validate package manager (prevent command injection)
    const validPms = ["npm", "yarn", "pnpm"];
    if (!validPms.includes(pm)) {
      throw new Error("Invalid package manager detected");
    }
    
    const cmd = `${getInstallCommand(pm)} ${REQUIRED_DEPS.join(" ")}`;

    execSync(cmd, { 
      stdio: "inherit",
      shell: "/bin/sh", // Use explicit shell
      timeout: 120000 // 2 minute timeout
    });
    logger.success("✅ Dependências instaladas");
  } catch (error) {
    logger.warn("⚠️  Instale manualmente:");
    logger.plain(`  npm install ${REQUIRED_DEPS.join(" ")}`);
  }
}

async function ensureUtilsFile() {
  const utilsPath = path.join(process.cwd(), "src", "lib", "utils.ts");

  try {
    await fs.access(utilsPath);
    return;
  } catch {
    logger.info("📝 Criando utils.ts...");
    await fs.mkdir(path.dirname(utilsPath), { recursive: true });

    const content = `import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
`;
    await fs.writeFile(utilsPath, content);
    logger.success("✅ utils.ts criado");
  }
}

async function writeComponentFile(componentName, content) {
  // Validate component name before using in path
  if (!isValidComponentName(componentName)) {
    throw new Error(`Invalid component name: ${componentName}`);
  }
  
  const destPath = path.join(
    process.cwd(),
    "src",
    "components",
    "ui",
    `${componentName}.tsx`,
  );

  // Ensure the path is within expected directory (prevent path traversal)
  const normalizedPath = path.normalize(destPath);
  const expectedBase = path.join(process.cwd(), "src", "components", "ui");
  if (!normalizedPath.startsWith(expectedBase)) {
    throw new Error("Invalid path detected");
  }

  try {
    await fs.access(destPath);
    logger.warn(`⚠️  ${componentName}.tsx já existe, pulando...`);
    return false;
  } catch {
    await fs.mkdir(path.dirname(destPath), { recursive: true });
    await fs.writeFile(destPath, content, { mode: 0o644 }); // Set secure file permissions
    logger.success(`✅ ${componentName}.tsx criado`);
    return true;
  }
}

// === Commands ===

async function listComponents() {
  logger.info("📦 Buscando componentes disponíveis...\n");

  const registry = await fetchJson(`${REGISTRY_URL}/registry.json`);

  logger.success("✨ Componentes disponíveis:\n");
  registry.items.forEach(({ name, description }) => {
    logger.plain(`  \x1b[34m${name}\x1b[0m`);
    logger.plain(`    ${description}`);
  });

  logger.warn("\n💡 Uso: npx @sergiolneves/lib-shared add <componente>");
}

async function addComponent(componentName) {
  // Validate component name first
  if (!isValidComponentName(componentName)) {
    throw new Error(
      `Invalid component name: ${componentName}. Only alphanumeric characters, dashes, and underscores are allowed.`
    );
  }
  
  logger.info(`📦 Buscando ${componentName}...`);

  const data = await fetchJson(`${REGISTRY_URL}/${componentName}.json`);

  // Validate response data structure
  if (!data || !data.title || !data.files || !Array.isArray(data.files)) {
    throw new Error("Invalid component data received from registry");
  }

  logger.success(`✅ ${data.title} encontrado!`);
  logger.plain(`   ${data.description}\n`);

  await installDependencies();
  await ensureUtilsFile();

  for (const file of data.files) {
    if (!file.content || typeof file.content !== "string") {
      logger.warn(`⚠️  Skipping invalid file in ${componentName}`);
      continue;
    }
    await writeComponentFile(componentName, file.content);
  }

  logger.success(`\n🎉 ${data.title} adicionado com sucesso!\n`);
  logger.info("📝 Exemplo de uso:\n");
  logger.plain(`  import { Button } from '@/components/ui/${componentName}'`);
  logger.plain(`  <Button variant="default">Click me</Button>`);
}

function showHelp() {
  logger.info("\n🎨 Lib Shared - CLI");
  logger.plain("   Componentes React universais para qualquer projeto\n");
  logger.warn("Comandos:");
  logger.plain(
    "  list                    Lista todos os componentes disponíveis",
  );
  logger.plain("  add <componente>        Adiciona um componente ao projeto");
  logger.warn("\nExemplos:");
  logger.plain("  npx @sergiolneves/lib-shared list");
  logger.plain("  npx @sergiolneves/lib-shared add button");
  logger.info("\n📖 Documentação: https://sergiolneves.github.io/Lib-Shared");
}

// === Main ===

async function main() {
  const [command, componentName] = process.argv.slice(2);

  try {
    switch (command) {
      case "add":
        if (!componentName) throw new Error("Nome do componente não fornecido");
        await addComponent(componentName);
        break;
      case "list":
        await listComponents();
        break;
      default:
        showHelp();
    }
  } catch (error) {
    logger.error(`\n❌ ${error.message}`);
    logger.warn("💡 Tente: npx @sergiolneves/lib-shared list");
    process.exit(1);
  }
}

main();