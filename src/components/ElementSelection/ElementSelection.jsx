import React from 'react';
import './ElementSelection.css'
// import SvgElement from '../../components/SvgElement/SvgElement';
import { ReactComponent as Svg } from '../../assets/all.svg';
import { ReactComponent as House } from '../../assets/house.svg';
import { ReactComponent as HouseTraditional } from '../../assets/house1.svg';

import { connect } from 'react-redux';

const ElementSelection = (props) => {
    return(
        <div className="wrapper">
            <div className="item-img">
                <div className="element-child" onClick={() => props.onChooseElement('facade')} >
                   <Svg />
                </div>
            </div>
            <div className="item-img">
                <div className="element-child-house" onClick={() => props.onChooseElement('house')} >
                   <House />
                </div>
            </div>
            <div className="item-img">
                <div className="element-child-house-traditional" onClick={() => props.onChooseElement('house-trad')}  >
                   <HouseTraditional />
                </div>
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        onChooseElement: (el) => dispatch({ type: 'CHOOSE_ELEMENT', item: el})
    }
}

export default connect(null, mapDispatchToProps)(ElementSelection);