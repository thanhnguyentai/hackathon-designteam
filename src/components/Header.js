import React, {Component} from 'react';

class Header extends Component {
    render() {
        return(
            <header>
                <a className="header-notification" href="#"><i className="zmdi zmdi-notifications"></i></a>
                <a className="header-signin" href="#">SIGN IN</a>
                <a className="header-setting" href="javascript:;"><i className="zmdi zmdi-settings"></i></a>
            </header>
        );
    }
}

export default Header;