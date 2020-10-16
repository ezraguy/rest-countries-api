import React, { useContext } from 'react';
import './App.css';
import Main from './components/main';
import { ThemeProvider } from './theme-context';

function App() {

  return (
    <ThemeProvider>
      <div className="App">
        <Main />

      </div>
    </ThemeProvider>
  );
}

export default App;
