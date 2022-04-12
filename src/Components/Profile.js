import React from 'react';
import { connect } from 'react-redux';
import { useParams, withRouter } from 'react-router-dom';
import { useLocation,useSearchParams } from 'react-router-dom';
import dp from './assets/user.png';
function Profile(props) {
  let {userid}=useParams();
  console.log(userid);
  return (
    <div className="settings">
      <div className="img-container">
        <img src={dp} alt="user-dp" id="user-dp" />
      </div>
      <div className="field">
        <div className="field-label">name</div>
      </div>
      <div className="field">
        <div className="field-label">email</div>
      </div>
      <div className="btn-grp">
        <button className="button save-btn">Add friend</button>
        <button className="button save-btn">Remove friend</button>
      </div>
    </div>
  );
}

export default Profile;
