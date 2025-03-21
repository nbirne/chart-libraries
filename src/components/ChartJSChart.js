import React, { useRef, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

function ChartJSChart() {
  const chartRef = useRef(null);
  const containerRef = useRef(null);
  
  // Same data as in SampleChart.js
  const labels = [
    'Jan 2024', 'Feb 2024', 'Mar 2024', 'Apr 2024', 'May 2024', 'Jun 2024',
    'Jul 2024', 'Aug 2024', 'Sep 2024', 'Oct 2024', 'Nov 2024', 'Dec 2024'
  ];

  const data = {
    labels,
    datasets: [
      {
        label: 'SPRO 1',
        data: [400, 120, 600, 800, 500, 700, 400, 120, 600, 800, 500, 700],
        borderColor: '#8884d8',
        backgroundColor: 'rgba(136, 132, 216, 0.5)',
        borderWidth: 2,
        tension: 0, // Linear segments (no curve)
        pointRadius: 0, // No dots at vertices
      },
      {
        label: 'Series 2',
        data: [250, 400, 355, 600, 700, 800, 250, 400, 355, 600, 700, 800],
        borderColor: '#82ca9d',
        backgroundColor: 'rgba(130, 202, 157, 0.5)',
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
      },
      {
        label: 'Series 3',
        data: [600, 500, 400, 120, 800, 900, 600, 500, 400, 120, 800, 900],
        borderColor: '#ffc658',
        backgroundColor: 'rgba(255, 198, 88, 0.5)',
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
      },
    ],
  };

  useEffect(() => {
    // Add mouseleave event listener to the container
    const container = containerRef.current;
    if (container) {
      container.addEventListener('mouseleave', handleMouseLeave);
    }
    
    return () => {
      // Clean up event listener
      if (container) {
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);
  
  const handleMouseLeave = () => {
    if (chartRef.current) {
      const chart = chartRef.current;
      
      // Reset all datasets to not fill when mouse leaves the chart
      chart.data.datasets.forEach(dataset => {
        dataset.fill = false;
      });
      
      chart.update('none');
    }
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false, // No vertical grid lines
        },
      },
      y: {
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
          borderDash: [3, 3], // Dashed horizontal lines
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltip: {
        intersect: false,
      },
    },
    hover: {
      mode: 'nearest',
      intersect: false,
    },
    onHover: (event, activeElements) => {
      if (chartRef.current) {
        const chart = chartRef.current;
        
        // Reset all datasets to not fill
        chart.data.datasets.forEach(dataset => {
          dataset.fill = false;
        });
        
        // If hovering over a dataset, fill that one
        if (activeElements && activeElements.length > 0) {
          const datasetIndex = activeElements[0].datasetIndex;
          chart.data.datasets[datasetIndex].fill = 'origin';
        }
        
        chart.update('none'); // Update without animation for better performance
      }
    }
  };

  return (
    <div ref={containerRef} style={{ width: '100%', height: 400 }}>
      <Line ref={chartRef} options={options} data={data} />
    </div>
  );
}

export default ChartJSChart;
