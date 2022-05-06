/*
================================================================================================================================
Expense Summary Constructor
================================================================================================================================
*/
class Summary {
    constructor(expense, amount) {
        this.expense = expense;        
        this.amount = amount;
    }
}


/*
================================================================================================================================
UI Class
================================================================================================================================
*/
class UI {
    static addBudget(budget) {
        // let budget = 0;
        const walletIn = document.querySelector('.wallet-in');
        const h2WalletSize = document.createElement('h2');
            h2WalletSize.className = 'top wallet-size';
            h2WalletSize.innerHTML = '<i class="fa-solid fa-dollar-sign"></i>';
            const textNode = document.createTextNode(budget);

            h2WalletSize.appendChild(textNode);
            walletIn.appendChild(h2WalletSize);
    }



    static addExpense(expense) {
        const walletExpense = document.querySelector('.wallet-expense');
            const h2WalletOut = document.createElement('h2');
            h2WalletOut.className = 'top top wallet-out';
            h2WalletOut.innerHTML = '<i class="fa-solid fa-dollar-sign"></i>';
            const textNode = document.createTextNode(`${expense}`);

            h2WalletOut.appendChild(textNode)
            walletExpense.appendChild(h2WalletOut);
    }



    static addBalance(budget, expense) {
        const  balanceInWallet = document.querySelector('.balance-in-wallet');
        const h2BalanceAtDisplay = document.createElement('h2');
            h2BalanceAtDisplay.className = 'top balance';
            h2BalanceAtDisplay.innerHTML = '<i class="fa-solid fa-dollar-sign"></i>';
            const textNode = document.createTextNode(`${Calculator.claculate(budget, expense)}`);

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
        // let tExpense = '';
        const balance = tBudget - tExpense;

        return balance;
    }
}


/*
================================================================================================================================
Function Listeners
================================================================================================================================
*/
function listeners() {
    const budgetForm = document.querySelector('.budget');
    const expenseForm = document.querySelector('.expense');
    
// Budget Listener
    budgetForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let budget = document.getElementById('budget').value;

        UI.addBudget(budget);
        // UI.addBalance(budget)
    });


// Expense Listener
    expenseForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('expense').value;
        const amount = document.getElementById('amount').value;

        UI.addExpense(amount);
        // UI.addBalance(expense)

        const summary = new Summary(name, amount);
        UI.addToList(summary);
    });
    
    UI.displaySummary();
}



/*
================================================================================================================================
Event document loaded
================================================================================================================================
*/
document.addEventListener('DOMContentLoaded', (e) => {
    listeners();
});



/*
================================================================================================================================
Event Get Buget Value
================================================================================================================================
*/



/*
================================================================================================================================
UI Class
================================================================================================================================
*/


/*
================================================================================================================================
UI Class
================================================================================================================================
*/


/*
================================================================================================================================
UI Class
================================================================================================================================
*/


/*
================================================================================================================================
UI Class
================================================================================================================================
*/


/*
================================================================================================================================
UI Class
================================================================================================================================
*/


/*
================================================================================================================================
UI Class
================================================================================================================================
*/



/*
================================================================================================================================
UI Class
================================================================================================================================
*/


/*
================================================================================================================================
UI Class
================================================================================================================================
*/


