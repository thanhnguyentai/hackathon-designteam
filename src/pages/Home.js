import React, {Component} from 'react';
import DataMock from '../constants/DataMock';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import 'whatwg-fetch';
import FeedItem from '../components/FeedItem';

class Home extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            feeds: [],
            pageSize: 1,
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
    }

    nextPage() {
        this.setState({
            currentPage: this.state.currentPage + 1
        });
    }

    render() {
        let tempStyle = {
            position: 'absolute',
            top: '200px',
            right: '100px'
        };

        return (
            <div>
                <ReactCSSTransitionGroup
                    transitionName="feed-show"
                    transitionEnterTimeout={350}
                    transitionLeaveTimeout={350}
                >
                    {
                        this.state.feeds.map((feed, index) => {
                            if(index < this.state.currentPage * this.state.pageSize) {
                                return (
                                    <FeedItem key={feed.id} data={feed}/>
                                );
                            }
                        })
                    }
                </ReactCSSTransitionGroup>

                <a style={tempStyle} onClick={this.nextPage.bind(this)}>Next</a>
            </div>
        );
    }
}

export default Home;