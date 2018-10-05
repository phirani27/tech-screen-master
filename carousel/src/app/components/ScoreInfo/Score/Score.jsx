import React from 'react';
import PropTypes from 'prop-types';
import Currency from 'react-currency-formatter';

import Aux from "../../../hoc/Aux2/Aux2";
import classes from "./Score.scss";
import {generateTemplateString} from "../../../utils/helper";
import bemHelper from "../../../utils/bem";

const cn = bemHelper({ block: 'score' });
const score = (props) => {
    let contents = props.content || [];
    return (
        <Aux>
            {
                contents.map((content) => {
                    let text = content.text || "";
                    if(text.indexOf("${") > -1){
                        text = generateTemplateString((content.text||""))(props.keysMap);
                    }
                    if(content.currency){
                        text = <Currency
                                    quantity={Number(text)}
                                    currency={content.currency}
                                />
                    }
                    return (
                        <div className={cn('score-line-item')} key={content.key}>
                            {text}
                        </div>
                    )
                })
            }
        </Aux>
    );
};

score.propTypes = {
    content: PropTypes.arrayOf(PropTypes.object).isRequired,
    keysMap: PropTypes.object  
};

export default score;