import React from 'react';
import { Typography, Paper } from '@material-ui/core';

import styled from 'styled-components';

const SurfaceTools = styled(Paper)`
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
`;

const Surface = props => {
const { width, height } = props;

    return(
        <div>
            <SurfaceTools style={{width: `${width}`, height: `${height}`}}>2</SurfaceTools>
        </div>
    );
};

export default Surface;