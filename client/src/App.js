import './App.css';
import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Import components
import Header from './components/Header';

//Import pages

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
      </Router>
    </div>
  );
}

export default App;