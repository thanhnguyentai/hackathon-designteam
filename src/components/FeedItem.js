import React, {Component} from 'react';

class FeedItem extends Component {
    render() {
        return(
            <div>
                <a href={this.props.data.link}>
                    <img src={this.props.data.image}/>
                    <div>{this.props.data.title}</div>
                    <div>{this.props.data.description}</div>
                </a>
            </div>
        );
    }
}

export default FeedItem;