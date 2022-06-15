function Checking(amount) {
    console.log('Creating account with ' + amount)
    this.balance = amount; //property
    this.deposit = deposit; // function
    this.withdraw = withdraw; // function
    this.toString = toString; // function
}

function deposit(amount) {
    console.log('Depositing ' + amount);

    this.balance += amount;
}

function withdraw(amount) {
    console.log('Withdrawing ' + amount);
    if (amount <= this.balance) {
        this.balance -= amount;
    }
    if (amount > this.balance) {
        console.log('insufficient funds');
    }
}


function toString() {
    return 'Balance: ' + this.balance;
}

var account = new Checking(500);

account.deposit(1000);

console.log(account.toString());

account.withdraw(750);

console.log(account.toString());
