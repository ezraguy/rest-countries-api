import React from 'react';
import './App.css';
import Main from './components/main';
import { ThemeProvider } from './contexts/theme-context';
import { CountryProvider } from './contexts/country-context';
import { PopUpProvider } from './contexts/pop-up-context';
import { CountriesProvider } from './contexts/all-countries-context';

function App() {

  return (
    <ThemeProvider>
      <CountriesProvider>

        <CountryProvider>
          <PopUpProvider>
            <div className="App">
              <Main />
            </div>
          </PopUpProvider>
        </CountryProvider>
      </CountriesProvider>
    </ThemeProvider>
  );
}

export default App;
