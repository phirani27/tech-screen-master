import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Slider from "react-slick";

import bemHelper from "../../utils/bem";
import {getJSON} from "../../utils/fetch";
import Score from "../../components/ScoreInfo/Score/Score";
import ScoreArc from "../../components/ScoreInfo/ScoreArc/ScoreArc";
import './ScoreIndicator.scss'

const cn = bemHelper({ block: 'scoreIndicator' });

const SCORE_URL = "https://s3.amazonaws.com/cdn.clearscore.com/native/interview_test/creditReportInfo.json"; 
const SETTINGS = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    className: cn("slick-slider"),
    dotsClass: cn('slick-slider-button')
};

const SCORE_CONFIG = [
    {
        key: "score",
        content:[
            {key:"score_1",text:"Your credit score is",className:""},
            {key:"score_2",text:"${score}",className:""},
            {key:"score_3",text:"out of ${maxScoreValue}",className:""},
            {key:"score_4",text:"${equifaxScoreBandDescription}",className:""}
        ],
        arc: {
            num: "score",
            den: "maxScoreValue"
        },
        keys: ["score","maxScoreValue","equifaxScoreBandDescription"]
    },
    {
        key: "currentShortTermDebt",
        content: [
            {key:"currentShortTermDebt_1",text:"Your short term debt total is",className:""},
            {key:"currentShortTermDebt_2",text:"${currentShortTermDebt}",className:"",currency:"INR"}
        ],
        keys: ["currentShortTermDebt"]
    },
    {
        key: "currentLongTermDebt",
        content: [
            {key:"currentLongTermDebt_1",text:"Your long term debt total is",className:""},
            {key:"currentLongTermDebt_2",text:"${currentLongTermDebt}",className:"",currency:"INR"}
        ],
        keys: ["currentLongTermDebt"]
    }
];

class ScoreIndicator extends Component{

    scoreWidth = 0;
    state = {
        creditInfo: null,
        scoreArc: 0,
        isLoading: true
    };
    
    componentDidMount(){    
        this.setScoreWidth();
        getJSON(SCORE_URL)
            .then((data) => {
                let updateObj={};
                if(typeof data !== "undefined" && data){
                    updateObj["creditInfo"] = data.creditReportInfo || {};
                    updateObj["scoreArc"] = this.getScoreArcValue(0,updateObj["creditInfo"]); 
                }
                this.setState({
                    ...updateObj,
                    isLoading: false
                });
            })
            .catch(()=>{
                this.setState({isLoading:false});
            });
    }

    getScoreArcValue= (index,creditInfo) =>{
        let scoreArc = 0;
        let conf = SCORE_CONFIG[index];
        if(conf && conf["arc"] && creditInfo[conf["arc"]["num"]] && creditInfo[conf["arc"]["den"]]){
            scoreArc = (creditInfo[conf.arc.num]) / (creditInfo[conf.arc.den]);
        }
        return scoreArc;
        
    }

    changeCarousel = (index) => {
        let scoreArc = this.getScoreArcValue(index,this.state.creditInfo);
        this.setState({
            scoreArc: scoreArc
        });
    };  

    setScoreWidth = () => {
        if(this.refs && this.refs.scoreIndicator){
            this.scoreWidth = ReactDOM.findDOMNode(this.refs.scoreIndicator).getBoundingClientRect().width;
        }
    }

    render(){

        let transformConfig = [{key: "na",content: [{key:"na_1",text:"N/A"}]}];
        
        if(this.state.isLoading){
            transformConfig = [{key: "loading",content: [{key:"loading_1",text:"Loading..."}]}];
        }else if(this.state.creditInfo){
            transformConfig = SCORE_CONFIG.map((conf) => {
                                let keysMap = {};
                                for(let i=0,len=(conf.keys||[]).length;i<len;i++){
                                    keysMap[conf.keys[i]] = this.state.creditInfo[conf.keys[i]] || "";
                                }   

                                return {
                                    ...conf,
                                    keysMap: keysMap   
                                }; 
                            });
        }
        
        return (
            <div className={cn(null,'main')}>
                <div ref="scoreIndicator" className={cn('circular')}>
                    <ScoreArc
                        arcValue={this.state.scoreArc}
                        scoreWidth={this.scoreWidth}
                    />
                    <div className={cn('score-item')}>
                        <Slider 
                            {...SETTINGS}
                            afterChange={this.changeCarousel}
                        >
                            {
                                transformConfig.map(conf => {
                                    return (
                                        <Score
                                            {...conf}
                                        />
                                    );
                                })
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}

export default ScoreIndicator;