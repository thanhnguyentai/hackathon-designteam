import React, {Component} from 'react';

class FeedItem extends Component {
    render() {
        return(
            <div>
                <a href={this.props.data.link}>
                    <img src={this.props.data.image} alt=""/>
                    <div className="item-title">
                        <h2>{this.props.data.title}</h2>
                        <p>{this.props.data.description}</p>
                    </div>
                </a>
            </div>
        );
    }
}

export default FeedItem;