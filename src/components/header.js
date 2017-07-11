import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Header extends Component {

  authButton() {
    let authInfo;
    this.props.authenticated
    ? authInfo = {
      message: 'Sign out',
      authentication: true,
    }
    : authInfo = {
      message: 'Sign In',
      authentication: false,
    }
    return <button onClick={() => this.props.authenticate(!authInfo.authentication)}>{authInfo.message}</button>
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            <li className="nav-item">
              <Link to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/resources">
                Resource
              </Link>
            </li>
            <li className="nav-item">
                {this.authButton()}
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = ({authenticated}) => ({authenticated});

export default connect(mapStateToProps, actions)(Header);
