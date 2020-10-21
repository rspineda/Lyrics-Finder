import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Home';


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


const Finder = () => {
    const classes = useStyles();
    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="standard-basic" label="Standard" />
            <TextField id="filled-basic" label="Filled" variant="filled" />
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </form>

    )
}

export default Finder;
