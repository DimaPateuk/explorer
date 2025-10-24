import '@testing-library/jest-dom';

// Configure Helius RPC for tests to avoid 429 rate limiting
// Note: .env file is used for Next.js dev/build, but Vitest needs explicit process.env assignment
process.env.NEXT_PUBLIC_MAINNET_RPC_URL = 'https://mainnet.helius-rpc.com/?api-key=46474128-0bcc-44ca-90e7-f729a9e99ded';
process.env.MAINNET_RPC_URL = 'https://mainnet.helius-rpc.com/?api-key=46474128-0bcc-44ca-90e7-f729a9e99ded';

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
