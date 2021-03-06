import React, {Component} from 'react';

class FeedItem extends Component {
    render() {
        var style = {
            backgroundImage: "url('" + this.props.data.image+ "')"
        };
        return(
            <a className="item" href={this.props.data.link} style={style}>
                <div className="item-title">
                    <h2>{this.props.data.title}</h2>
                    <p>{this.props.data.type}</p>
                </div>
            </a>
        );
    }
}

export default FeedItem;