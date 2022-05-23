import './App.css';
// @ts-ignore
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

import { stats } from './stats'

function App() {

  const p = (stats.closed / stats.all) * 100
  const state = {
    percent: Math.round((p + Number.EPSILON) * 100) / 100
  }

  return (
    <div className="App">
      <header className="App-header">
        <Progress type="circle" percent={state.percent} width={300} theme={
          {
            error: {
              symbol: state.percent + '%',
              trailColor: 'pink',
              color: 'red'
            },
            default: {
              symbol: state.percent + '%',
              trailColor: 'lightblue',
              color: 'blue'
            },
            active: {
              symbol: state.percent + '%',
              trailColor: 'lightblue',
              color: 'blue'
            },
            success: {
              symbol: '🌞',
              trailColor: 'lime',
              color: 'green'
            }
          }
        } />
      </header>
    </div>
  );
}

export default App;
