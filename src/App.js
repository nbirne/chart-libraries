import React from 'react';
import './App.css';
import RechartsChart from './components/RechartsChart';
import ChartJSChart from './components/ChartJSChart';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Chart Libraries Comparison</h1>
      </header>
      <main>
        <section>
          <h2>Recharts Version</h2>
          <RechartsChart />
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