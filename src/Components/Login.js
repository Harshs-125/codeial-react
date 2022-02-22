
import React, { Component } from 'react';

class Login extends Component {
    constructor(props)
    {
        super(props);
        this.emailinputref=React.createRef();
        this.passwordinputref=React.createRef();
    }
    handleFormSubmit=(e)=>{
        e.preventDefault();
        console.log(this.emailinputref);
        console.log(this.passwordinputref);
    }
  render() {
    return (
      <form className="login-form">
        <span className="login-signup-header">LoginIn</span>
        <div className="field">
          <input type="email" placeholder="Email" ref={this.emailinputref} required></input>
        </div>
        <div className="field">
          <input type="password" placeholder="Password" ref={this.passwordinputref} required />
        </div>
        <div className='field'>
            <button onClick={this.handleFormSubmit}>Login   </button>
        </div>
      </form>
    );
  }
}

export default Login;
