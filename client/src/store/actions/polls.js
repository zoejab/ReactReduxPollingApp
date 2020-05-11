import api from '../../services/api';
import { SET_POLLS, SET_CURRENT_POLL } from '../actionTypes';

export const setPolls = polls => ({
    type: SET_POLLS,
    polls
});

export const setCurrentPoll = poll => ({
    type: SET_CURRENT_POLL,
    poll
});

export const getPolls = () => {
    return async dispatch => {
        try {
            const polls = await api.call('get', 'polls');
            dispatch(setPolls(polls));
        } catch(err) {
            const error = err.response.data;
            console.log(error);
        }
    }
};

export const createPoll = (data) => {
    return async dispatch => {
        try {
            const poll = await api.call('post', 'polls', data);
            dispatch(setCurrentPoll(poll));
        } catch(err) {
            const error = err.response.data;
            console.log(error);        }
    }
};

export const getCurrentPoll = (path) => {
    return async dispatch => {
        try {
            const poll = await api.call('get', `polls/${path}`);
            dispatch(setCurrentPoll(poll));
        } catch(err) {
            const error = err.response.data;
            console.log(error);        }
    }
};

export const vote = (path, data) => {
    return async dispatch => {
        try {
            const poll = await api.call('post', `polls/${path}`, data);
            dispatch(setCurrentPoll(poll));
        } catch(err) {
            const error = err.response.data;
            console.log(error);        }
    }
};