import React from 'react';
import './App.css';
import Main from './components/main';
import { ThemeProvider } from './contexts/theme-context';
import { CountryProvider } from './contexts/country-context';
import { PopUpProvider } from './contexts/pop-up-context';

function App() {

  return (
    <ThemeProvider>
      <CountryProvider>
        <PopUpProvider>
          <div className="App">
            <Main />
          </div>
        </PopUpProvider>
      </CountryProvider>
    </ThemeProvider>
  );
}

export default App;
