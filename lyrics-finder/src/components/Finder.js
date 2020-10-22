import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '&>*':{
            margin: theme.spacing(0),
            width: 'auto'
        }
    }
}))


const Finder = ({search, setSearch, setError}) => {
    const classes = useStyles();
    const handleSubmit = e => {
        //alert("Enviando");
        e.preventDefault();
        setSearch({
            artist: e.target.artist.value,
            song: e.target.song.value,
            request: true
        })

    }
    const handleReset = e => {
        //alert("Reseteando");
        setSearch({
            artist: "",
            song: "",
            request: false
        });

        setError(false);
    }
    
    return (
        <form className={classes.root} autoComplete="on"  onSubmit={handleSubmit} onReset={handleReset}>
            <IconButton color="primary" type="reset">
                <HomeIcon></HomeIcon>
            </IconButton>
            <TextField id="artist" name="artist" label="Artista" variant="outlined" size="small" 
            value={search.artist}
            onChange={ e => {
                setSearch({...search, artist: e.target.value, request: false })
            }}
            required/>
            <TextField id="song" name="song" label="Canción" variant="outlined" size="small" 
            value={search.song}
            onChange={ e => {
                setSearch({...search, song: e.target.value, request: false })
            }}
            required/>
            <IconButton color="primary" type="submit">
                <SearchIcon></SearchIcon>
            </IconButton>
        </form>

    )
}

export default Finder;
