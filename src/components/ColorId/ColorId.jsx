import React from 'react';
import './Color.css';

const ColorId = (props) => {
    return(
         <div className="color-id">
             {props.colorId}
          </div>
    );
};

export default ColorId;