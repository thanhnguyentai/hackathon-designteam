import React, {Component} from 'react';
import DataMock from '../constants/DataMock';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import 'whatwg-fetch';
import FeedRow from '../components/FeedRow';
import ScrollBottom from '../utils/ScrollBottom';

class Home extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            feeds: [],
            pageSize: 5,
            currentPage: 1
        };
    }
    
    getFeeds() {
        fetch(DataMock.hotNews)
        .then((response) => response.json())
        .then((responseData) => {
            this.setState({
                feeds: responseData
            });
        });
    }

    componentDidMount() {
        this.getFeeds();
        new ScrollBottom(this.nextPage.bind(this));
    }

    nextPage() {
        this.setState({
            currentPage: this.state.currentPage + 1
        });
    }

    render() {
        let numberShow = this.state.currentPage * this.state.pageSize;
        let shownFeeds = this.state.feeds.slice(0, numberShow);
        let listRows = [];
        for(let i=0; i<shownFeeds.length; i+=this.state.pageSize) {
            listRows.push(shownFeeds.slice(i, i + this.state.pageSize));
        }

        return (
            <div className="container" ref={(container) => {this.container = container;}}>
                <ReactCSSTransitionGroup
                    transitionName="feed-show"
                    transitionEnterTimeout={350}
                    transitionLeaveTimeout={350}
                >
                 {
                    listRows.map((row, index) => {
                        return (<FeedRow key={index} data={row}/>);
                    })
                 }   
                </ReactCSSTransitionGroup>

                <a onClick={this.nextPage.bind(this)}>Next</a>
            </div>
        );
    }
}

export default Home;