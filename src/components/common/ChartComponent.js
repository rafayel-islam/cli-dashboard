import React, { useContext } from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement, // Added for Pie Chart
  BarElement, // Added for Bar Chart
} from 'chart.js';
import { Chart } from 'react-google-charts'; // Import for Google Charts
import { ThemeContext } from '../../context/ThemeContext';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement, // Registered for Pie Chart
  BarElement // Registered for Bar Chart
);

const ChartComponent = () => {
  const { theme } = useContext(ThemeContext);
  const textColor = theme === 'dark' ? '#edf2f7' : '#333333';
  const gridColor = theme === 'dark' ? '#4a5568' : '#e2e8f0';

  // Line Chart Data and Options (existing)
  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: '#4a5568',
        tension: 0.1,
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: textColor
        }
      },
      title: {
        display: true,
        text: 'Monthly Sales Data',
        color: textColor
      },
    },
    scales: {
      x: {
        ticks: {
          color: textColor
        },
        grid: {
          color: gridColor
        }
      },
      y: {
        ticks: {
          color: textColor
        },
        grid: {
          color: gridColor
        }
      }
    }
  };

  // Bar Chart Data and Options
  const barData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: textColor
        }
      },
      title: {
        display: true,
        text: 'Bar Chart Example',
        color: textColor
      },
    },
    scales: {
      x: {
        ticks: {
          color: textColor
        },
        grid: {
          color: gridColor
        }
      },
      y: {
        ticks: {
          color: textColor
        },
        grid: {
          color: gridColor
        }
      }
    }
  };

  // Pie Chart Data and Options
  const pieData = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: '# of Votes',
        data: [300, 50, 100],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: textColor
        }
      },
      title: {
        display: true,
        text: 'Pie Chart Example',
        color: textColor
      },
    },
  };

  // Geography Chart Data and Options
  const geoData = [
    ['Country', 'Popularity'],
    ['Germany', 200],
    ['United States', 300],
    ['Brazil', 400],
    ['Canada', 500],
    ['France', 600],
    ['RU', 700],
  ];

  const geoOptions = {
    backgroundColor: theme === 'dark' ? '#1a202c' : '#ffffff',
    colorAxis: { colors: ['#4a5568', '#a0aec0', '#edf2f7'] },
    datalessRegionColor: theme === 'dark' ? '#2d3748' : '#f8f9fa',
    defaultColor: theme === 'dark' ? '#f7fafc' : '#e2e8f0',
    textStyle: { color: textColor },
    titleTextStyle: { color: textColor },
    legendTextStyle: { color: textColor },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-secondary p-6 rounded-lg shadow-lg">
        <Line data={lineData} options={lineOptions} />
      </div>
      <div className="bg-secondary p-6 rounded-lg shadow-lg">
        <Bar data={barData} options={barOptions} />
      </div>
      <div className="bg-secondary p-6 rounded-lg shadow-lg">
        <Pie data={pieData} options={pieOptions} />
      </div>
      <div className="bg-secondary p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-highlight mb-4">Geography Chart</h3>
        <Chart
          chartType="GeoChart"
          width="100%"
          height="400px"
          data={geoData}
          options={geoOptions}
        />
      </div>
    </div>
  );
};

export default ChartComponent;
