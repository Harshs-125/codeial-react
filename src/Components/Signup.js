import React, { useState } from 'react';
import { signup, signupFailed } from '../Actions/signup';
import { connect } from 'react-redux';

function Signup(props) {
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    password: '',
    confirm_password: '',
  });
  function eventHandle(event) {
    const { name, value } = event.target;
    setUserDetails((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }
  function handleSubmit(event) {
    event.preventDefault();

    const { name, email, password, confirm_password } = userDetails;
    console.log(name + ' ' + email + ' ' + password + ' ' + confirm_password);
    if (name && email && password === confirm_password) {
      console.log('signup possible');
      props.dispatch(signup(name, email, password));
      return;
    } else {
      props.dispatch(signupFailed('password and cofirm password dont match'));
      return;
    }
  }
  console.log(props.signup);
  // const {error,inProgress} =props.signup;
  return (
    <form className="login-form">
      <span className="login-signup-header">Signup</span>
      {props.signup.error && (
        <div className="alert error-dialog">{props.signup.error}</div>
      )}
      <div className="field">
        <input
          type="text"
          onChange={eventHandle}
          name="name"
          value={userDetails.name}
          placeholder="Enter Name"
          require
        />
      </div>
      <div className="field">
        <input
          type="email"
          onChange={eventHandle}
          name="email"
          value={userDetails.email}
          placeholder="Enter Email"
          require
        />
      </div>
      <div className="field">
        <input
          type="password"
          onChange={eventHandle}
          name="password"
          value={userDetails.password}
          placeholder="Enter Password"
          require
        />
      </div>
      <div className="field">
        <input
          type="password"
          onChange={eventHandle}
          name="confirm_password"
          value={userDetails.confirm_password}
          placeholder="Enter Confirm Password"
          require
        />
      </div>
      <div className="field">
        {props.signup.inProgress ? (
          <button
            onClick={handleSubmit}
            disabled={props.signup.inProgress}
          >
            Signing in...{' '}
          </button>
        ) : (
          <button onClick={handleSubmit}>Sign in </button>
        )}
      </div>
    </form>
  );
}

function mapStateToProps(state) {
  console.log(state);
  return {
    signup: state.signup,
  };
}
export default connect(mapStateToProps)(Signup);
