import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
const Footer = () => {
    return(
        <div>
            <AppBar style={{bottom: 0, top: 'auto'}}>
                <Toolbar>
                Chemiplast © 2020 
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Footer;