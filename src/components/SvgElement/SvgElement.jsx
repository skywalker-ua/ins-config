import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Element } from '../../assets/all.svg';
// import { ReactComponent as House } from '../../assets/house.svg';
import { ReactComponent as HouseTrad } from '../../assets/house1.svg';

const HouseTraditional = props => {
    const TradHouse = styled(HouseTrad)`
        width: 100%;
        height: 300px;
        cursor: pointer;
        position: relative;
        bottom: 6em;
        left: 2em;
         .cls-2, 
        .cls-4, .cls-5, 
        .cls-7, .cls-12, .cls-13, .cls-14, .cls-17, .cls-27, .cls-28 {
            fill: ${props.color}
        }
    `;
    return <TradHouse />
}

// const SvgElementHouse = (props) => {
//     const EditHouse = styled(House)`
//       width: 100%;
//       height: 300px;
//       cursor: pointer;
//       position: relative;
//       bottom: 6em;
//       .cls-8, .cls-10, .cls-12,
//       .cls-14, .cls-33, cls-15, .cls-31  {
//         fill: ${props.color};
//       }
    
//     `;
//     return(
//        <EditHouse />
//     );
// }

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
        // case('house'):
        //     return <div><SvgElementHouse color={props.color}  /> </div>;
        case('facade'):
            return <div><EditElement /></div>;
        case('house-trad'):
            return <div><HouseTraditional color={props.color} /></div>
        default: return <div><EditElement /></div>;
    }
};

export default SvgElement;