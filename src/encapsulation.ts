class BankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  private validAmount(amount: number) {
    if (amount < 0) return console.error("Amount needs to be positive");
  }

  public deposit(amount: number): void {
    this.validAmount(amount);
    this.balance += amount;
    console.log("amount deposit");
  }

  public withdraw(amount: number): void {
    this.validAmount(amount);

    this.balance -= amount;
  }
}
