import React from 'react';
import './ElementSelection.css'
// import SvgElement from '../../components/SvgElement/SvgElement';
import { ReactComponent as Svg } from '../../assets/all.svg';

const ElementSelection = () => {
    return(
        <div className="wrapper">
            <div className="item-img">
                <div className="element-child">
                   <Svg />
                </div>
            </div>
            <div className="item-img">
                <div className="element-child">
                   <Svg />
                </div>
            </div>
        </div>
    );
};

export default ElementSelection;