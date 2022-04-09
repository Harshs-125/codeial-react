import React, { Component } from 'react';
import { connect } from 'react-redux';
import jwtDecode from 'jwt-decode';
import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import { fetchPosts } from '../Actions/post';
import { Home, Navbar, page404, Login, Signup } from './index';
import { authenticateUser} from '../Actions/auth';

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
    const { posts } = this.props;

    return (
      <Router>
        <div>
          <Navbar />

          {/* <PostList posts={posts} /> */}
          <Switch>
            <Route
              exact={true}
              path="/"
              render={() => {
                return <Home {...this.props} posts={posts} />;
              }}
            />
            <Route
              path="/login"
              render={() => {
                return <Login />;
              }}
            />
            <Route
              path="/signup"
              render={() => {
                return <Signup />;
              }}
            />
            <Route component={page404} />
          </Switch>
        </div>
      </Router>
    );
  }
}
function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

export default connect(mapStateToProps)(App);
