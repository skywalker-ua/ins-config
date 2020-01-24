import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Element } from '../../assets/all.svg';
import { ReactComponent as House } from '../../assets/house.svg';

const SvgElementHouse = (props) => {
    const EditHouse = styled(House)`
      width: 100%;
      height: 300px;
      cursor: pointer;
      position: relative;
      bottom: 4em;
      .cls-8, .cls-10, .cls-12,
      .cls-14, .cls-33, cls-15, .cls-31  {
        fill: ${props.color};
      }
    
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
    switch(props.selected) {
        case('house'):
            return <div><SvgElementHouse color={props.color}  /> </div>;
        case('facade'):
            return <div><EditElement /></div>;
        default: return <div><EditElement /></div>;
    }
};

export default SvgElement;