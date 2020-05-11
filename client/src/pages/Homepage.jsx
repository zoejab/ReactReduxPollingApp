import React from 'react';
import Polls from '../components/Polls';

const Homepage = (props) => (
    <React.Fragment>
        <h2 style={{marginTop: '50px', textAlign: 'center'}}>Pick a poll</h2> 
        <Polls {...props} />
    </React.Fragment>
);

export default Homepage;