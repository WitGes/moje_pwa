import logo from './logo.svg';
import './App.css';
import 'bootstrap';

function App() {
  return (
    <div className="App" id="light">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edytuj plik <mark>src/App.js</mark> zapisz go i zobacz efekt.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ucz się React'a
        </a>
      </header>
    </div>
  );
}

export default App;
