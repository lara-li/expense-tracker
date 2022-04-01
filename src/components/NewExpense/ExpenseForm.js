import "./ExpenseForm.css";
import { useState } from "react";
function ExpenseForm(props) {
  /* const [inputTitle, setInputTitle] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState(""); */
  const [userInput, setUserInput] = useState({
    inputTitle: "",
    inputAmount: "",
    inputDate: "",
  });

  function titleChangeHandler(e) {
    //setInputTitle(e.target.value);
    setUserInput((prevState) => {
      return {
        ...prevState,
        inputTitle: e.target.value,
      };
    });
  }

  function amountChangeHandler(e) {
    //setInputAmount(e.target.value);
    setUserInput((prevState) => {
      return {
        ...prevState,
        inputAmount: e.target.value,
      };
    });
  }
  function dateChangeHandler(e) {
    //setInputDate(e.target.value);
    setUserInput((prevState) => {
      return {
        ...prevState,
        inputDate: e.target.value,
      };
    });
  }
  function submitHandler(e) {
    e.preventDefault();
    const expenseData = {
      title: userInput.inputTitle,
      amount: +userInput.inputAmount,
      date: new Date(userInput.inputDate),
    };
    props.onSaveData(expenseData);
    setUserInput({
      inputTitle: "",
      inputAmount: "",
      inputDate: "",
    });
  }
  return (
    <form className="form" onSubmit={submitHandler}>
        <div className="form-control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            required
            id="title"
            value={userInput.inputTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            required
            id="amount"
            step="0.01"
            min="0.01"
            value={userInput.inputAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="form-control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            min="2020-01-01"
            max="2022-03-15"
            required
            onChange={dateChangeHandler}
            value={userInput.inputDate}
          />
        </div>     
        <div className="btn-box">
          <button className="form-btn" onClick={props.onClickClose}>Cancel</button>
          <button className="form-btn" >Add Expense </button>
        </div>
    </form>
  );
}
export default ExpenseForm;

/* import InputWarning from "../UI/InputWarning";

{/*inputState&&<InputWarning/>}*/
/*if (e.target.value.length > 1) {
  setInputState(true);
}else setInputState(false);*/
/*   const [inputState, setInputState] = useState(false);
 */
