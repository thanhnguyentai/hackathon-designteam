import React, {Component} from 'react';
import profile from '../profile.jpg';

import localData from '../utils/LocalStorage';

class Configuration extends Component {

    closeConfiguration() {
        this.props.hideConfiguration();
    }

    toggleFilterHotNew(event) {
        let newFilter = this.props.filterData;
        newFilter.isHotNew = event.target.value === "on" ? true: false;

        this.props.updateFilterConfig(newFilter);
    }

    toggleFilterAnnouncement(event) {}

    render() {
        let isShow = this.props.isShow;
        let wrapperClass = isShow? "show-aside" : "";
        let configData = localData.getFilterData();

        return(
            <aside className={wrapperClass}>
                <div className="aside-section">
                    <h1>SETTINGS</h1>
                    <a onClick={this.closeConfiguration.bind(this)} href="javascript:;" className="close-aside"><i className="zmdi zmdi-close"></i></a>
                </div>
                <div className="aside-section">
                    <h2>USER PROFILE</h2>
                    <a className="profile-link">
                        <img alt="avatar" src={profile} />
                        <p><span>Nhung Bui</span>PMO Officer</p>
                    </a>
                    <a href="#sign-out" className="sign-out">SIGN OUT</a>
                </div>
                <div className="aside-section">
                    <h2>Niteco Intranet Options</h2>
                    <div className="intranet-option">
                        <ul>
                            <li>
                                <span>Dark Theme</span>
                                <div className="check-box-custom">
                                    <input id="chk-theme" type="checkbox" className="chk-theme" />
                                    <label htmlFor="chk-theme" data-lbl=""></label>
                                </div>
                            </li>
                            <li>
                                <span>Hot News</span>
                                <div className="check-box-custom">
                                    <input id="option1" type="checkbox" name="chk-theme" defaultChecked={configData.isHotNew} />
                                    <label htmlFor="option1" data-lbl=""></label>
                                </div>
                            </li>
                            <li>
                                <span>Announcements</span>
                                <div className="check-box-custom">
                                    <input id="option2" type="checkbox" name="chk-theme" defaultChecked={configData.isAnnouncement} />
                                    <label htmlFor="option2" data-lbl=""></label>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="aside-section"></div>
            </aside>
        );
    }
}

export default Configuration;