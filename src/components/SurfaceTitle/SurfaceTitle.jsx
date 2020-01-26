import React from 'react';
import { Typography, Divider, Tooltip, useMediaQuery  } from '@material-ui/core';
import HelpIcon from '@material-ui/icons/Help';

const SurfaceTitle = props => {
    const matches = useMediaQuery('(min-width: 600px)');
    return(
        <div style={{width: '100%'}}>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <Typography style={{margin: '8px', textAlign: 'center',flexGrow: 1}}>{props.title}</Typography>
                { props.info && matches  ? <Tooltip title={props.info} placement="right-start" style={{fontSize: '8'}}>
                  <HelpIcon color="secondary" style={{alignSelf: 'center', marginRight: '13px'}}  />
                </Tooltip>
                 : null }
            </div>
            <Divider style={{width: '100%'}} />
        </div>
        
    );
};

export default SurfaceTitle;