import React from 'react';
import { connect } from 'react-redux';
import { Pie } from 'react-chartjs-2';

import { vote } from '../store/actions';

const color = () => {
    return ('#' + Math.random().toString(16).slice(3,9));
}

const Poll = ({ poll, vote }) => {
    const answers = poll.options && poll.options.map(option => (
        <button onClick={() => vote(poll._id, {answer: option.option})} key={option._id}> {option.option} </button>
    ))

    const data = poll.options && {
        labels: poll.options.map(option => option.option),
        datasets: [
            {
                label: poll.question,
                backgroundColor: poll.options.map(option => color()),
                borderColor: '#fff',
                data: poll.options.map(option => option.votes),
                response: true,
                maintainAspectRatio: true,
            }
        ]
    }
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}> 
            <div style={{marginBottom: '10px'}}> <h3> {poll.question} </h3> </div>
            <div style={{marginBottom: '50px'}}> {answers}</div>
            <div style={{width: '50%'}}> { poll.options && <Pie data={data} /> } </div>
        </div>
    )
 
};

export default connect( store => ({
    poll: store.currentPoll
}), { vote })(Poll);