import React from 'react';
import { FormHelperText, FilledInput, FormControl,
    Input, InputAdornment, Switch, FormGroup,
    FormControlLabel, Slider, Typography  } from '@material-ui/core';
import styled from 'styled-components';

const FormDiv = styled.div`
    display: flex;
    flex-flow: column nowrap;
    margin-top: 9px;
`;

const SwitchDiv = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    margin-top: 3px;
`;

const SliderDiv = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 35px;
    flex-flow: column nowrap;
`;

const StartInput = () => {

    const [inputValues, setInputValue] = React.useState({
        square: '',
        pinostyrol: false,
        wool: false,
    });

    const handleInput = prop => event => {
        setInputValue({ ...inputValues, [prop]: event.target.value });
    };

    const handleCheck = name => event => {
        setInputValue({ ...inputValues, [name]: event.target.checked  });
    };
       
    // Switcher checking for type of insulator and creating 2 Boolean
    // values wool and pinostyrol
    const SwitchButton = () => {
        return (
            <SwitchDiv>
                <FormGroup column>
                    <FormControlLabel
                        control={
                            <Switch
                                disabled={inputValues.wool}
                                onChange={handleCheck('pinostyrol')}
                                value="pinostyrol"
                                checked={inputValues.pinostyrol} />
                        } label="Пінопласт" />
                    <FormControlLabel
                        control={
                            <Switch
                                disabled={inputValues.pinostyrol}
                                onChange={handleCheck('wool')}
                                value="wool"
                                checked={inputValues.wool} />
                        } label="Мінеральна вата" /> 
                </FormGroup>
            </SwitchDiv>
        );
    };

    return(
        <FormDiv>
            <FormControl variant="filled">
                <FilledInput
                    color="secondary"
                    onChange={handleInput('square')}
                    value={inputValues.square}
                    type="number"
                    id="square-feet-value "
                    endAdornment={<InputAdornment position="end">м²</InputAdornment >} />
                <FormHelperText id="square-feet-text">Площа фасаду</FormHelperText>
            </FormControl>
            <SwitchButton />
            <p>{inputValues.square}</p>
        </FormDiv>
    );
};

export default StartInput;