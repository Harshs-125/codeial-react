
import React, { Component } from 'react';

class Login extends Component {
    constructor(props)
    {
        super(props);
        //this is uncontrolled way
        // this.emailinputref=React.createRef();
        // this.passwordinputref=React.createRef();
        //this is controlled way
        this.state={
            email:'',
            password:''
        }
    }
    handleEmailChange=(e)=>{
        this.setState({
            email:e.target.value
        })
    }
    handlePasswordChange=(e)=>{
        this.setState({
            password:e.target.value
        })
    }
    handleFormSubmit=(e)=>{
        e.preventDefault();
       console.log(this.state);
    }
  render() {
    return (
      <form className="login-form">
        <span className="login-signup-header">LoginIn</span>
        <div className="field">
          <input type="email" onChange={this.handleEmailChange} placeholder="Email"  required></input>
        </div>
        <div className="field">
          <input type="password" onChange={this.handlePasswordChange} placeholder="Password"  required />
        </div>
        <div className='field'>
            <button onClick={this.handleFormSubmit}>Login   </button>
        </div>
      </form>
    );
  }
}

export default Login;
