import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline'
import './App.css';
import Header from './components/Header';
import Error404 from './pages/Error404';
import Song from './pages/Song';
import Home from './pages/Home';
import Finder from './components/Finder';
import Lyric from './components/lyric';
import SongsList from './components/SongsList';
import Loader from './components/Loader';
import { Alert, AlertTitle } from '@material-ui/lab';


function App() {

  //cargar canciones desde el localStorage:
  let mySongsInit = JSON.parse(localStorage.getItem('mySongs')) || [];

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

  useEffect(()=>{
    localStorage.setItem('mySongs', JSON.stringify(mySongs));
    const getData = async () => {
      const {artist, song} = search;
      try{
        let artistUrl = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
        let songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;
        let artistRes = await fetch(artistUrl);
        let songRes = await fetch(songUrl);
        let artistJson = await artistRes.json();
        let songJson = await songRes.json(); 

        console.log('el Json del artista',artistJson);
        console.log('el Json de la cancion',songJson);

        setCurrentSong({
          artist: artistJson.artists[0].strArtist,
          avatar: artistJson.artists[0].strArtistThumb,
          song: song,
          lyrics: songJson.lyrics
        })

      }catch(error){
        console.log(error)
        setSearch({
          artist: artist,
          song: song,
          request: false
        });
        setError(true);
      }
    }
    if(!search.request){ //si la petición no se hace devuelvo un efecto vacío para que no se ejecute mas veces
      return;
    }else{
      getData();
    }
  }, [search]);

  return (
    <Router>
      <CssBaseline>
        <div className="App">
          <Header></Header>
          <main className="App-main">
            <Switch>
              <Route exact path="/">
                <Finder search={search} setSearch={setSearch} setError={setError}></Finder>
                {(!search.request)? (error?(
                <Alert severity="error" style={{maxWidth: 752, margin: "2rem auto 0"}}>
                  <AlertTitle>Error</AlertTitle>
                  Error al consultar la petición:
                  <ul>
                    <li>El artista: <b>{search.artist}</b> o</li>
                    <li>La canción <b>{search.song}</b></li>
                  </ul>
                </Alert>): <SongsList mySongs={mySongs} setMySongs={setMySongs}></SongsList>) : ( Object.keys(currentSong).length === 0 ? (<Loader></Loader>) : (
                  <Lyric currentSong={currentSong} setCurrentSong={setCurrentSong} mySongs={mySongs} setMySongs={setMySongs} setSearch={setSearch}></Lyric>)
                )}
                      
                <Home></Home>
              </Route>
              <Route path="/cancion/:id" children={<Song mySongs={mySongs}></Song>}></Route>
              <Route path="*" component={Error404}></Route>
            </Switch>

          </main>
        </div>
      </CssBaseline>
    </Router>
    
  );
}

export default App;
