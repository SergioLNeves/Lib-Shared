#!/usr/bin/env node

/**
 * CLI para adicionar componentes ao projeto
 * Inspirado no shadcn/ui
 * 
 * Uso:
 *   npx lib-shared add button
 *   pnpm dlx lib-shared add button
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import https from 'https';

const GITHUB_RAW_URL = 'https://raw.githubusercontent.com/SergioLNeves/Lib-Share/master/src';

const registry = {
    button: {
        name: "button",
        files: ["components/button/Button.tsx"],
        dependencies: ["class-variance-authority", "clsx", "tailwind-merge"],
        registryDependencies: ["utils"],
    },
    utils: {
        name: "utils",
        files: ["lib/utils.ts"],
        dependencies: ["clsx", "tailwind-merge"],
    },
};

// Cores para terminal
const colors = {
    reset: '\x1b[0m',
    green: '\x1b[32m',
    blue: '\x1b[34m',
    yellow: '\x1b[33m',
    red: '\x1b[31m',
    cyan: '\x1b[36m',
};

function log(message, color = 'reset') {
    console.log(`${colors[color]}${message}${colors.reset}`);
}

function downloadFile(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            if (response.statusCode === 200) {
                response.pipe(file);
                file.on('finish', () => {
                    file.close();
                    resolve();
                });
            } else {
                reject(new Error(`Failed to download: ${response.statusCode}`));
            }
        }).on('error', (err) => {
            fs.unlink(dest, () => { });
            reject(err);
        });
    });
}

async function addComponent(componentName) {
    const component = registry[componentName];

    if (!component) {
        log(`❌ Componente "${componentName}" não encontrado.`, 'red');
        log('\nComponentes disponíveis:', 'cyan');
        Object.keys(registry).forEach(name => {
            log(`  - ${name}`, 'blue');
        });
        process.exit(1);
    }

    log(`\n📦 Adicionando ${component.name}...`, 'cyan');

    // 1. Instalar dependências npm
    if (component.dependencies && component.dependencies.length > 0) {
        log('\n📥 Instalando dependências...', 'yellow');
        const deps = component.dependencies.join(' ');

        try {
            // Detectar package manager
            const packageManager = fs.existsSync('pnpm-lock.yaml') ? 'pnpm' :
                fs.existsSync('yarn.lock') ? 'yarn' : 'npm';

            const installCmd = packageManager === 'npm' ? 'npm install' :
                packageManager === 'yarn' ? 'yarn add' : 'pnpm add';

            log(`  ${installCmd} ${deps}`, 'blue');
            execSync(`${installCmd} ${deps}`, { stdio: 'inherit' });
            log('✅ Dependências instaladas', 'green');
        } catch (error) {
            log('⚠️  Erro ao instalar dependências. Instale manualmente:', 'yellow');
            log(`  npm install ${deps}`, 'blue');
        }
    }

    // 2. Adicionar dependências de registry primeiro
    if (component.registryDependencies) {
        for (const dep of component.registryDependencies) {
            if (!registry[dep]) continue;

            log(`\n📦 Adicionando dependência: ${dep}`, 'yellow');
            await addComponentFiles(registry[dep]);
        }
    }

    // 3. Adicionar arquivos do componente
    await addComponentFiles(component);

    log(`\n✅ ${component.name} adicionado com sucesso!`, 'green');
    log(`\n📝 Uso:`, 'cyan');

    if (componentName === 'button') {
        log(`
  import { Button } from '@/components/button/Button';
  
  <Button variant="default">Click me</Button>
`, 'blue');
    } else if (componentName === 'utils') {
        log(`
  import { cn } from '@/lib/utils';
  
  const className = cn('base-class', 'additional-class');
`, 'blue');
    }
}

async function addComponentFiles(component) {
    for (const filePath of component.files) {
        const url = `${GITHUB_RAW_URL}/${filePath}`;
        const destPath = path.join(process.cwd(), 'src', filePath);
        const destDir = path.dirname(destPath);

        // Criar diretório se não existir
        if (!fs.existsSync(destDir)) {
            fs.mkdirSync(destDir, { recursive: true });
        }

        // Verificar se arquivo já existe
        if (fs.existsSync(destPath)) {
            log(`  ⚠️  ${filePath} já existe, pulando...`, 'yellow');
            continue;
        }

        try {
            log(`  📥 Baixando ${filePath}...`, 'blue');
            await downloadFile(url, destPath);
            log(`  ✅ ${filePath}`, 'green');
        } catch (error) {
            log(`  ❌ Erro ao baixar ${filePath}: ${error.message}`, 'red');
            log(`  💡 Baixe manualmente de: ${url}`, 'yellow');
        }
    }
}

// Main
const args = process.argv.slice(2);
const command = args[0];
const componentName = args[1];

if (command === 'add' && componentName) {
    addComponent(componentName);
} else {
    log('\n🎨 Lib Shared - CLI', 'cyan');
    log('\nUso:', 'yellow');
    log('  npx lib-shared add <component>', 'blue');
    log('  pnpm dlx lib-shared add <component>', 'blue');
    log('\nExemplos:', 'yellow');
    log('  npx lib-shared add button', 'blue');
    log('  npx lib-shared add utils', 'blue');
    log('\nComponentes disponíveis:', 'yellow');
    Object.keys(registry).forEach(name => {
        log(`  - ${name}`, 'blue');
    });
}
