import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vitest/config';

const specWorkspace = (name = 'specs') => ({
    environment: 'jsdom',
    globals: true,
    name,
    server: {
        deps: {
            inline: [
                '@noble',
                'change-case',
                '@react-hook/previous',
                '@solana/kit',
                '@solana/rpc',
                '@solana/rpc-spec',
                '@solana/event-target-impl',
                '@solana/addresses',
            ],
        },
    },
    setupFiles: ['./test-setup.ts'],
    testTimeout: 10000,
});

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@/': path.resolve(__dirname, './'),

            '@/app': path.resolve(__dirname, './app'),
            '@/components': path.resolve(__dirname, './app/components'),
            '@/providers': path.resolve(__dirname, './app/providers'),
            '@/utils': path.resolve(__dirname, './app/utils'),
            '@/validators': path.resolve(__dirname, './app/validators'),

            // @ aliases
            '@app': path.resolve(__dirname, './app'),
            '@components': path.resolve(__dirname, './app/components'),
            '@providers': path.resolve(__dirname, './app/providers'),
            '@utils': path.resolve(__dirname, './app/utils'),
            '@validators': path.resolve(__dirname, './app/validators'),

            // Mock Node.js-only packages for browser/test environments
            '@solflare-wallet/utl-sdk': path.resolve(__dirname, './app/utils/__mocks__/utl-sdk.ts'),
            '@bundlr-network/client': path.resolve(__dirname, './app/utils/__mocks__/bundlr-client.ts'),
            '@metaplex-foundation/js': path.resolve(__dirname, './app/utils/__mocks__/metaplex.ts'),
        },
        conditions: ['browser', 'default'],
    },
    test: {
        watch: false,
        coverage: {
            provider: 'v8',
        },
        poolOptions: {
            threads: {
                useAtomics: true,
            },
        },
        ...specWorkspace(),
    },
});
