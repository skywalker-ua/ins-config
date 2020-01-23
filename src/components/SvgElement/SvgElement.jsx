import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Element } from '../../assets/all.svg';
import { ReactComponent as House } from '../../assets/house.svg';

const SvgElementHouse = () => {
    const EditHouse = styled(House)`
      width: 100%;
      height: 300px;
      cursor: pointer;
      position: relative;
      bottom: 4em;
    `;
    return(
       <EditHouse />
    );
}

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
            {props.selected === 'house' ? <SvgElementHouse /> : <EditElement />}   
        </div>
    );
};

export default SvgElement;