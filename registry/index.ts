/**
 * Registry de componentes
 * Define todos os componentes disponíveis e suas dependências
 */

export const registry = {
    button: {
        name: "button",
        type: "components:ui",
        files: [
            {
                path: "components/button/Button.tsx",
                type: "registry:ui",
            },
        ],
        dependencies: [
            "class-variance-authority",
            "clsx",
            "tailwind-merge"
        ],
        registryDependencies: ["utils"],
    },
    utils: {
        name: "utils",
        type: "components:lib",
        files: [
            {
                path: "lib/utils.ts",
                type: "registry:lib",
            },
        ],
        dependencies: [
            "clsx",
            "tailwind-merge"
        ],
    },
};

export type ComponentName = keyof typeof registry;

export function getComponent(name: ComponentName) {
    return registry[name];
}

export function getAllComponents() {
    return Object.keys(registry);
}
