import { ClusterProvider } from '@providers/cluster';
import { RawDetailsProvider } from '@providers/transactions/raw';
import { ParsedInstruction, ParsedTransaction, SignatureResult, SystemProgram } from '@solana/web3.js';
import type { Meta, StoryObj } from '@storybook/react';
import type { Decorator } from '@storybook/react';
import { expect, within } from '@storybook/test';
import React from 'react';

import { SystemDetailsCard } from '../SystemDetailsCard';

// Mock providers decorator
const withProviders: Decorator = (Story, context) => {
    return (
        <ClusterProvider>
            <RawDetailsProvider>
                {/*<SignatureContext.Provider value="mock-signature-hash">*/}
                <Story {...context} />
                {/*</SignatureContext.Provider>*/}
            </RawDetailsProvider>
        </ClusterProvider>
    );
};

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    component: SystemDetailsCard,
    decorators: [withProviders],
    parameters: {
        nextjs: {
            appDirectory: true,
        },
    },
    tags: ['autodocs'],
    title: 'Components/Instruction/System/SystemDetailsCard',
} satisfies Meta<typeof SystemDetailsCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// Mock data helper functions
const createMockTransaction = (): ParsedTransaction =>
    ({
        message: {
            accountKeys: [],
            instructions: [],
            recentBlockhash: 'mock-recent-blockhash',
        },
        signatures: ['mock-signature-hash'],
    } as ParsedTransaction);

const createMockResult = (): SignatureResult => ({
    err: null,
});

const createBaseProps = () => ({
    childIndex: undefined,
    index: 0,
    innerCards: undefined,
    result: createMockResult(),
    tx: createMockTransaction(),
});

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const CreateAccount: Story = {
    args: {
        ...createBaseProps(),
        ix: {
            parsed: {
                info: {
                    lamports: 1000000,
                    newAccount: '9QqCYNWoxxEKUF8gWmyobZpJKvUxVS1uM6cCj9gEzpCQ',
                    owner: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
                    source: '7L3NsRjRMzx7Kf12eJo7n7gvwUCQ7QvAFEBHG9JdVHsU',
                    space: 165,
                },
                type: 'createAccount',
            },
            program: 'system',
            programId: SystemProgram.programId,
        } as ParsedInstruction,
    },
    async play({ canvasElement }) {
        const canvas = within(canvasElement);

        // Should render CreateDetailsCard
        expect(canvas.getByText(/Create Account/)).toBeInTheDocument();
        expect(canvas.getByText('0.001')).toBeInTheDocument();
        expect(canvas.getByText('165 byte(s)')).toBeInTheDocument();
    },
};

export const CreateAccountWithSeed: Story = {
    args: {
        ...createBaseProps(),
        ix: {
            parsed: {
                info: {
                    base: '7L3NsRjRMzx7Kf12eJo7n7gvwUCQ7QvAFEBHG9JdVHsU',
                    lamports: 2000000,
                    newAccount: '9QqCYNWoxxEKUF8gWmyobZpJKvUxVS1uM6cCj9gEzpCQ',
                    owner: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
                    seed: 'test-seed',
                    source: '8L4NsRjRMzx7Kf12eJo7n7gvwUCQ7QvAFEBHG9JdVHsX',
                    space: 200,
                },
                type: 'createAccountWithSeed',
            },
            program: 'system',
            programId: SystemProgram.programId,
        } as ParsedInstruction,
    },
    async play({ canvasElement }) {
        const canvas = within(canvasElement);
        expect(canvas.getByText(/Create Account w\/ Seed/)).toBeInTheDocument();
        expect(canvas.getByText('test-seed')).toBeInTheDocument();
    },
};

export const Allocate: Story = {
    args: {
        ...createBaseProps(),
        ix: {
            parsed: {
                info: {
                    account: '9QqCYNWoxxEKUF8gWmyobZpJKvUxVS1uM6cCj9gEzpCQ',
                    space: 100,
                },
                type: 'allocate',
            },
            program: 'system',
            programId: SystemProgram.programId,
        } as ParsedInstruction,
    },
    async play({ canvasElement }) {
        const canvas = within(canvasElement);
        expect(canvas.getByText(/Allocate Account/)).toBeInTheDocument();
        expect(canvas.getByText('100 byte(s)')).toBeInTheDocument();
    },
};

export const AllocateWithSeed: Story = {
    args: {
        ...createBaseProps(),
        ix: {
            parsed: {
                info: {
                    account: '9QqCYNWoxxEKUF8gWmyobZpJKvUxVS1uM6cCj9gEzpCQ',
                    base: '7L3NsRjRMzx7Kf12eJo7n7gvwUCQ7QvAFEBHG9JdVHsU',
                    owner: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
                    seed: 'allocate-seed',
                    space: 150,
                },
                type: 'allocateWithSeed',
            },
            program: 'system',
            programId: SystemProgram.programId,
        } as ParsedInstruction,
    },
    async play({ canvasElement }) {
        const canvas = within(canvasElement);
        expect(canvas.getByText(/Allocate Account w\/ Seed/)).toBeInTheDocument();
        expect(canvas.getByText('allocate-seed')).toBeInTheDocument();
    },
};

export const Assign: Story = {
    args: {
        ...createBaseProps(),
        ix: {
            parsed: {
                info: {
                    account: '9QqCYNWoxxEKUF8gWmyobZpJKvUxVS1uM6cCj9gEzpCQ',
                    owner: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
                },
                type: 'assign',
            },
            program: 'system',
            programId: SystemProgram.programId,
        } as ParsedInstruction,
    },
    async play({ canvasElement }) {
        const canvas = within(canvasElement);
        expect(canvas.getByText(/Assign Account/)).toBeInTheDocument();
    },
};

export const AssignWithSeed: Story = {
    args: {
        ...createBaseProps(),
        ix: {
            parsed: {
                info: {
                    account: '9QqCYNWoxxEKUF8gWmyobZpJKvUxVS1uM6cCj9gEzpCQ',
                    base: '7L3NsRjRMzx7Kf12eJo7n7gvwUCQ7QvAFEBHG9JdVHsU',
                    owner: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
                    seed: 'assign-seed',
                },
                type: 'assignWithSeed',
            },
            program: 'system',
            programId: SystemProgram.programId,
        } as ParsedInstruction,
    },
    async play({ canvasElement }) {
        const canvas = within(canvasElement);
        expect(canvas.getByText(/Assign Account w\/ Seed/)).toBeInTheDocument();
        expect(canvas.getByText('assign-seed')).toBeInTheDocument();
    },
};

export const Transfer: Story = {
    args: {
        ...createBaseProps(),
        ix: {
            parsed: {
                info: {
                    destination: '9QqCYNWoxxEKUF8gWmyobZpJKvUxVS1uM6cCj9gEzpCQ',
                    lamports: 5000000,
                    source: '7L3NsRjRMzx7Kf12eJo7n7gvwUCQ7QvAFEBHG9JdVHsU',
                },
                type: 'transfer',
            },
            program: 'system',
            programId: SystemProgram.programId,
        } as ParsedInstruction,
    },
    async play({ canvasElement }) {
        const canvas = within(canvasElement);
        expect(canvas.getByText('System Program: Transfer')).toBeInTheDocument();
        expect(canvas.getByText('0.005')).toBeInTheDocument();
    },
};

export const AdvanceNonce: Story = {
    args: {
        ...createBaseProps(),
        ix: {
            parsed: {
                info: {
                    nonceAccount: '9QqCYNWoxxEKUF8gWmyobZpJKvUxVS1uM6cCj9gEzpCQ',
                    nonceAuthority: '7L3NsRjRMzx7Kf12eJo7n7gvwUCQ7QvAFEBHG9JdVHsU',
                },
                type: 'advanceNonce',
            },
            program: 'system',
            programId: SystemProgram.programId,
        } as ParsedInstruction,
    },
    async play({ canvasElement }) {
        const canvas = within(canvasElement);
        expect(canvas.getByText(/Advance Nonce/)).toBeInTheDocument();
    },
};

export const WithdrawNonce: Story = {
    args: {
        ...createBaseProps(),
        ix: {
            parsed: {
                info: {
                    destination: '8L4NsRjRMzx7Kf12eJo7n7gvwUCQ7QvAFEBHG9JdVHsX',
                    lamports: 1000000,
                    nonceAccount: '9QqCYNWoxxEKUF8gWmyobZpJKvUxVS1uM6cCj9gEzpCQ',
                    nonceAuthority: '7L3NsRjRMzx7Kf12eJo7n7gvwUCQ7QvAFEBHG9JdVHsU',
                },
                type: 'withdrawNonce',
            },
            program: 'system',
            programId: SystemProgram.programId,
        } as ParsedInstruction,
    },
    async play({ canvasElement }) {
        const canvas = within(canvasElement);
        expect(canvas.getByText(/Withdraw Nonce/)).toBeInTheDocument();
        expect(canvas.getByText('0.001')).toBeInTheDocument();
    },
};

export const AuthorizeNonce: Story = {
    args: {
        ...createBaseProps(),
        ix: {
            parsed: {
                info: {
                    newAuthorized: '8L4NsRjRMzx7Kf12eJo7n7gvwUCQ7QvAFEBHG9JdVHsX',
                    nonceAccount: '9QqCYNWoxxEKUF8gWmyobZpJKvUxVS1uM6cCj9gEzpCQ',
                    nonceAuthority: '7L3NsRjRMzx7Kf12eJo7n7gvwUCQ7QvAFEBHG9JdVHsU',
                },
                type: 'authorizeNonce',
            },
            program: 'system',
            programId: SystemProgram.programId,
        } as ParsedInstruction,
    },
    async play({ canvasElement }) {
        const canvas = within(canvasElement);
        expect(canvas.getByText(/Authorize Nonce/)).toBeInTheDocument();
    },
};

export const InitializeNonce: Story = {
    args: {
        ...createBaseProps(),
        ix: {
            parsed: {
                info: {
                    nonceAccount: '9QqCYNWoxxEKUF8gWmyobZpJKvUxVS1uM6cCj9gEzpCQ',
                    nonceAuthority: '7L3NsRjRMzx7Kf12eJo7n7gvwUCQ7QvAFEBHG9JdVHsU',
                },
                type: 'initializeNonce',
            },
            program: 'system',
            programId: SystemProgram.programId,
        } as ParsedInstruction,
    },
    async play({ canvasElement }) {
        const canvas = within(canvasElement);
        expect(canvas.getByText(/Initialize Nonce/)).toBeInTheDocument();
    },
};

export const TransferWithSeed: Story = {
    args: {
        ...createBaseProps(),
        ix: {
            parsed: {
                info: {
                    destination: '9QqCYNWoxxEKUF8gWmyobZpJKvUxVS1uM6cCj9gEzpCQ',
                    lamports: 3000000,
                    source: '7L3NsRjRMzx7Kf12eJo7n7gvwUCQ7QvAFEBHG9JdVHsU',
                    sourceBase: '8L4NsRjRMzx7Kf12eJo7n7gvwUCQ7QvAFEBHG9JdVHsX',
                    sourceOwner: '6L2NsRjRMzx7Kf12eJo7n7gvwUCQ7QvAFEBHG9JdVHsY',
                    sourceSeed: 'transfer-seed',
                },
                type: 'transferWithSeed',
            },
            program: 'system',
            programId: SystemProgram.programId,
        } as ParsedInstruction,
    },
    async play({ canvasElement }) {
        const canvas = within(canvasElement);
        expect(canvas.getByText(/Transfer w\/ Seed/)).toBeInTheDocument();
        expect(canvas.getByText('transfer-seed')).toBeInTheDocument();
    },
};

export const UpgradeNonce: Story = {
    args: {
        ...createBaseProps(),
        ix: {
            parsed: {
                info: {
                    nonceAccount: '9QqCYNWoxxEKUF8gWmyobZpJKvUxVS1uM6cCj9gEzpCQ',
                },
                type: 'upgradeNonce',
            },
            program: 'system',
            programId: SystemProgram.programId,
        } as ParsedInstruction,
    },
    async play({ canvasElement }) {
        const canvas = within(canvasElement);
        expect(canvas.getByText(/Upgrade Nonce/)).toBeInTheDocument();
    },
};
