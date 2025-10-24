// Browser-compatible mock for @solflare-wallet/utl-sdk (Node.js-only package)
export const ChainId = {
    SOLANA_MAINNET: 101,
    SOLANA_TESTNET: 102,
    SOLANA_DEVNET: 103,
};

export class Client {
    constructor() {}
    async fetchMint() {
        return null;
    }
}

export class Token {
    constructor() {}
}

export const UtlConfig = {
    timeout: 2000,
};

export default {
    ChainId,
    Client,
    Token,
    UtlConfig,
};
