import React from 'react';
import { BottomNavigation, Typography } from '@material-ui/core';


import useStyles from './styles-footer';


const Footer = () => {
    const classes = useStyles();

    return (
        <BottomNavigation variant="div" position="static" className={classes.foot} color="inherit">
              <Typography variant="body1" className={classes.copy} color="inherit">
                © 2021 Valtech Future Studio
              </Typography>
             
              <Typography variant="p" className={classes.credit} color="inherit">
                Video credits: Motor &amp; Battery Videos By EbikeSchool.com, Ebike types by Future Lab
              </Typography>
        </BottomNavigation>
    )
}

export default Footer
