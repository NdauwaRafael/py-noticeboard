import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withAlert } from 'react-alert';

export class Alerts extends Component {
    componentDidUpdate(prevProps) {
        const { error, alert } = this.props;

        if (prevProps.error !== error) {
            alert.error(error.msg);
        }
    }

    render() {
        return (
            <Fragment />
        )
    }
}

const mapStateToProps = state => ({
    error: state.errors
})

export default connect(mapStateToProps)(withAlert()(Alerts));
