import './App.css';
import Greet from './component';

function App() {

  return (
    <div className="App">
      <Greet age={13} name={'yowa'} />
      <Greet />
    </div>
  );
}

export default App;
