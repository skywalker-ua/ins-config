import React from 'react';
import { Typography, Divider } from '@material-ui/core';
import styled from 'styled-components';

const SumList = styled.div`
    margin-top: 20px;

`;

const TotalSum = (props) => {
    return(
        <SumList>
            <Typography variant="h5">Загальна вартість</Typography>
            <Divider style={{width: "100%"}} />
            
        </SumList>
    );
};

export default TotalSum;