import React from 'react';
import './App.css';
import Main from './components/main';
import { ThemeProvider } from './contexts/theme-context';
import { CountryProvider } from './contexts/country-context';

function App() {

  return (
    <ThemeProvider>
      <CountryProvider>

        <div className="App">
          <Main />

        </div>
      </CountryProvider>
    </ThemeProvider>
  );
}

export default App;
