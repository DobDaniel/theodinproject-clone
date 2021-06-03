import { Container, Link, Typography, Button, Box } from '@material-ui/core'
import React from 'react'
import useStyles from './styles/styles';
import intro_photo from '../../assets/intro_photo.svg';
const Intro = () => {
    const classes = useStyles();
    return (
        <div>
        <Container maxWidth="lg" fontWeight="300" >
            <Typography className={classes.bigtext} align="center">
            
                Your Career in Web Development Starts Here
            
            </Typography>
        </Container>
        <Container  maxWidth="lg">
            <Typography className={classes.smalltext} align="center">
                Our full stack curriculum is free and supported by a passionate open source community.
            </Typography>
        </Container>
        <Container  maxWidth="lg">
            <Typography className={classes.update} align="center">
                <Link className={classes.linkupdate} color="inherit" underline="none">
                    Last Curriculum Update: 4 days ago
                </Link>
            </Typography>
        </Container>
        <Container  maxWidth="lg" className={classes.buttoncont}>
            <Button fullWidth="true" size="large" className={classes.buttonallpaths} variant="contained">
                View Full Curriculum
            </Button>
        </Container>
        <img src={intro_photo} alt="intro_photo"/>
        </div>
    )
}

export default Intro
