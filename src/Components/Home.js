import React, { Component } from 'react';
import {PostList,FriendList} from './';

import FriendListItem from './FriendListItem';
class Home extends Component {
    render() {
        const {posts,friends,isLoggedIn}=this.props;
        return (
            <div className="home">
                <PostList posts={posts}/>
                {isLoggedIn&&<FriendList friends={friends}/>}
            </div>
        );
    }
}

export default Home;