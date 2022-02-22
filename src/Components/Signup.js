import React from 'react';

function Signup(props) {
    return (
        <form className='login-form'>
            <span className='login-signup-header'>Signup</span>
            <div className='field'>
                <input type='text' placeholder="Enter Name" require/>
            </div>
            <div className='field'>
                <input type='email' placeholder="Enter Email" require/>
            </div>
            <div className='field'>
                <input type='password' placeholder="Enter Password" require/>
            </div>
            <div className='field'>
                <input type='password' placeholder="Enter Confirm Password" require/>
            </div>
            <div className='field'>
                <button>SignUp</button>
            </div>
        </form>
    );
}

export default Signup;