import React from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement
);

const Charts = () => {
  // Data for Line chart
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Visitors",
        data: [100, 200, 150, 300, 250, 400],
        borderColor: "rgba(58, 134, 255, 1)",
        backgroundColor: "rgba(58, 134, 255, 0.2)",
        fill: true,
      },
    ],
  };

  // Data for Bar chart
  const barChartData = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  
  return (
    <div>
      <section className="graph-section">
        {/* Line Chart */}
        <div className="chart-container">
          <h2>Visitor Trends</h2>
          <Line data={chartData} />
        </div>

        {/* Bar Chart */}
        <div className="chart-container">
          <h2>Sales Data</h2>
          <Bar data={barChartData} />
        </div>
      </section>
    </div>
  );
};

export default Charts;
