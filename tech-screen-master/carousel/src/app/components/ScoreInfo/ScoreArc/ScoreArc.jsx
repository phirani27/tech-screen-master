import React from 'react';
import PropTypes from 'prop-types';

import Aux from "../../../hoc/Aux2/Aux2";
import classes from "./scoreArc.scss";
import {generateTemplateString} from "../../../utils/helper";
import bemHelper from "../../../utils/bem";

const cn = bemHelper({ block: 'scoreArc' });
const scoreArc = (props) => {
    let progress = props.arcValue || 0;
    let opacity = progress ? 1 : 0;
    let dashArray = (props.scoreWidth * Math.PI);
    let dashoffset = dashArray * (1 - progress); 
    

    return (
        <svg className={cn(null,'main')}>
            <circle 
                opacity={opacity} 
                strokeDasharray={dashArray} 
                strokeDashoffset={dashoffset} 
                cx="50%" 
                cy="50%"
                r="48%" 
                fill="transparent">
            </circle>
        </svg>
    );
};

scoreArc.propTypes = {
    arcValue: PropTypes.number.isRequired, 
    scoreWidth: PropTypes.number.isRequired  
};

export default scoreArc;