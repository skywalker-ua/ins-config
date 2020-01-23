import React from 'react';
import styled from 'styled-components';
import {  Paper, Typography   } from '@material-ui/core';
import data from '../../constants/colors';

const ColorTab = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 5px;
    width: 250px;
    height: 300px;
    padding: 10px;
    flex-flow: row wrap;
    overflow: auto;
    &::-webkit-scrollbar {
        width: 10px;
        background-color: #F5F5F5;  
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        background-color: #555;
    }
    &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	    border-radius: 10px;
	    background-color: #F5F5F5;
    }
`;

const ColorSample = styled(Paper)`
    color: white;
    width: 40px;
    height: 40px;
    margin: 5px;
    cursor: pointer;
`;

const colorPick = props => event => {
    event.preventDefault();
    console.log(props.hex);
}

const ColorPicker = () => {
    return(
        <ColorTab>
            {data.map(color => (
                <ColorSample style={{backgroundColor: `${color.imageHex}`}}  hex={color.imageHex} key={color.id} title={color.id}/>
            ))}  
        </ColorTab>
    );
};

export default ColorPicker;