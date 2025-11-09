import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const TransactionsChart = () => {
  const labels = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Active User",
        data: [5000, 6500, 5500, 5200, 7500, 8700, 9500, 7800, 8200, 6700, 5900, 3000],
        backgroundColor: "#f5a623", // gold-orange
        borderRadius: 6,
        barPercentage: 0.5,
      },
      {
        label: "Inactive User",
        data: [3800, 4800, 3900, 5600, 7100, 8200, 7200, 4900, 6000, 6900, 5100, 1700],
        backgroundColor: "#4a90e2", // blue
        borderRadius: 6,
        barPercentage: 0.5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: { size: 13 },
        },
      },
      title: {
        display: true,
        text: "Latest Transactions (Yearly Overview)",
        font: { size: 16, weight: "bold" },
      },
      tooltip: {
        callbacks: {
          label: (context) => `$${context.raw.toLocaleString()}`,
        },
      },
    },
    scales: {
      y: {
        ticks: {
          callback: (value) => `$${value / 1000}K`,
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default TransactionsChart;
