class Player
{
    private balance: number;
  
    constructor(initBalance: number = 1000) {
      this.balance = initBalance;
    }

    setBalance(amount: number): void {
      this.balance = amount;
    }

    getBalance(): number {
      return this.balance;
    }

    deductBalance(amount: number): void {
        this.balance -= amount;
    }

    updateBalance(amount: number): void {
      this.balance += amount;
    }
  
    canAfford(amount: number): boolean {
      return this.balance >= amount;
    }
  }

  export default Player;