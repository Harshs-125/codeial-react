import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import { fetchPosts } from '../Actions/post';
import { Home, Navbar, page404, Login,Signup } from './index';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
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
