import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import {Router, Route} from 'react-router';
import App from './App';
import HomePage from './pages/Home';
import AnnouncementPage from './pages/Announcement';
import EventPage from './pages/Event';


ReactDOM.render((
    <Router>
        <Route path="/" component={App}>
            <Route path="home" component={HomePage}></Route>
            <Route path="announcement" component={AnnouncementPage}></Route>
            <Route path="event" component={EventPage}></Route>
        </Route>
    </Router>
), document.getElementById('root'));
registerServiceWorker();
