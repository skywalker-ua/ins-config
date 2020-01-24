import React from 'react';
import Fab from '@material-ui/core/Fab';
import CallIcon from '@material-ui/icons/Call';

import styled from 'styled-components';
const FloatCall = styled.div`
    position: absolute;
    top: 50em;
    left: 110em;
`;

const CallManager = () => {
    return(
        <FloatCall>
            <Fab color="secondary">
                <CallIcon />
            </Fab>
        </FloatCall>
    );
};

export default CallManager;