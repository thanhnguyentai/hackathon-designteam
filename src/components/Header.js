import React, {Component} from 'react';
import logo from '../logo.svg';
import efficientTime from '../efficient-time.png';

class Header extends Component {
    showConfiguration() {
        this.props.showConfiguration();
    }

    render() {
        return(
            <header>
                <a className="header-social" href="http://niteco.se"><img alt="Niteco" src={logo} alt="" /></a>
                <a className="header-social" href="http://efficient.com"><img alt="Efficient Time" src={efficientTime} alt="" /></a>
                <a className="header-social" href="https://facebook.com"><i className="zmdi zmdi-facebook"></i></a>
                <a className="header-social" href="https://twitter.com"><i className="zmdi zmdi-twitter"></i></a>
                <a className="header-social" href="https://linkedin.com"><i className="zmdi zmdi-linkedin"></i></a>
                <a className="header-notification" href="#"><i className="zmdi zmdi-notifications"></i></a>
                <a className="header-signin" href="#">SIGN IN</a>
                <a onClick={this.showConfiguration.bind(this)} className="header-setting" href="javascript:;"><i className="zmdi zmdi-settings"></i></a>
            </header>
        );
    }
}

export default Header;