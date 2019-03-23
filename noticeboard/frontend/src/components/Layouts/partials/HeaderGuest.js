import React from 'react';
import { Link } from 'react-router-dom';

export default ({ }) =>
    <ul className="nav navbar-nav ml-auto">
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#"
                id="download">Stephen Pepela <span className="caret"> </span></a>
            <div className="dropdown-menu" aria-labelledby="download">
                <a className="dropdown-item"
                    href="#">Profile</a>
                <div className="dropdown-divider"> </div>
                <Link className="dropdown-item" to="/login"
                >Login</Link>
                <Link className="dropdown-item" to="/register"
                >Register</Link>
                <div className="dropdown-divider"> </div>
                <a className="dropdown-item" href="#"
                    download>Account Logout</a>
                <a className="dropdown-item" href="#"
                    download>Account Deactivate</a>
            </div>
        </li>
    </ul>