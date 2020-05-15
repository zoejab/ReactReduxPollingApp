import React from 'react';
import { connect } from 'react-redux';
import FlashMessage from 'react-flash-message';

import { createPoll } from '../store/actions';

class CreatePoll extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: '',
            options: [''],
            success: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.addAnswer = this.addAnswer.bind(this);
        this.handleAnswer = this.handleAnswer.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    addAnswer() {
        this.setState({options: [...this.state.options, '']})
    }

    handleAnswer(e, index) {
        const options = [...this.state.options];
        options[index] = e.target.value;
        this.setState({options});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createPoll(this.state);
        this.setState({question: '', options: [''], success: true})
    }

    render() {
        const options = this.state.options.map( (option, i) => (
            <React.Fragment key={i}>
                <label style={{marginTop: '10px'}}>Option</label>
                <input 
                type="text"
                value={option}
                key={i}
                onChange={ e => this.handleAnswer(e,i) }
                />
            </React.Fragment>
        ))
        return(
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <form className="ui form" style={{ width: '50%'}} onSubmit={this.handleSubmit}> 
                    <div className='field'>
                        <label htmlFor='question'>Question</label>
                        <input 
                        type='text'
                        name='question'
                        value={this.state.question}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div className='field'>
                        {options}
                    </div>
                        <button className='ui button' type='button' onClick={this.addAnswer}>Add options + </button>
                        <button className='ui button' type='submit'> Submit </button>

                        <div className="status" style={{ marginTop: '20px'}}> 
                            { this.state.success && <FlashMessage duration={2000}> <strong>Submitted </strong>
                                </ FlashMessage> 
                            }
                        </div>
                         
                </form>
            </div>
        )
    }
}

export default connect(
    () => ({}), 
    {createPoll}
    )(CreatePoll);