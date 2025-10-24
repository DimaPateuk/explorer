import '@testing-library/jest-dom';
import { vi } from 'vitest';

if (!AbortSignal.timeout) {
    AbortSignal.timeout = ms => {
        const controller = new AbortController();
        setTimeout(() => controller.abort(), ms);
        return controller.signal;
    };
}

// Needed for @solana/web3.js to treat Uint8Arrays as Buffers
// See https://github.com/anza-xyz/solana-pay/issues/106
const originalHasInstance = Uint8Array[Symbol.hasInstance];
Object.defineProperty(Uint8Array, Symbol.hasInstance, {
    value(potentialInstance: any) {
        return originalHasInstance.call(this, potentialInstance) || Buffer.isBuffer(potentialInstance);
    },
});

// Mock problematic packages that have ESM/CommonJS conflicts
vi.mock('@solflare-wallet/utl-sdk', () => ({
    ChainId: {},
    Client: vi.fn(),
    Token: vi.fn(),
    UtlConfig: {},
}));

vi.mock('@bundlr-network/client', () => ({
    default: vi.fn(),
}));

vi.mock('@metaplex-foundation/js', () => ({
    Metaplex: vi.fn(),
}));
