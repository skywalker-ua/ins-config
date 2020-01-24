import React from 'react';
import { IconButton, Tooltip  } from '@material-ui/core';
import styled from 'styled-components';
import PrintIcon from '@material-ui/icons/Print';
import './OrderActions.css';

const ActionIcons = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    margin-top: 5px;
`;

const OrderActions = () => {
    

    return (
        <ActionIcons>
            <Tooltip title="Друк">
                <IconButton
                    disabled
                    aria-label="print" 
                    size="small">
                    <PrintIcon  />
                </IconButton>
            </Tooltip>
        </ActionIcons>
    );
};

export default OrderActions;