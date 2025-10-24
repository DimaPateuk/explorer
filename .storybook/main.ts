import type { StorybookConfig } from '@storybook/experimental-nextjs-vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import path from 'path';

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

        // Mock problematic Node.js-only packages that don't work in browser
        config.resolve = config.resolve || {};
        config.resolve.alias = {
            ...config.resolve.alias,
            '@solflare-wallet/utl-sdk': path.resolve(__dirname, './mocks/utl-sdk.ts'),
            '@bundlr-network/client': path.resolve(__dirname, './mocks/bundlr-client.ts'),
        };

        return config;
    },
};
export default config;
