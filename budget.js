/*
================================================================================================================================
Expense Summary Constructor
================================================================================================================================
*/
class Summary {
    constructor(name, amount) {
        this.name = name;        
        this.amount = amount;
    }
}


/*
================================================================================================================================
UI Class
================================================================================================================================
*/
class UI {
    static displaySummary() {
        const storedSummary = [
            // {
            //     name: 'Rent',
            //     amount: 10000
            // },
            // {
            //     name: 'Electricity Bill',
            //     amount: 3000
            // },
            // {
            //     name: 'Water Bill',
            //     amount: 5000
            // }
        ];

        const tSummary = storedSummary;
        tSummary.forEach((summary) => UI.addToList(summary));

        const totalAmount = tSummary.reduce((total, summary) => total + summary.amount, 0);
        // const totalAmount = tSummary.reduce((total, summary) => total + summary.amount, 0);

        // UI.addExpense(totalAmount)
        UI.addBalance(totalAmount);
    }



    static addBudget(budget = 0) {
        const walletSize = document.querySelector('.wallet-size');
            walletSize.innerHTML = `<i class="fa-solid fa-dollar-sign"></i>${budget}`;
            
    }



    static addExpense(totalAmount = 0) {
            const walletOut = document.querySelector('.wallet-out');
            walletOut.innerHTML = `<i class="fa-solid fa-dollar-sign"></i>${totalAmount}`;
    }



    static addBalance(budget, total = 0) {
        const walletBalance = document.querySelector('.balance');
            walletBalance.innerHTML = `<i class="fa-solid fa-dollar-sign"></i>${Calculator.claculate(budget, total)}`;
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
        const tableDetail = document.querySelector('.table-detail');
        return tableDetail;
    }



    static alerts(message, type) {
        const enterBudget = document.querySelector('.enter-budget');
        const form = document.querySelector('.budget');

        const div = document.createElement('div');
        div.innerHTML = `<p class="alert alert-${type}">${message}</p>`;

        enterBudget.insertBefore(div, form);
        setTimeout(() => document.querySelector('.alert').remove(), (3000));
    }



    static clearFields() {
        document.getElementById('budget').value = '';
        document.getElementById('expense').value = '';
        document.getElementById('amount').value = '';
    }
}



/*
================================================================================================================================
claculator class
================================================================================================================================
*/
class Calculator {
    static claculate(budget, totalAmount) {
        const totalExpense = budget - totalAmount;
        return totalExpense;
        
    }
}

/*
================================================================================================================================
Function Listeners
================================================================================================================================
*/
function listeners() {    
    UI.displaySummary();
    UI.addBudget();
    UI.addExpense();
    // UI.addBalance();
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
Listeners
================================================================================================================================
*/
const budgetForm = document.querySelector('.budget');
const expenseForm = document.querySelector('.expense');

/* =========== Budget Listener =============== */
budgetForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let budget = document.getElementById('budget').value;

    UI.addBudget(budget);
    UI.clearFields();
    UI.addBalance(budget);

});


/* =========== Expense Listener =============== */
expenseForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('expense').value;
    const amount = document.getElementById('amount').value;

    UI.addExpense(amount);
    UI.clearFields();

    const summary = new Summary(name, amount);
    const tSummary = new Summary(name, amount);
    UI.displaySummary(tSummary);
    UI.addToList(summary);
});



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


