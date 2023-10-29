import React from 'react';
import './App.css';
import Home from './modules/Home';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
