/*
================================================================================================================================
Budget Constructor
================================================================================================================================
*/
class Budget {
    constructor(budget) {
        this.budget = budget;
    }
}



class Expense {
    constructor(expense) {
        this.expense = expense;
    }
}



class ExpenseSummary {
    constructor(name, amount) {
        this.name = name;
        this.amount = amount;
    }
}

/*
================================================================================================================================
class UI
================================================================================================================================
*/
class UI {
    static displayBudget() {
        
    }

    
    static displayTransactions() {
        const storedBudget = [
            {
                budget: 50000,
                expense: 20000
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
            h2WalletSize.innerHTML = '<i class="fa-solid fa-dollar-sign"></i>';
            const textNode = document.createTextNode(`${salary.budget}`);

            h2WalletSize.appendChild(textNode);
            walletIn.appendChild(h2WalletSize);
    }



    static addExpense(salary) {
        const walletExpense = document.querySelector('.wallet-expense');
            const h2WalletOut = document.createElement('h2');
            h2WalletOut.className = 'top top wallet-out';
            h2WalletOut.innerHTML = '<i class="fa-solid fa-dollar-sign"></i>';
            const textNode = document.createTextNode(`${salary.expense}`);

            h2WalletOut.appendChild(textNode)
            walletExpense.appendChild(h2WalletOut);
    }



    static addBalance(salary) {
        const  balanceInWallet = document.querySelector('.balance-in-wallet');
        const h2BalanceAtDisplay = document.createElement('h2');
            h2BalanceAtDisplay.className = 'top balance';
            h2BalanceAtDisplay.innerHTML = '<i class="fa-solid fa-dollar-sign"></i>';
            const textNode = document.createTextNode(`${Calculator.claculate(salary.budget, salary.expense)}`);

            h2BalanceAtDisplay.appendChild(textNode)
            balanceInWallet.appendChild(h2BalanceAtDisplay);
    }
    


    static displaySummary() {
        const storedSummary = [
            {
                name: 'Rent',
                amount: 10000
            },
            {
                name: 'Electricity Bill',
                amount: 3000
            },
            {
                name: 'Water Bill',
                amount: 5000
            }
        ];

        const tSummary = storedSummary;
        tSummary.forEach((summary) => UI.addToList(summary));
    }



    static addToList(summary) {
        const tableBody = document.querySelector('.table-body');
        const tr = document.createElement('tr');
        tr.className = 'table-body-row';
        tr.innerHTML = `<td class="table-detail">${summary.name}</td>
                        <td class="table-detail">${summary.amount}</td>
                        <td class="table-detail rem-edit">
                        <i class="far fa-edit edit"></i>
                        <i class="fas fa-trash delete"></i>
                        </td>`;
        
        tableBody.appendChild(tr);
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
Store Class
================================================================================================================================
*/



/*
================================================================================================================================
Event display content
================================================================================================================================
*/
document.addEventListener('DOMContentLoaded', UI.displayTransactions());
document.addEventListener('DOMContentLoaded', UI.displaySummary());



/*
================================================================================================================================
Event get total budget
================================================================================================================================
*/
const enteredBudget = document.querySelector('.budget')
enteredBudget.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const budget = document.getElementById('budget').value;    

    UI.addBudget(budget);
    UI.displayTransactions(budget)

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

    UI.displayTransactions(amount);
    UI.addExpense(amount);

    const summary = new ExpenseSummary(name, amount);
    UI.addToList(summary)    
});
