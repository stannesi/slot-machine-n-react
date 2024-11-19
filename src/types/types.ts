export interface Player {
    balance: number;
    canAfford(amount: number): boolean;
    updateBalance(amount: number): void;
}