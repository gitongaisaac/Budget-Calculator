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
  static displayExpenses() {
    const storedExpenses = [
      {
        expense: "Mortgage",
        amount: 7000,
      },
      {
        expense: "Repair",
        amount: 400,
      },
    ];

    storedExpenses.forEach((expense) => {
      UI.addSummary(expense);
    });

    const totalExpenses = storedExpenses.reduce(
      (total, expense) => total + expense.amount,
      0
    );

    // UI.addExpense(storedExpenses);
    UI.addExpense(totalExpenses);
    console.log(totalExpenses);
    UI.addBalance(totalExpenses);
  }

  /* ==========addSummary========= */
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

  /* ==========addBudget========= */
  static addBudget(budget = 0) {
    const walletSize = document.querySelector(".wallet-size");
    walletSize.innerHTML = `<i class="fa-solid fa-dollar-sign"></i>${budget}`;
  }

  /* ==========addExpense========= */
  static addExpense(totalExpenses = 0) {
    const walletOut = document.querySelector(".wallet-out");
    walletOut.innerHTML = `<i class="fa-solid fa-dollar-sign"></i>${totalExpenses}`;
    console.log(totalExpenses);
  }

  /* ==========addBalance========= */
  static addBalance(totalExpenses = 0, budget = 0) {
    const balance = document.querySelector(".balance");
    const balanceDisplay = budget - totalExpenses;
    balance.innerHTML = `<i class="fa-solid fa-dollar-sign"></i>${balanceDisplay}`;
  }
}

/*
================================================================================================================================
Document Loaded Function
================================================================================================================================
*/
function documentLoaded() {
  UI.displayExpenses();
  UI.addBudget();
  UI.addBalance();
}

/*
================================================================================================================================
Document Load Event Listerner
================================================================================================================================
*/
document.addEventListener("DOMContentLoaded", (e) => {
  documentLoaded();
});

/*
================================================================================================================================
Event Listeners
================================================================================================================================
*/
const budgetForm = document.querySelector(".budget");
budgetForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const budget = document.getElementById("budget").value;
  UI.addBudget(budget);
  UI.addBalance(budget);
});
