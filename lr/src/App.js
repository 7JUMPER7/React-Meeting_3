import Counter from './Counter';
import './App.css';

function App() {
  const buttons = [
    {
      incValue: 10
    },
    {
      incValue: -100
    },
    {
      incValue: 25
    }
  ];

  return (
    <div className="App">
      <Counter startValue={0} buttons={buttons}></Counter>
    </div>
  );
}

export default App;
