// Income tracking functionality
const incomeForm = document.getElementById("income-form");
const incomeDisplay = document.getElementById("income-display");

let incomeList = [];

incomeForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const busId = document.getElementById("bus-id-income").value;
  const incomeAmount = document.getElementById("income-amount").value;
  const incomeCategory = document.getElementById("income-category").value;

  const incomeEntry = {
    busId,
    incomeAmount: parseFloat(incomeAmount),
    incomeCategory,
  };

  incomeList.push(incomeEntry);
  updateIncomeDisplay();
  incomeForm.reset();
});

function updateIncomeDisplay() {
  incomeDisplay.innerHTML = "<h3>Income Records:</h3>";
  incomeList.forEach((entry, index) => {
    incomeDisplay.innerHTML += `
            <p>Bus ${entry.busId}: $${entry.incomeAmount} - ${entry.incomeCategory}</p>
        `;
  });
}

// Expense tracking functionality
const expenseForm = document.getElementById("expense-form");
const expenseDisplay = document.getElementById("expense-display");

let expenseList = [];

expenseForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const busId = document.getElementById("bus-id-expense").value;
  const expenseAmount = document.getElementById("expense-amount").value;
  const expenseCategory = document.getElementById("expense-category").value;

  const expenseEntry = {
    busId,
    expenseAmount: parseFloat(expenseAmount),
    expenseCategory,
  };

  expenseList.push(expenseEntry);
  updateExpenseDisplay();
  expenseForm.reset();
});

function updateExpenseDisplay() {
  expenseDisplay.innerHTML = "<h3>Expense Records:</h3>";
  expenseList.forEach((entry, index) => {
    expenseDisplay.innerHTML += `
            <p>Bus ${entry.busId}: $${entry.expenseAmount} - ${entry.expenseCategory}</p>
        `;
  });
}

// Generate report functionality
document
  .getElementById("generate-report")
  .addEventListener("click", function () {
    const reportDisplay = document.getElementById("report-display");

    let totalIncome = incomeList.reduce(
      (sum, entry) => sum + entry.incomeAmount,
      0
    );
    let totalExpenses = expenseList.reduce(
      (sum, entry) => sum + entry.expenseAmount,
      0
    );
    let totalProfit = totalIncome - totalExpenses;

    reportDisplay.innerHTML = `
        <h3>Report Summary:</h3>
        <p>Total Income: $${totalIncome}</p>
        <p>Total Expenses: $${totalExpenses}</p>
        <p>Profit/Loss: $${totalProfit}</p>
    `;
  });
