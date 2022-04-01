import { useState } from "react";

import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
function ExpensesAll(props) {
  const [selectedYear, setSelectedYear] = useState("2020");
  function getFilterYear(year) {
    setSelectedYear(year);
  }
  const filteredExpenses = props.text.filter(expense=> {
    return expense.date.getFullYear().toString() === selectedYear;
  });  

  return (
    <Card>
      <ExpenseFilter  filteredExpenses={filteredExpenses} selectYear={selectedYear} onFilter={getFilterYear} />
      <ExpensesList filteredExpenses={filteredExpenses}/>
    </Card>
  );
}
export default ExpensesAll;
