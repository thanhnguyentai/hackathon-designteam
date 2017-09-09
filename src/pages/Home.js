import React, {Component} from 'react';
import DataMock from '../constants/DataMock';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import 'whatwg-fetch';
import FeedRow from '../components/FeedRow';
import FeedItemSub from '../components/FeedItemSub';
import ScrollBottom from '../utils/ScrollBottom';

import efficientLogo from '../efficient-time-logo.png';

class Home extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            feeds: [],
            pageSize: 4,
            currentPage: 1,
            sizeFirstPage: 5,
        };
    }
    
    getFeeds() {
        fetch(DataMock.home)
        .then((response) => response.json())
        .then((responseData) => {
            this.setState({
                feeds: responseData
            });
        });
    }

    componentDidMount() {
        this.getFeeds();
        //new ScrollBottom(this.nextPage.bind(this));
    }

    nextPage() {
        this.setState({
            currentPage: this.state.currentPage + 1
        });
    }

    render() {
        let numberShow = this.state.sizeFirstPage + (this.state.currentPage - 1) * this.state.pageSize;
        let shownFeeds = this.state.feeds.slice(0, numberShow);
        let fiveFirstItems = shownFeeds.slice(0, this.state.sizeFirstPage)
        let listMore = [];
        for(let i=5; i<shownFeeds.length; i++) {
            listMore.push(shownFeeds[i]);
        }

        let isShowLoadMore = numberShow < this.state.feeds.length;

        return (
            <div className="container-fluid" ref={(container) => {this.container = container;}}>
                <div className="row top-message">
					<div className="col-md-12">
						<div className="message">
							<img alt="message" src={efficientLogo} />
							<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
							<a href="javascript:;" className="close-message"><i className="zmdi zmdi-close"></i></a>
						</div>
						<div className="clock">
							<p className="clock-time">09:09 AM</p>
							<p className="clock-date">Saturday, September 9</p>
						</div>
					</div>
				</div>

                <ReactCSSTransitionGroup
                    transitionName="feed-show"
                    transitionEnterTimeout={350}
                    transitionLeaveTimeout={350}
                >
                    {
                        fiveFirstItems && fiveFirstItems.length > 0 ? <FeedRow data={fiveFirstItems}/> : ""
                    }
                </ReactCSSTransitionGroup>
                <div className="row load-more">
                    <div className="content-grid">
                    {
                        listMore.map((item, index) => (
                            <FeedItemSub key={item.id} data={item} />
                        ))
                    }
                    </div>
                </div>
                {
                    isShowLoadMore ? (
                        <div className="row view-more-trigger">
                            <div className="col-sm-12">
                                <a onClick={this.nextPage.bind(this)}><i className="zmdi zmdi-chevron-down"></i></a>
                            </div>
                        </div>
                    ) : ""
                }
            </div>
        );
    }
}

export default Home;