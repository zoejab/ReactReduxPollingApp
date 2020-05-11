import {combineReducers} from 'redux';

import { polls, currentPoll } from './polls';

export default combineReducers({
    polls,
    currentPoll,
});