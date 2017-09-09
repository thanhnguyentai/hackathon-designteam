import React, {Component} from 'react';
import FeedItem from './FeedItem';

class FeedRow extends Component {
    render() {
        if(this.props.data.length !== 5)
            return;
        return(
            <div className="row intro no-gutter">
                <div className="col-md-6 item">
                    <FeedItem data={this.props.data[0]}/>
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-sm-6 item">
                            <FeedItem data={this.props.data[1]}/>
                        </div>
                        <div className="col-sm-6 item">
                            <FeedItem data={this.props.data[2]}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 item">
                            <FeedItem data={this.props.data[3]}/>
                        </div>
                        <div className="col-sm-6 item">
                            <FeedItem data={this.props.data[4]}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FeedRow;