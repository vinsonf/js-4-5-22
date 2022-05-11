const state = 'CA';
class BankAccount {
    balance = 0;
    history = [];

    constructor(p_balance){
        console.log(p_balance);
        this.balance = p_balance
    }

    deposit(amount){
        this.balance += amount;
        this.history.push({
            amount,
            date: new Date(),
            balance: this.balance,
            note: 'deposit',
            location: state,
        })
    }

    payBill(amount, note){
        this.balance -= amount;
        this.history.push({
            note,
            amount,
            date: new Date(),
            balance: this.balance,
            location: state,
        });
    }
}

const myBankAccount = new BankAccount(500); 
const yourAccount = new BankAccount(1_000_000);
myBankAccount.deposit(1_000);
yourAccount.deposit(10_000);
myBankAccount.payBill(100, 'water bill');

console.log(myBankAccount, yourAccount);