import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
function ExpensesList(props) {
  const filteredExpenses = props.filteredExpenses;
  if (filteredExpenses.length === 0) {
    return <h3 className="expenses-list__fallback">No Expenses Found</h3>
  }
  return (
    <ul>
      {
        (filteredExpenses.map((item) => {
          return (
            <ExpenseItem
              key={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          );
        }))
      }
    </ul>
  );
}
export default ExpensesList;
