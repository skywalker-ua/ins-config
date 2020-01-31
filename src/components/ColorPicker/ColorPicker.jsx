import React from 'react';
import styled from 'styled-components';
import {  Paper, Typography, Tab, Tabs, useMediaQuery    } from '@material-ui/core';
import data from '../../constants/colors';
import resimarm from '../../constants/resimarm';

import { connect } from 'react-redux';

const ColorTab = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 4px;
    width: 250px;
    height: 270px;
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

const ColorSelectionTab = styled(Tab)`
   
`;

const ColorPicker = (props) => {
    const matches = useMediaQuery('(max-width:600px)');
    const SelectionTab = styled(Tabs)`
    
    width: 300px;
    position: relative;
    left: ${() => matches ? '30px' : '0px'}
    `;
    const [values, setValue] = React.useState({
        selection: 0,
    });

    const handleSelect = (event, newValue) => {
        
        setValue({
            ...values,
            selection: newValue
        })
        console.log(newValue);
    }   

    return(
        <div>
            <SelectionTab value={values.selection} onChange={handleSelect} aria-label="selection tabs">
                <ColorSelectionTab id="tab-0" label="Resimarm"></ColorSelectionTab>
                <ColorSelectionTab id="tab-1" label="Штукатурки"></ColorSelectionTab>
            </SelectionTab>
            { values.selection == 0 ? 
                
                <ColorTab>
                    {resimarm.map(color => (
                        <ColorSample
                         onClick={() => {
                            // props.onAddColor(color.imageHex);
                            props.onAddId(color.id); }}
                         key={color.id} title={color.id}><img style={{width: '40px', height: '40px', pointerEvents: 'none'}} src={color.imagePath} />
                        </ColorSample>
                        
                    ))}  
                </ColorTab>
            :
                <ColorTab>
                    {data.map(color => (
                        <ColorSample onClick={() => {
                            props.onAddColor(color.imageHex);
                            props.onAddId(color.id); 
                        }} style={{backgroundColor: `${color.imageHex}`}}  hex={color.imageHex} key={color.id} title={color.id}/>
                    ))}  
                </ColorTab>
        }
        </div>
    );
        

};

const mapDispatchToProps = dispatch => {
    return {
        onAddColor: (hex) => dispatch({ type: 'ADD_COLOR', value: hex }),
        onAddId: (id) => dispatch({ type: 'ADD_ID', number: id})
    };
};

export default connect(null, mapDispatchToProps)(ColorPicker);