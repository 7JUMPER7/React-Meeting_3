import './App.css';
import ColorPicker from './ColorPicker.js';
import QuotePicker from './QuotePicker';

function App() {
  return (
    <div className="App">
      <div className="title">Color picker:</div>
      <ColorPicker r={20} g={90} b={140}></ColorPicker>
      <div className="title">Quote picker:</div>
      <QuotePicker></QuotePicker>
    </div>
  );
}

export default App;
