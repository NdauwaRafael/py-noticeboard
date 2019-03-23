import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Register } from '../auth/Register';
import HeaderGuest from './partials/HeaderGuest';
import HeaderAuthenticated from './partials/HeaderAuthenticated'
import { connect } from 'react-redux';

class Header extends Component {
    logoutUser() {
        console.log('Yeah, Clicked')
    }
    render() {
        const { isAuthenticated } = this.props;
        return (
            <div className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
                <div className="container">
                    <a href="#" className="navbar-brand">NoticeBoard</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"> </span>
                    </button>

                    {
                        isAuthenticated ? <HeaderAuthenticated logoutUser={this.logoutUser} /> : <HeaderGuest />
                    }

                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {

}
const mapStateToProps = ({ auth: { isAuthenticated }, auth }) => {
    return {
        isAuthenticated,
        auth
    }
}
export default connect(mapStateToProps)(Header);