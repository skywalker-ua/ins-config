import React from 'react';
import { IconButton, Tooltip, Typography   } from '@material-ui/core';
import styled from 'styled-components';
import PrintIcon from '@material-ui/icons/Print';
import './OrderActions.css';

const ActionIcons = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    margin-top: 5px;
    padding: 10px;
`;

const SumText = styled(Typography)`
    
    flex-grow: 1;
    fontWeight: 700;
`;

const OrderActions = (props) => {
    const calcSum = (square, price) => {
        return 'Cума: ' + (square * price).toFixed(0) + ' грн';
    };


    return (
        <ActionIcons>
            <Tooltip title="Друк">
                <IconButton
                    aria-label="print" 
                    size="small">
                    <PrintIcon  />
                </IconButton>
            </Tooltip>
                <SumText color="secondary" align="right" variant="h7">{props.square ? calcSum(props.square, 282.85) : null}</SumText>
        </ActionIcons>
    );
};

export default OrderActions;