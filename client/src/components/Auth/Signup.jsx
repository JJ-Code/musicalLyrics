import React from 'react'
import { GoogleLogin } from "react-google-login";



const Signup = props => {

  const onChange = (event) => {
    console.log(event);

  }
  const onSubmit = event => {
    event.preventDefault();
    console.log("I am clicked");

    console.log(event)
  };


  return (
    <div className='login-container'>
      <div className='form-container'>
        <h1>Account <span className='text-primary'>Register</span></h1>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" onChange={onChange} required />
          </div>

          <div className='form-group'>
            <label htmlFor="email">Email Address</label>
            <input type="email" name="email" onChange={onChange} required />
          </div>

          <div className='form-group'>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" onChange={onChange} required
              minLength='6' />
          </div>

          <div className='form-group'>
            <label htmlFor="password2">Confirm Password</label>
            <input type="password" name="password2" onChange={onChange} required
              minLength='6' />

            {/* remember to add value={password2} back in  */}
          </div>

          <input
            type='submit'
            value='Signup for Musical Lyrics'
            className='btn btn-primary btn-block'
          />
        </form>
      </div>
      <h3> OR </h3> <br />
      <GoogleLogin
        // onSuccess={onSuccess}
        // onFailure={onFailure}
        // isSignedIn={true}
        buttonText={"Signup with Google"}
        theme="dark" />
    </div>
  )
}


export default Signup;