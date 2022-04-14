import React, { useEffect ,useState} from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import dp from './assets/user.png';
import { fetchUserProfile } from '../Actions/profile';
import {addFriend,removeFriend} from '../Actions/friends';


function Profile(props) {
  const params = useParams();
  const [friendState,setFriendState]=useState({
    success:null,
    error:null,
    successMessage:null
  })
  useEffect(()=>{
    props.dispatch(fetchUserProfile(params.userid));
  },[params.userid])
  let userid=params.userid;
  let index=props.friends.map((friend)=>friend.to._id).indexOf(userid);
  let isUserAFriend=false;
  if(index!==-1)
  {
    isUserAFriend=true;
  }
  async function handleAddFriendClick(e)
  {e.preventDefault();
    const url=`http://localhost:8000/api/v1/friends/add/${params.userid}`;
    const options={
      method: 'post',
      headers: {
        Mode: 'no-cors',
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization:localStorage.getItem('token')
      },
    }
    const response=await fetch(url,options);
    const data=await response.json();
    if(data.success)
    {
      setFriendState({
        success:true,
        successMessage:"Added friend successfully"
      })
      props.dispatch(addFriend(data.data.friendship));
      return ;
    }
    else{
      setFriendState({
        success:null,
        error:data.message
      })
      return ;
    }
  }
  async function handleRemoveFriendClick(e)
  {e.preventDefault();
    const url=`http://localhost:8000/api/v1/friends/remove/${params.userid}`;
    const options={
      method: 'post',
      headers: {
        Mode: 'no-cors',
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization:localStorage.getItem('token')
      },
    }
    const response=await fetch(url,options);
    const data=response.json();
    if(data.success)
    {
      setFriendState({
        success:true,
        successMessage:"Removed friends Successfully"
      });
      props.dispatch(removeFriend(userid));
      return ;
    }
    else
    {
      setFriendState({
        success:null,
        error:data.message
      })
      return ;
    }
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
        {!isUserAFriend ?(
          <button className='button save-btn' onClick={handleAddFriendClick}>Add Friend</button>
        ):(<button className='button save-btn'
        onClick={handleRemoveFriendClick}>RemoveFriend</button>)}
      </div>
      {friendState.success && <div className='alert success-dialog'>{friendState.successMessage}</div>}
      {friendState.error && <div className='alert error-dialog'>{friendState.error}</div>}
    </div>
  );
}
function mapStateToProps(state)
{
  return {
    profile:state.profile,
    friends:state.friends
  }
}
export default connect(mapStateToProps)(Profile);