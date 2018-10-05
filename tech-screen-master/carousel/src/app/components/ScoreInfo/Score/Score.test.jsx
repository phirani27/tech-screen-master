import React from 'react';
import {configure,shallow,mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import Score from "./Score";

const sampleProp = {
    key: "score",
    content:[
        {key:"score_1",text:"Your credit score is",className:""},
        {key:"score_2",text:"${score}",className:""}
    ],
    keysMap: {
        "score":514
    }
};

const setup = propOverrides => {
    const props = Object.assign({
      content: [],
      keysMap: {}
    }, propOverrides)
  
    const wrapper = shallow(<Score {...props} />)
  
    return {
      props,
      wrapper,
      items: wrapper.find('.score__score-line-item'),
    }
  }

describe('Score', () =>{

    it('No items if no content',() =>{
        const { items } = setup({ activeCount: 0 })
        expect(items.length).toEqual(0);
    });

    it('If it contains content',() =>{
        const { items } = setup({ ...sampleProp })
        expect(items.length).toEqual(2);
    });

});