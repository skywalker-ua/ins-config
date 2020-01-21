import React from 'react';
import { Typography, Paper } from '@material-ui/core';
import SurfaceTitle from '../SurfaceTitle/SurfaceTitle';

import styled from 'styled-components';

const SurfaceTools = styled(Paper)`
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
`;

const Surface = props => {
const { width, height, title } = props;

    return(
        <div>
            <SurfaceTools style={{width: `${width}`, height: `${height}`}}>
                <SurfaceTitle title={title} />
            </SurfaceTools>
        </div>
    );
};

export default Surface;