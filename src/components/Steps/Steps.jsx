import { Container,  Typography } from '@material-ui/core';
import React from 'react'
import useStyles from './styles/styles';
import learn_img from '../../assets/learn_img.svg';
import build_img from '../../assets/build_img.svg';
import connect_img from '../../assets/connect_img.svg';
import Card from './Card';
const Steps = () => {
    const items={
        learn: {
            alt: 'Learn',
            title: 'Learn',
            description: 'Learn from a curriculum with the best curated online tutorials, blogs, and courses.',
        },
        build: {
            alt: 'Build',
            title: 'Build',
            description: 'Build dozens of portfolio-worthy projects along the way, from simple scripts to full programs and deployed websites.',
        },
        connect: {
            alt: 'Connect',
            title: 'Connect',
            description: 'You’re not alone. Learn and get help from our friendly community of beginner and experienced developers.',
        },
    }
    const classes = useStyles();
    return (
        <div>
            <Container maxWidth="lg" fontWeight="300" >
            <Typography className={classes.bigtext} align="center">
            
                How it works
            
            </Typography>
           
            <Typography className={classes.smalltext}>
            This is the website we wish we had when we were learning on our own. We scour the internet looking for only the best resources to supplement your learning and present them in a logical order.
            </Typography>
      
        </Container>  
        
        <div className={classes.cards}>
        <Card object={items.learn} img={learn_img}/>
        <Card object={items.build} img={build_img}/>
        <Card object={items.connect} img={connect_img}/>
        </div>
        </div>
    )
}

export default Steps
