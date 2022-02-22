import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import { fetchPosts } from '../Actions/post';
import { PostList, Navbar } from './index';

const Home = () => {
  return <div>Home</div>;
};
const Login = () => {
  return <div>Login</div>;
};
const Signup = () => {
  return <div>Signup</div>;
};
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
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
            <Route exact={true} path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component ={Signup} />
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
