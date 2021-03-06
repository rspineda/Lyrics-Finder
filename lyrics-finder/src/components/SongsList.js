import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import LaunchIcon from "@material-ui/icons/Launch";
import Alert from "@material-ui/lab/Alert";
import AlertDialog from "./AlertDialog";

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      maxWidth: 752,
      margin: "auto"
    },
    demo: {
      backgroundColor: theme.palette.background.paper
    },
    title: {
      margin: theme.spacing(4, 0, 2)
    },
    alert: {
      fontSize: "1.5rem",
      justifyContent: "center",
      alignItems: "center"
    }
  }));

const SongsList = ({mySongs, setMySongs})=>{
    const classes = useStyles();

    const deleteSong = (id) => {
      let songs = mySongs.filter((item, index)=> index!==id);
      setMySongs(songs);
      localStorage.setItem('mySongs', JSON.stringify(songs)); 
    }

    return (
        <div className={classes.root}>
            <div className={classes.demo}>
                {mySongs.length === 0 ? (
                <Alert severity="error" className={classes.alert}>No tienes canciones almacenadas</Alert>) : (
                <List>
                    {mySongs.map((item, index)=> (
                    <ListItem key={index}>
                        <ListItemAvatar>
                            <Avatar alt={item.artist} src={item.avatar}></Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={item.song} secondary={item.artist}></ListItemText>
                        <ListItemSecondaryAction>
                          <IconButton edge="end" component={Link} to={`/cancion/${index}`}>
                            <LaunchIcon />
                          </IconButton>
                          <AlertDialog id={index} deleteSong={deleteSong}></AlertDialog>
                        </ListItemSecondaryAction>
                    </ListItem>))} 
                </List>
                )}
            </div>
        </div>
    )
}

export default SongsList;
