import React from 'react';
import { Typography } from '@material-ui/core';

const TotalSum = (props) => {
    return(
        <div>
            <Typography variant="h5">Сума:</Typography>
            <Typography variant="h5">{props.sum}</Typography>
        </div>
    );
};

export default TotalSum;