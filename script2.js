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

    console.log("Javascript is a moron");
    storedExpenses.forEach((expense) => {
      console.log(expense);
      UI.addExpense(expense);
    });
  }

  static addExpense(expense) {
    const tableBody = document.querySelector("table-body");
    const tr = document.createElement("tr");
    tr.className = "table-body-row";
    tr.innerHTML = `<td class="table-detail">${expense.expense}</td>
                      <td class="table-detail">${expense.amount}</td>
                      <td class="table-detail">x</td>
                      `;
  }
}

/*
================================================================================================================================
Document Loaded Function
================================================================================================================================
*/
function DocumentLoaded() {
  UI.displayExpenses();
}

/*
================================================================================================================================
Document Load Event Listerner
================================================================================================================================
*/
document.addEventListener("DomContentLoaded", DocumentLoaded());
