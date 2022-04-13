import { UPDATE_FRIEND_LIST } from "./actionTypes";

export function fetchFriendList(userid)
{ 
        return (dispatch)=>{
            const url=`http://localhost:8000/api/v1/friends/getfriends`;
            fetch(url,{
                method:"get",
                headers: {
                    Mode: 'no-cors',
                    Accept: 'application/json',
                    Authorization:localStorage.getItem('token')
                  }
            })
            .then((response)=>response.json())
            .then((data)=>{
                dispatch(updateFriendList(data.data.friends));
            })
            
        }
}
export function updateFriendList(friends)
{
    return {
        type:UPDATE_FRIEND_LIST,
        friends
    }
}