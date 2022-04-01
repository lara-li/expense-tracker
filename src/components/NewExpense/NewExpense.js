import "./NewExpense.css";
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
function NewExpense(props) {
  const [formState, setFormState] = useState("closed");
  function expenseDataHandler(enteredData) {
    props.onAddData(enteredData);
    setFormState("closed")
  }
  function formOpenHandler() {
    setFormState("opened");
  }
  function formCloseHandler() {
    setFormState("closed");
  }
  if (formState === "closed") {
    return (
      <div className="form-wrapper">
        <button className="form-btn" onClick={formOpenHandler}>
          Add Expense
        </button>
      </div>
    );
  } else {
    return (
      <div className="form-wrapper">
        <ExpenseForm onClickClose={formCloseHandler}onSaveData={expenseDataHandler} />
      </div>
    );
  }
}
export default NewExpense;
