import Chart from "../Graph/Chart";
import "./ExpenseFilter.css";
function ExpenseFilter(props) {
  const filteredExpenses=props.filteredExpenses;
  const chartDataPoints=[
    {month:'jan',value:0},
    {month:'feb',value:0},
    {month:'mar',value:0},
    {month:'apr',value:0},
    {month:'may',value:0},
    {month:'jun',value:0},
    {month:'jul',value:0},
    {month:'aug',value:0},
    {month:'sep',value:0},
    {month:'oct',value:0},
    {month:'nov',value:0},
    {month:'dec',value:0},
  ]
  for (const expense of filteredExpenses) {
    const expenseMonth=expense.date.getMonth(); //0,1,2,3,...11
    chartDataPoints[expenseMonth].value+=expense.amount;
  }
  function filterSelectHandler(e) {
    const selectedYear = e.target.value;
    props.onFilter(selectedYear);
  }
  return (
    <section className="filter-section">
      <div className="filter-head">
        <h4>Filter by year</h4>
        <form>
          <select
            value={props.selectYear}
            onChange={filterSelectHandler}
            name="selected-year"
          >
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
          </select>
        </form>
      </div>
      <Chart dataPoints={chartDataPoints} />
    </section>
  );
}
export default ExpenseFilter;
