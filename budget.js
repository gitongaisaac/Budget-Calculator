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
    // const storedSummary = [
    //     {
    //         name: 'Rent',
    //         amount: 10000
    //     },
    //     {
    //         name: 'Electricity Bill',
    //         amount: 3000
    //     },
    //     {
    //         name: 'Water Bill',
    //         amount: 5000
    //     }
    // ];

    const tSummary = Store.getExpense();
    // const tSummary = storedSummary;
    tSummary.forEach((summary) => UI.addToList(summary));
    const totalAmount = tSummary.reduce(
      (total, summary) => total + summary.amount,
      0
    );

    console.log(totalAmount);
    UI.addExpense(totalAmount);
    UI.addBalance(totalAmount);
  }

  static addBudget(budget = 0) {
    const walletSize = document.querySelector(".wallet-size");
    walletSize.innerHTML = `<i class="fa-solid fa-dollar-sign"></i>${budget}`;
  }

  static addExpense(totalAmount = 0) {
    const walletOut = document.querySelector(".wallet-out");
    walletOut.innerHTML = `<i class="fa-solid fa-dollar-sign"></i>${totalAmount}`;
    // console.log(totalAmount);
  }

  static addBalance(totalAmount, budget = 0) {
    const walletBalance = document.querySelector(".balance");
    walletBalance.innerHTML = `<i class="fa-solid fa-dollar-sign"></i>${Calculator.calculate(
      budget,
      totalAmount
    )}`;
    // console.log(budget);
  }

  static addToList(summary) {
    const tableBody = document.querySelector(".table-body");
    const tr = document.createElement("tr");
    tr.className = "table-body-row";
    tr.innerHTML = `<td class="table-detail">${summary.name}</td>
                        <td class="table-detail">${summary.amount}</td>
                        <td class="table-detail rem-edit">
                        <i class="far fa-edit edit"></i>
                        <i class="fas fa-trash delete"></i>
                        </td>`;

    tableBody.appendChild(tr);
    const tableDetail = document.querySelector(".table-detail");
    return tableDetail;
  }

  static alerts(message, type) {
    const enterBudget = document.querySelector(".enter-budget");
    const form = document.querySelector(".budget");

    const div = document.createElement("div");
    div.innerHTML = `<p class="alert alert-${type}">${message}</p>`;

    enterBudget.insertBefore(div, form);
    setTimeout(() => document.querySelector(".alert").remove(), 3000);
  }

  static clearFields() {
    document.getElementById("budget").value = "";
    document.getElementById("expense").value = "";
    document.getElementById("amount").value = "";
  }
}

/*
================================================================================================================================
Store Class
================================================================================================================================
*/
class Store {
  static getExpense() {
    let tSummary;
    if (localStorage.getItem("tSummary") === null) {
      tSummary = [];
    } else {
      tSummary = JSON.parse(localStorage.getItem("tSummary"));
    }
    return tSummary;
  }

  static setExpense(summary) {
    const tSummary = Store.getExpense();
    tSummary.push(summary);
    localStorage.setItem("tSummary", JSON.stringify(tSummary));
    // localStorage.setItem('tSummary', tSummary);
    console.log(tSummary);
  }

  static deleteExpense() {}
}

/*
================================================================================================================================
claculator class
================================================================================================================================
*/
class Calculator {
  static calculate(enteredbudget, summedExpense) {
    const totalExpense = enteredbudget - summedExpense;
    return totalExpense;
  }

  static totalExpenses(expenses) {}
}

/*
================================================================================================================================
Function Listeners
================================================================================================================================
*/
function listeners() {
  UI.displaySummary();
  UI.addBudget();
  // UI.addExpense();
}

/*
================================================================================================================================
Event document loaded
================================================================================================================================
*/
document.addEventListener("DOMContentLoaded", (e) => {
  listeners();
});

/*
================================================================================================================================
Listeners
================================================================================================================================
*/
const budgetForm = document.querySelector(".budget");
const expenseForm = document.querySelector(".expense");

/* =========== Budget Listener =============== */
budgetForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let budget = document.getElementById("budget").value;

  UI.addBudget(budget);
  UI.addBalance(budget);
  UI.clearFields();
});

/* =========== Expense Listener =============== */
expenseForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("expense").value;
  const amount = document.getElementById("amount").value;

  if (name === " " || amount === " ") {
    UI.alerts("Please fill in all fields", "error");
  } else if (amount < 0) {
    UI.alerts("The amount cannot be less than 0", "error");
    UI.clearFields();
  } else {
    UI.clearFields();

    const summary = new Summary(name, amount);
    const tSummary = new Summary(name, amount);
    createArray(tSummary);

    UI.addToList(summary);

    Store.setExpense(summary);
    console.log(localStorage);

    let expenses = new Summary(name, amount);
    // Calculator.totalExpenses(expenses);
    UI.displaySummary(expenses);
  }
});

/*
================================================================================================================================
UI Class
================================================================================================================================
*/

function createArray(tSummary) {
  const expenseObject = {
    name: `${tSummary.name}`,
    amount: `${tSummary.amount}`,
  };

  const enteredSummary = [];

  enteredSummary.push(expenseObject);

  // console.log(enteredSummary);

  enteredSummary.forEach((summary) => console.log(summary));
  const totalAmount = enteredSummary.reduce(
    (total, summary) => total + summary.amount,
    0
  );

  // console.log(totalAmount);
}

const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Lemon");
// console.log(fruits);
