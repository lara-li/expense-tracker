function ExpenseDate(props) {
    const dateMonth=props.date.toLocaleString('en-US',{month:"long"}) ;
    const dateDay=props.date.toLocaleString('en-US',{day:"2-digit"}) ;
    const dateYear=props.date.getFullYear() ;
    return (
        <div className="expense-date">
          <p className="expense-date__month">{dateMonth}</p>
          <p className="expense-date__year">{dateYear}</p>
          <p className="expense-date__day">{dateDay}</p>
        </div>
    )
}
export default ExpenseDate;