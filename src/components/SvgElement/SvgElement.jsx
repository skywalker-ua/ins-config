import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Element } from '../../assets/all.svg';

const SvgElement = props => {
    const EditElement = styled(Element)`
    width: 100%;
    height: 300px;
    margin-top: 20px;
    cursor: pointer;
    position: relative;
    bottom: 6em;
    .cls-22 {
        fill: ${props.color};
    }
`;
    return (
        <div>   
            <EditElement />
        </div>
    );
};

export default SvgElement;