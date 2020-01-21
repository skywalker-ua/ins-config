import React from 'react';
import {  Paper } from '@material-ui/core';
import SurfaceTitle from '../SurfaceTitle/SurfaceTitle';

import styled from 'styled-components';

const SurfaceTools = styled(Paper)`
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    margin-top: 15px;
`;

const Surface = props => {
const { width, height, title, info } = props;

    return(
        <div>
            <SurfaceTools style={{width: `${width}`, height: `${height}`}}>
                <SurfaceTitle title={title} info={info} />
                <p>Content</p>
            </SurfaceTools>
        </div>
    );
};

export default Surface;