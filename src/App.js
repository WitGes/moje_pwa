import logo from './logo.svg';
import './App.css';
import 'bootstrap';
import React, { useState, createContext } from 'react';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr)=>(curr === "light" ? "dark" : "light"));
  }
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className="App">
        <header className="App-header" id={theme}>
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
    </ThemeContext.Provider>
  );
}

export default App;
