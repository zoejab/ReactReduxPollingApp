import React from 'react';

import CreatePoll from '../components/CreatePoll';

const CreatePollPage = () => {
    return (
        <div>
            <h2 style={{marginTop: '50px', textAlign: 'center'}}>Create a New Poll</h2>
            <CreatePoll />
        </div>
    )
}

export default CreatePollPage;