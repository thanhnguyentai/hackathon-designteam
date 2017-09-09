import React, {Component} from 'react';
import {Link} from 'react-router';
import logo from '../logo.png';

class Navigation extends Component {
    render() {
        return(
            <nav>
                <Link to="/" className="logo">
                    <img src={logo} alt="logo" />
                </Link>
                <ul>
                    <li className="has-notification">
                        <Link to="/hotnews" activeClassName="active">
                            <div className="icon"><i className="zmdi zmdi-globe-alt"></i></div>
                            <span className="text-nav">Hot News</span>
                        </Link>
                    </li>
                    <li className="has-notification">
                        <Link to="/announcement" activeClassName="active">
                            <div className="icon"><i className="zmdi zmdi-alert-circle-o"></i></div>
                            <span className="text-nav">Announcements</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/event" activeClassName="active">
                            <div className="icon"><i className="zmdi zmdi-calendar-check"></i></div>
                            <span className="text-nav">Upcoming Events</span>
                        </Link>
                    </li>
                    <li>
                        <a href="#">
                            <div className="icon"><i className="zmdi zmdi-accounts-outline"></i></div>
                            <span className="text-nav">Our Nitecans</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div className="icon"><i className="zmdi zmdi-folder-outline"></i></div>
                            <span className="text-nav">Forms and Templates</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div className="icon"><i className="zmdi zmdi-comment-outline"></i></div>
                            <span className="text-nav">Discussion View</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div className="icon"><i className="zmdi zmdi-slideshow"></i></div>
                            <span className="text-nav">Company Gallery</span>
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;