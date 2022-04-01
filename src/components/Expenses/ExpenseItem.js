import{useState} from 'react';
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  //let title=props.title;
  const [title,setTitle]=useState(props.title);
  function clickHandler(e) {
    setTitle('updated!'); 
    
    // title='updated';
  }

  return (
    <li className="expense-item">
      <article className="expense-item__box">
        <ExpenseDate date={props.date} />
        <h3 className="expense-item__text">{title}</h3>
        <div className="expense-item__price">{props.amount}$</div>
        <button onClick={clickHandler}>Click for update</button>
      </article>
    </li>
  );
}
export default ExpenseItem;
