import React from 'react';
import { connect } from 'react-redux';

const ErrorMessage = ({ error }) => (
    <React.Fragment> { error && <div> error.message </div> } </React.Fragment>
);

export default connect(store => ({error: store.error}))(ErrorMessage);