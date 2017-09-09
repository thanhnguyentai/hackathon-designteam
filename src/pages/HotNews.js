import React, {Component} from 'react';
import DataMock from '../constants/DataMock';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import 'whatwg-fetch';
import FeedItemSub from '../components/FeedItemSub';
import ScrollBottom from '../utils/ScrollBottom';

class HotNews extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            feeds: [],
            pageSize: 8,
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
        //new ScrollBottom(this.nextPage.bind(this));
    }

    nextPage() {
        this.setState({
            currentPage: this.state.currentPage + 1
        });
    }

    render() {
        let numberShow = this.state.currentPage * this.state.pageSize;
        let shownFeeds = this.state.feeds.slice(0, numberShow);

        let isShowLoadMore = numberShow < this.state.feeds.length;

        return (
            <div className="container-fluid" ref={(container) => {this.container = container;}}>
                <div className="row load-more">
                    <div className="content-grid">
                        {
                            shownFeeds.map((item, index) => (
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

export default HotNews;