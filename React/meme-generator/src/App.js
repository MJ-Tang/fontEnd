import './App.css';
import './style.css';
import React from 'react';
import Header from './components/Header';
import Meme from './components/Meme';
import WindowTarcker from './components/WindowTracker';


function App() {
  return (
    <div>
      <Header />
      <Meme />
      <WindowTarcker />
    </div>
  );
}

export default App;
