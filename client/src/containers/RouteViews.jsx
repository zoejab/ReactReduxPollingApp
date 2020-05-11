import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

import { getCurrentPoll } from '../store/actions';

import Homepage from '../pages/Homepage'; 
import PollPage from '../pages/PollPage'; 
import CreatePollPage from '../pages/CreatePollPage'; 

const RouteViews = ({ getCurrentPoll }) => (
    <main> 
        <Switch> 
            <Route exact path="/" render={(props) => <Homepage {...props} />} />
            <Route exact path="/poll/new" render={(props) => <CreatePollPage />} />
            <Route exact path="/poll/:id" render={(props) => <PollPage getPoll={id => getCurrentPoll(id)} {...props}/>} />

        </Switch>
    </main>
);

export default withRouter(connect(store => ({ }), { getCurrentPoll })(RouteViews));