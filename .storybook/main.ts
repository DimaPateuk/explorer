import type { StorybookConfig } from '@storybook/experimental-nextjs-vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

const config: StorybookConfig = {
    stories: ['../app/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: ['@storybook/addon-essentials', '@storybook/experimental-addon-test'],
    framework: {
        name: '@storybook/experimental-nextjs-vite',
        options: {},
    },
    staticDirs: ['../public'],
    async viteFinal(config) {
        // Add Node.js polyfills for browser environment
        config.plugins = config.plugins || [];
        config.plugins.push(
            nodePolyfills({
                globals: {
                    Buffer: true,
                    global: true,
                    process: true,
                },
                include: ['path', 'util'],
            })
        );

        // Node.js-only packages are handled by aliases in vite.config.mts
        return config;
    },
};
export default config;
