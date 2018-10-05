import React from 'react';
import {configure,shallow,mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import ScoreArc from "./ScoreArc";

const sampleProp = {
    key: "score",
    arcValue:0.7,
    scoreWidth: 400
};

const setup = propOverrides => {
    const props = Object.assign({
        arcValue: 0,
        scoreWidth: 0
    }, propOverrides)
  
    const wrapper = shallow(<ScoreArc {...props} />)
  
    return {
      props,
      wrapper,
      circle: wrapper.find('circle'),
    }
  }

describe('ScoreArc', () =>{

    it('No items if no content',() =>{
        const { circle } = setup()
        expect(circle.prop('opacity')).toEqual(0);
    });

    it('If it contains content',() =>{
        const { circle } = setup({ ...sampleProp })
        expect(circle.prop('opacity')).toEqual(1);
    });

});