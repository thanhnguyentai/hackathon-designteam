import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import {Router, Route, IndexRoute} from 'react-router';
import App from './App';
import Home from './pages/Home';
import HotNews from './pages/HotNews';
import AnnouncementPage from './pages/Announcement';
import EventPage from './pages/Event';


ReactDOM.render((
    <Router>
        <Route path="/" component={App}>
            <IndexRoute component={Home}></IndexRoute>
            <Route path="hotnews" component={HotNews}></Route>
            <Route path="announcement" component={AnnouncementPage}></Route>
            <Route path="event" component={EventPage}></Route>
        </Route>
    </Router>
), document.getElementById('root'));
registerServiceWorker();
