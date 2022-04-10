import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../Actions/auth';
import user from './assets/user.png';
function Navbar(props) {
  function handleLogout() {
    localStorage.removeItem('token');
    props.dispatch(logoutUser());
  }
  return (
    <nav className="nav">
      <div className="left-nav">
        <Link to="/">
          <img
            src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png"
            alt="logo"
          />
        </Link>
      </div>
      <div className="search-container">
        <img
          className="search-icon "
          src="https://cdn-icons.flaticon.com/png/512/2801/premium/2801881.png?token=exp=1645538071~hmac=ebc8094db75dcbcaebddc7b9cb698216"
          alt="search-icn"
        />
        <input placeholder="Search" />
      </div>
      <div className="right-nav">
        {props.auth.isLoggedIn && (
          <Link to="/settings">
            <div className="user">
              <img src={user} alt="user-dp" id="user-dp" />
              <span>{props.auth.user.name}</span>
            </div>
          </Link>
        )}
        <div className="nav-links">
          <ul>
            {!props.auth.isLoggedIn && (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
            {!props.auth.isLoggedIn && (
              <li>
                <Link to="/signup">Signup</Link>
              </li>
            )}
            {props.auth.isLoggedIn && (
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}
export default connect(mapStateToProps)(Navbar);
