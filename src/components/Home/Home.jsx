import React from "react";

import { makeStyles, AppBar, Toolbar, IconButton, Button } from "@material-ui/core";

import MenuIcon from '@material-ui/icons/Menu'
import YouTubeIcon from '@material-ui/icons/YouTube';

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
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        
                        <YouTubeIcon />

                        <div className={classes.grow}/>
                        
                        <Button color="inherit">Fazer Login</Button>
                    </Toolbar>
                </AppBar>  
            </div>
            
        </>
    )
}

export default Home;