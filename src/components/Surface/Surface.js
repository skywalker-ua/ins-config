import React from 'react';
import {  Paper, Typography } from '@material-ui/core';
import SurfaceTitle from '../SurfaceTitle/SurfaceTitle';

import styled from 'styled-components';

const SurfaceTools = styled(Paper)`
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    margin-top: 15px;
    margin-right: 10px;
    margin-left: 5px;
`;

const LoadingScreen = styled.div`
    background-color: #9e9e9e;
    text-align: center;
    color: #424242;
    height: 100%;
    width: 100%;
`;

const LoadingText = styled(Typography)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    height: 80%;
`;

const Loader = () => {
    return (
        <LoadingScreen>
            <LoadingText variant="h5">
                Вкажіть усі необхідні дані для розрахунку
            </LoadingText>
        </LoadingScreen>
    );
}

const Surface = props => {
const { width, height, title, info, children, loader } = props;

    return(
        <div>
            <SurfaceTools style={{minWidth: `${width}`, height: `${height}`}}>
                <SurfaceTitle title={loader ? 'Введіть усі дані' : title} info={info} />
                { loader ?
                <Loader /> :
                <div>{children}</div>
                }
            </SurfaceTools>
        </div>
    );
};

export default Surface;