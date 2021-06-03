import { AppBar,  Link, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './styles/styles'
import logo from '../../assets/logo.svg'

const Navbar = () => {
    const classes = useStyles();
    return (
        
        <AppBar className={classes.appBar} color="inherit" position='static'>
            <Toolbar className={classes.toolbar}>
                
                <img src={logo} alt="THE ODIN PROJECT" className={classes.logo}/>
                <Typography className={classes.title}>
                    
                    THE ODIN PROJECT 
                </Typography>
                
                <Typography className={classes.linkbar}>
            
                    <Link className={classes.link}>All Paths</Link>
                    <Link className={classes.link}>Comunity</Link>
                    <Link className={classes.link}>About</Link>
                    <Link className={classes.link}>FAQ</Link>
                    <Link className={classes.link}>Sign Up</Link>
                    <Link className={classes.link}>Log In</Link>

                </Typography>
            </Toolbar>
        </AppBar>
       
    )
}

export default Navbar
