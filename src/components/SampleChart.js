import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'Jan 2024', SPRO_1: 400, series2: 250, series3: 600, series4: 200 },
  { name: 'Feb 2024', SPRO_1: 120, series2: 400, series3: 500, series4: 300 },
  { name: 'Mar 2024', SPRO_1: 600, series2: 355, series3: 400, series4: 400 },
  { name: 'Apr 2024', SPRO_1: 800, series2: 600, series3: 120, series4: 500 },
  { name: 'May 2024', SPRO_1: 500, series2: 700, series3: 800, series4: 600 },
  { name: 'Jun 2024', SPRO_1: 700, series2: 800, series3: 900, series4: 700 },
  { name: 'Jul 2024', SPRO_1: 400, series2: 250, series3: 600, series4: 200 },
  { name: 'Aug 2024', SPRO_1: 120, series2: 400, series3: 500, series4: 300 },
  { name: 'Sep 2024', SPRO_1: 600, series2: 355, series3: 400, series4: 400 },
  { name: 'Oct 2024', SPRO_1: 800, series2: 600, series3: 120, series4: 500 },
  { name: 'Nov 2024', SPRO_1: 500, series2: 700, series3: 800, series4: 600 },
  { name: 'Dec 2024', SPRO_1: 700, series2: 800, series3: 900, series4: 700 },
];

function SampleChart() {
  return (
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid 
            strokeDasharray="3 0" 
            horizontal={true}
            vertical={false}
          />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="linear"
            dataKey="SPRO_1"
            name="SPRO 1"
            stroke="#8884d8"
            dot={false}
            strokeWidth={2}
          />
          <Line
            type="linear"
            dataKey="series2"
            name="Series 2"
            stroke="#82ca9d"
            dot={false}
            strokeWidth={2}
          />
          <Line
            type="linear"
            dataKey="series3"
            name="Series 3"
            stroke="#ffc658"
            dot={false}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SampleChart; 