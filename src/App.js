import { useState } from "react";
import ExpensesAll from "./components/Expenses/ExpensesAll";
import NewExpense from "./components/NewExpense/NewExpense";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2020, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2022, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2020, 5, 12),
  },
];
function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  function addNewExpense(expenseData) {
    const newExpenseData = {
      id: "e" + (expenses.length + 1),
      ...expenseData,
    };
    setExpenses((prevExpenses) => {
      return [newExpenseData, ...prevExpenses];
    });
  }

  return (
    <div>
      <NewExpense onAddData={addNewExpense} />
      <ExpensesAll text={expenses} />
    </div>
  );
}

export default App;
