import React, {Component} from 'react';

class FeedItemSub extends Component {
    render() {
        var style = {
            backgroundImage: "url('" + this.props.data.image+ "')"
        };
        return(
            <a className="item" href={this.props.data.link} style={style}>
                <div className="img-container" style={style}></div>
                <div className="title-container">
                    <h2>{this.props.data.title}</h2>
                </div>
            </a>
        );
    }
}

export default FeedItemSub;