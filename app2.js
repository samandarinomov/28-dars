class BankAccount{
    #owner;
    balance;

    constructor(owner,balance){
        this.#owner = owner;
        this.balance = balance;
    }
    addMoney(money){
        return this.balance + money
    }

    substractMoney(money){
        if(this.balance < money) return "There is not enough money on the card";
        else return this.balance - money
    }

    seeMyBalance(){
        return this.balance
    }
}

const account = new BankAccount("Samandar Inomov", 1000000)

console.log(account);

console.log(account.addMoney(50000));

console.log(account.substractMoney(100000));

console.log(account.seeMyBalance());

// owner incapsulate qilindi. 