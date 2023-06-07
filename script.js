const form = document.querySelector(".form-3");
const budget = document.querySelector(".budget");
const url = "http://localhost:8000/expenses";
// var expenses = "";

/* Fetch expenses */
fetch(url)
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
  })
  .then((data) => {
    // console.log(data);
    var expenses = data;
    return expenses;
  });

console.log(expenses);
