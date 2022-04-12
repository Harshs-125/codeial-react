import { toHaveAccessibleDescription } from '@testing-library/jest-dom/dist/matchers';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import dp from './assets/user.png';
import { fetchUserProfile } from '../Actions/profile';

function Profile(props) {
  const params = useParams();
  console.log(params);
  useEffect(()=>{
    props.dispatch(fetchUserProfile(params.userid));
  },[])
  if(props.profile.inProgress)
  {
    return <h1>Loading...</h1>
  }
  return (
    
    <div className="settings">
      <div className="img-container">
        <img src={dp} alt="user-dp" id="user-dp" />
      </div>
      <div className="field">
        <div className="field-label">Name</div>
        <div className="field-value">{props.profile.user.name}</div>
      </div>
      <div className="field">
        <div className="field-label">Email</div>
        <div className="field=value">{props.profile.user.email}</div>
      </div>
      <div className="btn-grp">
        <button className="button save-btn">Add friend</button>
        <button className="button save-btn">Remove friend</button>
      </div>
    </div>
  );
}
function mapStateToProps({profile})
{
  return {
    profile
  }
}
export default connect(mapStateToProps)(Profile);