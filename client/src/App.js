import './App.css';
import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Import components
import Header from './components/Header';

//Import pages
import Home from './pages/Home'
import Tracker from './pages/Tracker';

function App() {
  return (
    <Router>
      <Header/>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/tracker" component={Tracker} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;