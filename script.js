/*
================================================================================================================================
Budget Constructor
================================================================================================================================
*/
class Budget {
    constructor(budget, expense, balance) {
        this.budget = budget;
        this.expense = expense;
        this.balance = balance;
    }
}


/*
================================================================================================================================
class UI
================================================================================================================================
*/
class UI {
    static displayTransactions() {
        const storedBudget = [
            {
                budget: '70000',
                expense: '80000'
            }
        ];

        const tSalary = storedBudget;
        tSalary.forEach((salary) => UI.addBudget(salary));
        tSalary.forEach((salary) => UI.addExpense(salary));
        tSalary.forEach((salary) => UI.addBalance(salary))
    }

    static addBudget(salary) {
        const walletIn = document.querySelector('.wallet-in');
        const h2WalletSize = document.createElement('h2');
        h2WalletSize.className = 'top wallet-size';
        // h2WalletSize.innerHTML = `<i class="fa-solid fa-dollar-sign"></i>70,000`;
        h2WalletSize.innerHTML = `<i class="fa-solid fa-dollar-sign"></i>${salary.budget}`;

        walletIn.appendChild(h2WalletSize);
    }

    static addExpense(salary) {
        const walletExpense = document.querySelector('.wallet-expense');
        const h2WalletOut = document.createElement('h2');
        h2WalletOut.className = 'top top wallet-out';
        // h2WalletOut.innerHTML = `<i class="fa-solid fa-dollar-sign"></i>20,000`;
        h2WalletOut.innerHTML = `<i class="fa-solid fa-dollar-sign"></i>${salary.expense}`;

        walletExpense.appendChild(h2WalletOut);
    }


    static addBalance(salary) {
        const  balanceInWallet = document.querySelector('.balance-in-wallet');
        const h2BalanceAtDisplay = document.createElement('h2');
        h2BalanceAtDisplay.className = 'top balance';
        h2BalanceAtDisplay.innerHTML = `<i class="fa-solid fa-dollar-sign"></i>
        ${Calculator.claculate(salary.budget, salary.expense)}`;
        // h2BalanceAtDisplay.textContent = '50000'

        balanceInWallet.appendChild(h2BalanceAtDisplay);
    }

    static displaySummary() {

    }
}



/*
================================================================================================================================
claculator class
================================================================================================================================
*/
class Calculator {
    static claculate(tBudget, tExpense) {
        const balance = tBudget - tExpense;

        return balance;
    }
}





/*
================================================================================================================================
Event display content
================================================================================================================================
*/
document.addEventListener('DOMContentLoaded', UI.displayTransactions());



/*
================================================================================================================================
Event get total budget
================================================================================================================================
*/
const enteredBudget = document.querySelector('.budget')
enteredBudget.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const budget = document.getElementById('budget').value;
    
    // UI.addBudget(budget);
    UI.displayTransactions(budget)
    Calculator.claculate(budget);
});





/*
================================================================================================================================
Event get expense
================================================================================================================================
*/
const enteredExpense = document.querySelector('.expense');
enteredExpense.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('expense').value;
    const amount = document.getElementById('amount').value;

    // UI.addExpense(amount);
    UI.displayTransactions(amount);
    Calculator.claculate(amount);
    
});
