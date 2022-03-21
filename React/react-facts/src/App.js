import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import React from 'react';

function App() {
  const [darkMode, setDarkMode] = React.useState(true)
  function toggleDarkMode() {
      setDarkMode(prevMode => !prevMode)
  }
  console.log("setDarkMode", darkMode);

  return (
    <div className='container'>
      <Navbar 
          darkMode={darkMode} 
          toggleDarkMode={toggleDarkMode} 
      />
      <Main darkMode={darkMode} />
    </div>
  );
}

export default App;
