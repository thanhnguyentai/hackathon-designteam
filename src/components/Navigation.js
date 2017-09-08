import React, {Component} from 'react';
import {Link} from 'react-router';

class Navigation extends Component {
    render() {
        return(
            <div>
                <ul>
                    <li>
                        <Link to="/home" activeClassName="active">Home</Link>
                    </li>
                    <li>
                        <Link to="/announcement" activeClassName="active">Announcement</Link>
                    </li>
                    <li>
                        <Link to="/event" activeClassName="active">Event</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Navigation;