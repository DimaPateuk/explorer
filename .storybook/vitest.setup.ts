import { beforeAll, vi } from 'vitest';
import { setProjectAnnotations } from '@storybook/experimental-nextjs-vite';
import * as projectAnnotations from './preview';

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

// This is an important step to apply the right configuration when testing your stories.
// More info at: https://storybook.js.org/docs/api/portable-stories/portable-stories-vitest#setprojectannotations
const project = setProjectAnnotations([projectAnnotations]);

beforeAll(project.beforeAll);
