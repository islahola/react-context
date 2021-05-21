import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Context Api</h1>
        <Todos/>
        <Form/>
      </header>
    </div>
  );
}

export default App;
