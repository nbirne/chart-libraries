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
  { name: 'Jan 2024', SPRO_1: 400, SPRO_2: 250, SPRO_3: 600, SPRO_4: 200 },
  { name: 'Feb 2024', SPRO_1: 120, SPRO_2: 355, SPRO_3: 400, SPRO_4: 400 },
  { name: 'Apr 2024', SPRO_1: 800, SPRO_2: 600, SPRO_3: 120, SPRO_4: 500 },
  { name: 'May 2024', SPRO_1: 500, SPRO_2: 700, SPRO_3: 800, SPRO_4: 600 },
  { name: 'Jun 2024', SPRO_1: 700, SPRO_2: 800, SPRO_3: 900, SPRO_4: 700 },
  { name: 'Jul 2024', SPRO_1: 400, SPRO_2: 250, SPRO_3: 600, SPRO_4: 200 },
  { name: 'Aug 2024', SPRO_1: 120, SPRO_2: 400, SPRO_3: 500, SPRO_4: 300 },
  { name: 'Sep 2024', SPRO_1: 600, SPRO_2: 355, SPRO_3: 400, SPRO_4: 400 },
  { name: 'Oct 2024', SPRO_1: 800, SPRO_2: 600, SPRO_3: 120, SPRO_4: 500 },
  { name: 'Nov 2024', SPRO_1: 500, SPRO_2: 700, SPRO_3: 800, SPRO_4: 600 },
  { name: 'Dec 2024', SPRO_1: 700, SPRO_2: 800, SPRO_3: 900, SPRO_4: 700 },
];

function RechartsChart() {
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
          <XAxis 
            dataKey="name" 
            tick={{ fontSize: 13 }}
            height={50}
            tickMargin={10}
          />
          <YAxis
            tick={{ fontSize: 13 }}
            width={50}
          />
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
            dataKey="SPRO_2"
            name="SPRO_2"
            stroke="#82ca9d"
            dot={false}
            strokeWidth={2}
          />
          <Line
            type="linear"
            dataKey="SPRO_3"
            name="SPRO_3"
            stroke="#ffc658"
            dot={false}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RechartsChart; 