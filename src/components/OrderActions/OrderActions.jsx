import React, { useRef } from 'react';
import { IconButton, Tooltip  } from '@material-ui/core';
import styled from 'styled-components';
import PrintIcon from '@material-ui/icons/Print';
import OrderTable from '../OrderTable/OrderTable';
import './OrderActions.css';

const ActionIcons = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    margin-top: 5px;
`;

const OrderActions = () => {
    const componentRef = useRef();

    return (
        <ActionIcons>
            <Tooltip title="Друк">
                <IconButton
                    aria-label="print" 
                    size="small">
                    <PrintIcon  />
                </IconButton>
            </Tooltip>
        </ActionIcons>
    );
};

export default OrderActions;