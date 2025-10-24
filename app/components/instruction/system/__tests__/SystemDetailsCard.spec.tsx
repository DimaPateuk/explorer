import { ParsedInstruction, ParsedTransaction, SystemProgram } from '@solana/web3.js';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { vi } from 'vitest';

import { SystemDetailsCard } from '../SystemDetailsCard';

// Mock the useCluster hook to avoid provider requirement
vi.mock('@providers/cluster', () => ({
    useCluster: vi.fn(() => ({
        cluster: 'mainnet-beta',
        name: 'mainnet-beta',
        url: 'https://api.mainnet-beta.solana.com',
    })),
}));

// Mock tx utils
vi.mock('@utils/tx', async () => {
    const actual = await vi.importActual('@utils/tx');
    return {
        ...actual,
        getProgramName: vi.fn((_programId: string, _cluster: string) => 'System Program'),
    };
});

// Mock raw transaction provider hooks
vi.mock('@providers/transactions/raw', () => ({
    useFetchRawTransaction: vi.fn(() => vi.fn()),
    useRawTransactionDetails: vi.fn(() => undefined),
}));

// Mock all the child detail cards
vi.mock('../CreateDetailsCard', () => ({
    CreateDetailsCard: () => <div data-testid="create-details-card">Create Account Card</div>,
}));

vi.mock('../CreateWithSeedDetailsCard', () => ({
    CreateWithSeedDetailsCard: () => <div data-testid="create-with-seed-details-card">Create With Seed Card</div>,
}));

vi.mock('../AllocateDetailsCard', () => ({
    AllocateDetailsCard: () => <div data-testid="allocate-details-card">Allocate Card</div>,
}));

vi.mock('../AllocateWithSeedDetailsCard', () => ({
    AllocateWithSeedDetailsCard: () => <div data-testid="allocate-with-seed-details-card">Allocate With Seed Card</div>,
}));

vi.mock('../AssignDetailsCard', () => ({
    AssignDetailsCard: () => <div data-testid="assign-details-card">Assign Card</div>,
}));

vi.mock('../AssignWithSeedDetailsCard', () => ({
    AssignWithSeedDetailsCard: () => <div data-testid="assign-with-seed-details-card">Assign With Seed Card</div>,
}));

vi.mock('../TransferDetailsCard', () => ({
    TransferDetailsCard: () => <div data-testid="transfer-details-card">Transfer Card</div>,
}));

vi.mock('../NonceAdvanceDetailsCard', () => ({
    NonceAdvanceDetailsCard: () => <div data-testid="nonce-advance-details-card">Nonce Advance Card</div>,
}));

vi.mock('../NonceWithdrawDetailsCard', () => ({
    NonceWithdrawDetailsCard: () => <div data-testid="nonce-withdraw-details-card">Nonce Withdraw Card</div>,
}));

vi.mock('../NonceAuthorizeDetailsCard', () => ({
    NonceAuthorizeDetailsCard: () => <div data-testid="nonce-authorize-details-card">Nonce Authorize Card</div>,
}));

vi.mock('../NonceInitializeDetailsCard', () => ({
    NonceInitializeDetailsCard: () => <div data-testid="nonce-initialize-details-card">Nonce Initialize Card</div>,
}));

vi.mock('../TransferWithSeedDetailsCard', () => ({
    TransferWithSeedDetailsCard: () => <div data-testid="transfer-with-seed-details-card">Transfer With Seed Card</div>,
}));

vi.mock('../UpgradeNonceDetailsCard', () => ({
    UpgradeNonceDetailsCard: () => <div data-testid="upgrade-nonce-details-card">Upgrade Nonce Card</div>,
}));

vi.mock('../UnknownDetailsCard', () => ({
    UnknownDetailsCard: () => <div data-testid="unknown-details-card">Unknown Instruction Card</div>,
}));

// Mock console.error to check error logging
const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

describe('SystemDetailsCard', () => {
    const defaultProps = {
        childIndex: undefined,
        index: 0,
        innerCards: undefined,
        result: { err: null },
        tx: {
            message: {
                accountKeys: [],
                instructions: [],
                recentBlockhash: 'mock-recent-blockhash',
            },
            signatures: ['mock-signature-hash'],
        } as ParsedTransaction,
    };

    beforeEach(() => {
        consoleErrorSpy.mockClear();
    });

    afterAll(() => {
        consoleErrorSpy.mockRestore();
    });

    it('should render CreateDetailsCard for createAccount instruction', () => {
        const ix = {
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
        } as ParsedInstruction;

        render(<SystemDetailsCard {...defaultProps} ix={ix} />);

        expect(screen.getByTestId('create-details-card')).toBeInTheDocument();
        expect(screen.getByText('Create Account Card')).toBeInTheDocument();
    });

    it('should render CreateWithSeedDetailsCard for createAccountWithSeed instruction', () => {
        const ix = {
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
        } as ParsedInstruction;

        render(<SystemDetailsCard {...defaultProps} ix={ix} />);

        expect(screen.getByTestId('create-with-seed-details-card')).toBeInTheDocument();
    });

    it('should render AllocateDetailsCard for allocate instruction', () => {
        const ix = {
            parsed: {
                info: {
                    account: '9QqCYNWoxxEKUF8gWmyobZpJKvUxVS1uM6cCj9gEzpCQ',
                    space: 100,
                },
                type: 'allocate',
            },
            program: 'system',
            programId: SystemProgram.programId,
        } as ParsedInstruction;

        render(<SystemDetailsCard {...defaultProps} ix={ix} />);

        expect(screen.getByTestId('allocate-details-card')).toBeInTheDocument();
    });

    it('should render AllocateWithSeedDetailsCard for allocateWithSeed instruction', () => {
        const ix = {
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
        } as ParsedInstruction;

        render(<SystemDetailsCard {...defaultProps} ix={ix} />);

        expect(screen.getByTestId('allocate-with-seed-details-card')).toBeInTheDocument();
    });

    it('should render AssignDetailsCard for assign instruction', () => {
        const ix = {
            parsed: {
                info: {
                    account: '9QqCYNWoxxEKUF8gWmyobZpJKvUxVS1uM6cCj9gEzpCQ',
                    owner: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
                },
                type: 'assign',
            },
            program: 'system',
            programId: SystemProgram.programId,
        } as ParsedInstruction;

        render(<SystemDetailsCard {...defaultProps} ix={ix} />);

        expect(screen.getByTestId('assign-details-card')).toBeInTheDocument();
    });

    it('should render AssignWithSeedDetailsCard for assignWithSeed instruction', () => {
        const ix = {
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
        } as ParsedInstruction;

        render(<SystemDetailsCard {...defaultProps} ix={ix} />);

        expect(screen.getByTestId('assign-with-seed-details-card')).toBeInTheDocument();
    });

    it('should render TransferDetailsCard for transfer instruction', () => {
        const ix = {
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
        } as ParsedInstruction;

        render(<SystemDetailsCard {...defaultProps} ix={ix} />);

        expect(screen.getByTestId('transfer-details-card')).toBeInTheDocument();
    });

    it('should render NonceAdvanceDetailsCard for advanceNonce instruction', () => {
        const ix = {
            parsed: {
                info: {
                    nonceAccount: '9QqCYNWoxxEKUF8gWmyobZpJKvUxVS1uM6cCj9gEzpCQ',
                    nonceAuthority: '7L3NsRjRMzx7Kf12eJo7n7gvwUCQ7QvAFEBHG9JdVHsU',
                },
                type: 'advanceNonce',
            },
            program: 'system',
            programId: SystemProgram.programId,
        } as ParsedInstruction;

        render(<SystemDetailsCard {...defaultProps} ix={ix} />);

        expect(screen.getByTestId('nonce-advance-details-card')).toBeInTheDocument();
    });

    it('should render NonceWithdrawDetailsCard for withdrawNonce instruction', () => {
        const ix = {
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
        } as ParsedInstruction;

        render(<SystemDetailsCard {...defaultProps} ix={ix} />);

        expect(screen.getByTestId('nonce-withdraw-details-card')).toBeInTheDocument();
    });

    it('should render NonceAuthorizeDetailsCard for authorizeNonce instruction', () => {
        const ix = {
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
        } as ParsedInstruction;

        render(<SystemDetailsCard {...defaultProps} ix={ix} />);

        expect(screen.getByTestId('nonce-authorize-details-card')).toBeInTheDocument();
    });

    it('should render NonceInitializeDetailsCard for initializeNonce instruction', () => {
        const ix = {
            parsed: {
                info: {
                    nonceAccount: '9QqCYNWoxxEKUF8gWmyobZpJKvUxVS1uM6cCj9gEzpCQ',
                    nonceAuthority: '7L3NsRjRMzx7Kf12eJo7n7gvwUCQ7QvAFEBHG9JdVHsU',
                },
                type: 'initializeNonce',
            },
            program: 'system',
            programId: SystemProgram.programId,
        } as ParsedInstruction;

        render(<SystemDetailsCard {...defaultProps} ix={ix} />);

        expect(screen.getByTestId('nonce-initialize-details-card')).toBeInTheDocument();
    });

    it('should render TransferWithSeedDetailsCard for transferWithSeed instruction', () => {
        const ix = {
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
        } as ParsedInstruction;

        render(<SystemDetailsCard {...defaultProps} ix={ix} />);

        expect(screen.getByTestId('transfer-with-seed-details-card')).toBeInTheDocument();
    });

    it('should render UpgradeNonceDetailsCard for upgradeNonce instruction', () => {
        const ix = {
            parsed: {
                info: {
                    nonceAccount: '9QqCYNWoxxEKUF8gWmyobZpJKvUxVS1uM6cCj9gEzpCQ',
                },
                type: 'upgradeNonce',
            },
            program: 'system',
            programId: SystemProgram.programId,
        } as ParsedInstruction;

        render(<SystemDetailsCard {...defaultProps} ix={ix} />);

        expect(screen.getByTestId('upgrade-nonce-details-card')).toBeInTheDocument();
    });

    it('should render UnknownDetailsCard for unknown instruction type', () => {
        const ix = {
            parsed: {
                info: {},
                type: 'unknownInstruction',
            },
            program: 'system',
            programId: SystemProgram.programId,
            keys: [],
            data: Buffer.from([]),
        } as ParsedInstruction;

        render(<SystemDetailsCard {...defaultProps} ix={ix} />);

        // UnknownDetailsCard renders InstructionCard with defaultRaw
        expect(screen.getByText(/System Program: Unknown Instruction/)).toBeInTheDocument();
    });

    it('should render UnknownDetailsCard and log error when parsing fails', () => {
        const ix = {
            parsed: {
                info: {
                    // Missing required fields to trigger validation error
                },
                type: 'createAccount',
            },
            program: 'system',
            programId: SystemProgram.programId,
            keys: [],
            data: Buffer.from([]),
        } as ParsedInstruction;

        render(<SystemDetailsCard {...defaultProps} ix={ix} />);

        // When parsing fails, component falls back to InstructionCard with defaultRaw
        expect(screen.getByText(/System Program: Unknown Instruction/)).toBeInTheDocument();
        expect(consoleErrorSpy).toHaveBeenCalled();
    });

    it('should render UnknownDetailsCard when instruction has no parsed field', () => {
        const ix = {
            program: 'system',
            programId: SystemProgram.programId,
            keys: [],
            data: Buffer.from([]),
        } as unknown as ParsedInstruction;

        render(<SystemDetailsCard {...defaultProps} ix={ix} />);

        // When there's no parsed field, component falls back to InstructionCard with defaultRaw
        expect(screen.getByText(/System Program: Unknown Instruction/)).toBeInTheDocument();
        expect(consoleErrorSpy).toHaveBeenCalled();
    });
});
