import {FETCH_FRIEND_LIST,UPDATE_FRIEND_LIST } from "../Actions/actionTypes";
const defaultProfileState=[];
export default function friends(state=defaultProfileState,action)
{
    switch(action.type)
    {
        case FETCH_FRIEND_LIST:{
        return [...action.friends];
        }
        case UPDATE_FRIEND_LIST:{
            return [...action.friends];
        }
        default:{
            return state
        }
    }
}