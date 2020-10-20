import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline'
import './App.css';
import Header from './components/Header';
import Error404 from './pages/Error404';
import Cancion from './pages/Song';
import Home from './pages/Home';


function App() {
  return (
    <Router>
      <CssBaseline>
        <div className="App">
          <Header></Header>
          <main className="App-main">
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/cancion/:id" children={<Cancion></Cancion>}></Route>
              <Route path="*" component={Error404}></Route>
            </Switch>

          </main>
        </div>
      </CssBaseline>
    </Router>
    
  );
}

export default App;
