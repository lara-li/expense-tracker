import "./ChartBar.css";
function ChartBar(props) {
  let barFillHeight = "0%";
  const max = props.maxValue;

  if (max > 0) {
    barFillHeight = Math.round((props.value / max) * 100) + "%"; // !worth noting algorithm
  }
  return (
    <div className="bar-container">
      <div className="bar-item">  
        <div className="bar-fill" style={{ height: barFillHeight }} />
        <div className="bar-text">{props.month}</div>
      </div>
    </div>
  );
}

export default ChartBar;

{
  /*id={props.month}*/
}
