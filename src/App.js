import './App.css';
import Counter from './Counter';
import { CounterFunc } from './CounterFunc';

function App() {
  return (
    <div className="App">
   <Counter step={2} start={5}/>
   <br/>
   <CounterFunc step={2} start={5}/>
    </div>
  );
}

export default App;
