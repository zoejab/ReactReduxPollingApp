import React from 'react';
import { connect } from 'react-redux';

import { getPolls, getCurrentPoll } from '../store/actions';

class Polls extends React.Component {
    constructor(props) {
        super(props);

        this.handleSelect = this.handleSelect.bind(this);
    }
 
    componentDidMount() {
        const { getPolls } = this.props;
        getPolls();
    }

    handleSelect(id) {
        const { history } = this.props;
        history.push(`/poll/${id}`);
    }
    
    render() {
        const polls = this.props.polls.map(poll => (
        <li className='ui card' style={{ marginLeft: '10px', marginTop: '10px', marginBottom: '0'}} onClick={() => this.handleSelect(poll._id)} key={poll._id}> 
            <div className="content"> {poll.question}  </div> 
            <div className="extra content" style={{ cursor: 'pointer'}}>
                Vote Now >
            </div>
        </li>))
        return (
            <React.Fragment>
                <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap'}}> {polls} </ul>
            </React.Fragment>
        )
    }
}

export default connect(store => ({
    polls: store.polls,
}), 
{getPolls, getCurrentPoll}
)(Polls);