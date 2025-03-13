import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  ComposedChart,
  AreaChart
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
  const [hoveredArea, setHoveredArea] = useState(null);
  
  const COLORS = {
    SPRO_1: '#8884d8',
    SPRO_2: '#82ca9d',
    SPRO_3: '#ffc658'
  };

  // Custom tooltip that also tracks which area is being hovered
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      // Find the currently hovered data series
      const hoveredEntry = payload.find(p => p.dataKey === hoveredArea);
      
      // If we have a hovered area and it matches one of the payload items
      if (hoveredArea && hoveredEntry) {
        return (
          <div style={{ 
            backgroundColor: 'white', 
            padding: '10px', 
            border: '1px solid #ccc',
            borderRadius: '4px'
          }}>
            <p className="label">{`${payload[0].payload.name}`}</p>
            <p style={{ color: hoveredEntry.color }}>
              {`${hoveredEntry.name}: ${hoveredEntry.value}`}
            </p>
          </div>
        );
      }
      
      // If no specific area is being hovered or the hovered area doesn't match
      // Don't show the tooltip
      return null;
    }
    return null;
  };

  // Handle mouse enter for each area
  const handleMouseEnter = (dataKey) => {
    setHoveredArea(dataKey);
  };

  // Handle mouse leave
  const handleMouseLeave = () => {
    setHoveredArea(null);
  };

  return (
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          onMouseLeave={handleMouseLeave}
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
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          
          {/* Areas for all series - only the hovered one will be filled */}
          <Area
            type="linear"
            dataKey="SPRO_1"
            name="SPRO 1"
            stroke={COLORS.SPRO_1}
            fill={COLORS.SPRO_1}
            fillOpacity={hoveredArea === 'SPRO_1' ? 0.4 : 0}
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6, fill: COLORS.SPRO_1 }}
            onMouseEnter={() => handleMouseEnter('SPRO_1')}
          />
          
          <Area
            type="linear"
            dataKey="SPRO_2"
            name="SPRO 2"
            stroke={COLORS.SPRO_2}
            fill={COLORS.SPRO_2}
            fillOpacity={hoveredArea === 'SPRO_2' ? 0.4 : 0}
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6, fill: COLORS.SPRO_2 }}
            onMouseEnter={() => handleMouseEnter('SPRO_2')}
          />
          
          <Area
            type="linear"
            dataKey="SPRO_3"
            name="SPRO 3"
            stroke={COLORS.SPRO_3}
            fill={COLORS.SPRO_3}
            fillOpacity={hoveredArea === 'SPRO_3' ? 0.4 : 0}
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6, fill: COLORS.SPRO_3 }}
            onMouseEnter={() => handleMouseEnter('SPRO_3')}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RechartsChart; 