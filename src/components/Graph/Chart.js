import ChartBar from './ChartBar';
import './Chart.css';
function Chart(props) {
  const dataPointsValues=props.dataPoints.map(dataPoint=>dataPoint.value);
  const totalMax=Math.max(...dataPointsValues);
  
  return (
    <div className="chart-body">
      {props.dataPoints.map(dataPoint=>{
        return <ChartBar key={dataPoint.month}  value={dataPoint.value} month={dataPoint.month} maxValue={totalMax}  />
      })}
      
    </div>
  );
}
export default Chart;
