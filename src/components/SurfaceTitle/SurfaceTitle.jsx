import React from 'react';
import { Typography, Divider } from '@material-ui/core';
import HelpIcon from '@material-ui/icons/Help';

const SurfaceTitle = props => {
    return(
        <div style={{width: '100%'}}>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <Typography style={{margin: '8px', textAlign: 'center',flexGrow: 1}}>{props.title}</Typography>
                <HelpIcon color="secondary" style={{alignSelf: 'center', marginRight: '13px'}} />
            </div>
            <Divider style={{width: '100%'}} />
        </div>
        
    );
};

export default SurfaceTitle;