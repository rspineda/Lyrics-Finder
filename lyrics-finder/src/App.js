import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline'
import './App.css';
import Header from './components/Header';
import Error404 from './pages/Error404';
import Cancion from './pages/Song';
import Home from './pages/Home';
import Finder from './components/Finder';


function App() {

  //cargar canciones desde el localStorage:
  let mySongsInit = JSON.parse(localStorage.getItem('mySongs'));

  let searchInit = {
    artist: '',
    song: '',
    request: false
  }
  //canciones caragadas en el home
  const [mySongs, setMySongs] = useState(mySongsInit);
  //busqueda de canciones en el buscador
  const [search, setSearch] = useState(searchInit);
  //para manejar la cancion que se estámanipulando en ese momento
  const [currentSong, setCurrentSong] = useState({});
  //errores de busqueda
  const [error, setError] = useState(false);

  return (
    <Router>
      <CssBaseline>
        <div className="App">
          <Header></Header>
          <main className="App-main">
            <Switch>
              <Route exact path="/">
                <Finder search={search} setSearch={setSearch} setError={setError}></Finder>
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
