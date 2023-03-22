import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = ({ dataPoints }) => {
  const dataPointsValues = dataPoints.map((dataPoint) => dataPoint.value);
  const maxValue = Math.max(...dataPointsValues);
  return (
    <div className="chart">
      {dataPoints.map((datapoint) => (
        <ChartBar
          value={datapoint.value}
          maxValue={maxValue}
          label={datapoint.label}
          key={datapoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
