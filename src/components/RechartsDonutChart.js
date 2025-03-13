import React, { useState, useMemo } from 'react';
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  Tooltip, 
  Legend,
  Sector,
  Text
} from 'recharts';

const data = [
  { name: 'SPRO-12345', value: 400 },
  { name: 'SPRO-abcde', value: 300 },
  { name: 'SPRO-fghij', value: 300 },
  { name: 'SPRO-klmno', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const renderActiveShape = (props) => {
  const {
    cx, cy, innerRadius, outerRadius, startAngle, endAngle,
    fill, payload, percent, value
  } = props;

  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 10}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  );
};

// Custom component to render the center text
const renderCenterText = ({ cx, cy, totalValue }) => {
  return (
    <g>
      <text 
        x={cx} 
        y={cy} 
        dy={-15} 
        textAnchor="middle" 
        fill="#333"
        style={{ fontSize: '24px', fontWeight: 'bold' }}
      >
        {totalValue}
      </text>
      <text 
        x={cx} 
        y={cy} 
        dy={15} 
        textAnchor="middle" 
        fill="#666"
        style={{ fontSize: '14px' }}
      >
        Total Complaints
      </text>
    </g>
  );
};

// Custom tooltip component
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0];
    return (
      <div 
        style={{ 
          backgroundColor: '#fff', 
          padding: '10px', 
          border: '1px solid #ccc',
          borderRadius: '4px',
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
          <div 
            style={{ 
              width: '12px', 
              height: '12px', 
              borderRadius: '50%', 
              backgroundColor: data.payload.fill || data.color,
              marginRight: '8px'
            }} 
          />
          <span style={{ fontWeight: 'bold' }}>{data.name}</span>
        </div>
        <div>
          <span>{data.value} (past 12 months)</span>
        </div>
      </div>
    );
  }
  return null;
};

function RechartsDonutChart() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Calculate the total value
  const totalValue = useMemo(() => {
    return data.reduce((sum, entry) => sum + entry.value, 0);
  }, []);

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  return (
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            onMouseEnter={onPieEnter}
          >
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={COLORS[index % COLORS.length]} 
              />
            ))}
          </Pie>
          {renderCenterText({ 
            cx: '50%', 
            cy: '50%', 
            totalValue: totalValue
          })}
          <Tooltip content={<CustomTooltip />} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RechartsDonutChart; 