import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline'
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <CssBaseline>
        <div className="App">
          <Header></Header>
          <main className="App-main">

          </main>
        </div>
      </CssBaseline>
    </Router>
    
  );
}

export default App;
