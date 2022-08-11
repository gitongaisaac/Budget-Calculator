/*
================================================================================================================================
Expense Cosntructor
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
  static displayExpenses(newExpense) {
    const storedExpenses = [
      // {
      //   expense: "Mortgage",
      //   amount: 7000,
      // },
      // {
      //   expense: "Repair",
      //   amount: 400,
      // },
    ];
    storedExpenses.push(newExpense);

    storedExpenses.forEach((expense) => {
      UI.addSummary(expense);
    });

    const totalExpenses = storedExpenses.reduce(
      (total, expense) => total + expense.amount,
      0
    );

    UI.addExpense(totalExpenses);
    UI.addBalance(totalExpenses);
  }

  /* ========== addSummary ========= */
  static addSummary(expense) {
    const tableBody = document.querySelector(".table-body");
    const tr = document.createElement("tr");
    tr.className = "table-body-row";
    tr.innerHTML = `<td class="table-detail">${expense.expense}</td>
                      <td class="table-detail">${expense.amount}</td>
                      <td class="table-detail rem-edit">
                        <i class="far fa-edit edit"></i>
                        <i class="fas fa-trash delete"></i>
                        </td>
                      `;
    tableBody.appendChild(tr);
  }

  /* ========== addBudget ========= */
  static addBudget(budget = 0) {
    const walletSize = document.querySelector(".wallet-size");
    walletSize.innerHTML = `<i class="fa-solid fa-dollar-sign fa-sm"></i>${budget}`;
  }

  /* ========== addExpense ========= */
  static addExpense(totalExpenses = 0) {
    const walletOut = document.querySelector(".wallet-out");
    walletOut.innerHTML = `<i class="fa-solid fa-dollar-sign fa-sm"></i>${totalExpenses}`;
  }

  /* ========== addBalance ========= */
  static addBalance(totalExpenses = 0, budget = 0) {
    const balance = document.querySelector(".balance");
    const balanceDisplay = budget - totalExpenses;
    balance.innerHTML = `<i class="fa-solid fa-dollar-sign fa-sm"></i>${balanceDisplay}`;
  }

  /* ========== Clear Fields ========= */
  static clearFields() {
    document.getElementById("budget").value = " ";
    document.getElementById("expense").value = " ";
    document.getElementById("amount").value = " ";
  }

  static alerts(message, type) {
    const enterBudget = document.querySelector(".enter-budget");
    const form = document.querySelector(".budget");

    const div = document.createElement("div");
    div.innerHTML = `<p class="alert alert-${type}">${message}</p>`;

    enterBudget.insertBefore(div, form);
    setTimeout(() => document.querySelector(".alert").remove(), 3000);
  }
}

/*
================================================================================================================================
Document Load Event Listerner
================================================================================================================================
*/
document.addEventListener("DOMContentLoaded", (e) => {});

/*
================================================================================================================================
Event Listeners
================================================================================================================================
*/
/* ========== Budget form submit listener ========= */
const budgetForm = document.querySelector(".budget");
budgetForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const budget = document.getElementById("budget").value;

  if (budget === " ") {
    UI.alerts("Please Enter the budget", "error");
  } else if (budget < 0) {
    UI.alerts("The budget cannot be less than Zero", "error");
  } else {
    UI.addBudget(budget);
    UI.addBalance(budget);
    UI.clearFields();
  }
});

/* ========== Expense form submit listener ========= */
const expenseForm = document.querySelector(".expense");
expenseForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const expense = document.querySelector("#expense").value;
  const amount = document.querySelector("#amount").value;
  const amountNum = parseInt(amount);

  if (expense === " " || amountNum === " ") {
    UI.alerts("Please Enter all fields", "error");
  } else if (amount < 0) {
    UI.alerts("The amount cannot be less than 0", "error");
  } else {
    const newExpense = new Summary(expense, amountNum);
    UI.displayExpenses(newExpense);
    UI.clearFields();
  }
});
