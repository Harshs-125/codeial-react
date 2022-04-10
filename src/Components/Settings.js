import React, { useState } from 'react';
import { connect } from 'react-redux';
import user from './assets/user.png';

function Settings(props) {
  const { user } = props.auth;
  const [state, setState] = useState({
    name: '',
    password: '',
    confirmPassword: '',
    editMode: false,
  });
  function handleChange() {}
  return (
    <div className="settings">
      <div className="img-container">
        <img src={user} alt="user-dp" id="user-dp" />
      </div>
      <div className="field">
        <div className="field-label">Email</div>
        <div className="field-value">{user.email}</div>
      </div>
      <div className="field">
        <div className="field-label">Name</div>
        {state.editMode ? (
          <input type="text" onChange={handleChange} value={state.name} />
        ) : (
          <div className="field-value">{user.name}</div>
        )}
      </div>
      {state.editMode && (
        <div className="field">
          <div className="field-label">New Password</div>
          <input
            type="password"
            onChange={handleChange}
            value={state.password}
          />
        </div>
      )}
      {state.editMode && (
        <div className="field">
          <div className="field-label">New Confirm Password</div>
          <input
            type="password"
            onChange={handleChange}
            value={state.confirmPassword}
          />
        </div>
      )}
      <div className="btn-grp">
        {state.editMode ? (
          <button className="button save-btn">Save</button>
        ) : (
          <button className="button edit-btn">Edit Profile</button>
        )}
        {state.editMode && <div className="go-back">Go Back</div>}
      </div>
    </div>
  );
}
function mapStateToProps({ auth }) {
  return {
    auth,
  };
}
export default connect(mapStateToProps)(Settings);
