import React, { Component } from 'react';
import { connect } from 'react-redux';
import jwtDecode from 'jwt-decode';
import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route,
  Navigate,
  useNavigate,
  Outlet,
} from 'react-router-dom';
import { fetchPosts } from '../Actions/post';
import {
  Home,
  Navbar,
  Page404,
  Login,
  Signup,
  Settings,
  Profile,
} from './index';
import { authenticateUser } from '../Actions/auth';

function PrivateRoute({isLoggedin ,children}){
  return isLoggedin?(
    children
  ):(
    <Navigate to="/login"/>
  );
};
class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
    const token = localStorage.getItem('token');
    if (token) {
      const user = jwtDecode(token);
      this.props.dispatch(
        authenticateUser({
          email: user.email,
          _id: user._id,
          name: user.name,
        })
      );
    }
  }

  render() {
    const { posts, auth } = this.props;

    return (
      <Router>
        <div>
          <Navbar />
          <Routes>
            {/* <PostList posts={posts} /> */}
            <Route
              exact={true}
              path="/"
              element={<Home {...this.props} posts={posts} />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/settings" element={<PrivateRoute isLoggedin={auth.isLoggedIn}>
              <Settings />
            </PrivateRoute>} />
            <Route path="/profile/:userid" element={<PrivateRoute isLoggedin={auth.isLoggedIn}>
              <Profile />
            </PrivateRoute>} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
function mapStateToProps(state) {
  return {
    posts: state.posts,
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(App);
