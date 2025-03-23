import React from 'react';
import './App.css';
import RechartsChart from './components/RechartsChart';
import RechartsChartAreas from './components/RechartsChartAreas';
import ChartJSChart from './components/ChartJSChart';
import RechartsDonutChart from './components/RechartsDonutChart';
import RechartsTreemap from './components/RechartsTreemap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Chart Libraries Comparison</h1>
      </header>
      <main>
        <section>
          <h2>Recharts Line Chart</h2>
          <RechartsChart />
        </section>
        <section>
          <h2>Recharts Line Chart with Areas</h2>
          <RechartsChartAreas />
        </section>
        <section>
          <h2>Recharts Donut Chart</h2>
          <RechartsDonutChart />
        </section>
        <section>
            <h2>Recharts Treemap</h2>
            <RechartsTreemap />
        </section>
        <section>
          <h2>Chart.js Version</h2>
          <ChartJSChart />
        </section>
      </main>
    </div>
  );
}

export default App; 