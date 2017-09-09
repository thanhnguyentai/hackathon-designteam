import React, {Component} from 'react';
import FeedItem from './FeedItem';

class FeedRow extends Component {
    render() {
        if(this.props.data.length !== 5)
            return;
        return(
            <div className="row">
                <div className="col-md-12">
                    <div className="intro-container">
                        {
                            this.props.data.map((item, index) => {
                                return (
                                    <FeedItem key={index} data={item}/>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default FeedRow;