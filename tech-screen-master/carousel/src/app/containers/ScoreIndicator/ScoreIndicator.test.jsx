import React from 'react';
import {configure,shallow,mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ScoreIndicator from "./ScoreIndicator";
import Score from "../../components/ScoreInfo/Score/Score";
import ScoreArc from '../../components/ScoreInfo/ScoreArc/ScoreArc';
import * as fetch from "../../utils/fetch";

configure({ adapter: new Adapter() });

const serviceResult = {
  "accountIDVStatus": "PASS",
  "creditReportInfo": {
    "score": 514,
    "scoreBand": 4,
    "clientRef": "CS-SED-655426-708782",
    "status": "MATCH",
    "maxScoreValue": 700,
    "minScoreValue": 0,
    "monthsSinceLastDefaulted": -1,
    "hasEverDefaulted": false,
    "monthsSinceLastDelinquent": 1,
    "hasEverBeenDelinquent": true,
    "percentageCreditUsed": 44,
    "percentageCreditUsedDirectionFlag": 1,
    "changedScore": 0,
    "currentShortTermDebt": 13758,
    "currentShortTermNonPromotionalDebt": 13758,
    "currentShortTermCreditLimit": 30600,
    "currentShortTermCreditUtilisation": 44,
    "changeInShortTermDebt": 549,
    "currentLongTermDebt": 24682,
    "currentLongTermNonPromotionalDebt": 24682,
    "currentLongTermCreditLimit": null,
    "currentLongTermCreditUtilisation": null,
    "changeInLongTermDebt": -327,
    "numPositiveScoreFactors": 9,
    "numNegativeScoreFactors": 0,
    "equifaxScoreBand": 4,
    "equifaxScoreBandDescription": "Excellent",
    "daysUntilNextReport": 9
  },
  "dashboardStatus": "PASS",
  "personaType": "INEXPERIENCED",
  "coachingSummary": {
    "activeTodo": false,
    "activeChat": true,
    "numberOfTodoItems": 0,
    "numberOfCompletedTodoItems": 0,
    "selected": true
  },
  "augmentedCreditScore": null
}

const sampleCreditInfo = {
    "score": 514,
    "maxScoreValue": 700,
    "minScoreValue": 0,
    "currentShortTermDebt": 13758,
    "currentLongTermDebt": 24682,
    "equifaxScoreBandDescription": "Excellent"
};


describe('ScoreIndicator', () =>{

    it('Loading indicator on initial load',() =>{
        const wrapper = mount(<ScoreIndicator/>);
        expect(wrapper.find(".score__score-line-item").text()).toBe("Loading...");
    });

    it('If credit data available then display N/A',()=>{
        const wrapper = mount(<ScoreIndicator />);
        wrapper.setState({creditInfo:null,isLoading:false});    
        expect(wrapper.find(".score__score-line-item").text()).toBe("N/A");
    });

    it('If credit data available then ScoreArc should be present',()=>{
        const wrapper = shallow(<ScoreIndicator />);
        let scoreArc = wrapper.instance().getScoreArcValue(0,sampleCreditInfo);
        wrapper.setState({
            creditInfo: sampleCreditInfo,
            isLoading:false,
            scoreArc: scoreArc
        });    
        expect(wrapper.find(Score).length).toBe(3);
    });

    it('On change carousel with no Score Arc',()=>{
        const wrapper = shallow(<ScoreIndicator />);
        wrapper.setState({
            creditInfo: sampleCreditInfo,
            isLoading:false,
            scoreArc: 0.7
        });    
        wrapper.instance().changeCarousel(1,sampleCreditInfo);
        expect(wrapper.state().scoreArc).toBe(0);
    });

    it('On receiving data update the state',()=>{
        const mockedCallback = () => Promise.resolve(serviceResult);
        let promise;
        fetch.getJSON = () => {
            promise = Promise.resolve().then(mockedCallback);
            return promise;
        }
        const wrapper = shallow(<ScoreIndicator />);

        promise.then(()=>{
            wrapper.update();
            expect(wrapper.instance().state.creditInfo.score).toBe(514);
        });
    });
    
});    