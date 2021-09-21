import React from "react";

import { makeStyles, AppBar, Toolbar, IconButton, Button } from "@material-ui/core";

import MenuIcon from '@material-ui/icons/Menu'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';



// Utilizando o Style Components
const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh'
    },

    backgroundNavBar: {
        background: "#202020"
    },
    grow: {
        flexGrow: 1
    },
    menuIcon: {
        paddingRight: theme.spacing(5),
        paddingLeft: theme.spacing(6)
    },
    icons: {
        paddingRight: theme.spacing(1),
        marginRight: theme.spacing(2)
    }
}))

const Home = () =>{
    // Colocando a função useStyles dentro de uma variavel
    const classes = useStyles()

    return (
        <>
            <div className={classes.root} >
                <AppBar position="static" className={classes.backgroundNavBar}>
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        
                        <img src="/images/logo.svg" alt="" />                        
                        <div className={classes.grow}/>

                        <IconButton className={classes.icons} color="inherit">
                            <VideoCallIcon />
                        </IconButton>

                        <IconButton className={classes.icons} color="inherit">
                            <AppsIcon />
                        </IconButton>

                        <IconButton className={classes.icons} color="inherit">
                            <NotificationsIcon />
                        </IconButton>
                        
                        <Button 
                            variant="outlined" color="inherit" 
                            startIcon={<AccountCircleIcon />}
                        >Fazer Login
                        </Button>
                    </Toolbar>
                </AppBar>  
            </div>
            
        </>
    )
}

export default Home;