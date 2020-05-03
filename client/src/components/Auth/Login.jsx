import React, { useState, useEffect } from 'react'
import { GoogleLogin } from "react-google-login";

const Login = props => {


  //props.history.push('/') this redirects 

  // useEffect(() => {
  //   props.history.push('/')
  //   //eslint-disable-next-line
  // }, [props.history])
  console.log(props);



  // const [user, setUser] = useState({ email: '', password: '' });
  // const { email, password } = user;


  const onChange = (event) => {
    console.log(`the value is changing for ${event} I typed ${event.target.value}`);
    //setUser()
    console.log(event.target.name);

  }
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(`i am clicked ${event}`);

  }

  return (
    <div className='login-container'>
    <div className='form-container'>
      <h1>Account <span className='text-primary'>Login</span></h1>
      <form onSubmit={onSubmit}>

        <div className='form-group'>
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" onChange={onChange} />
        </div>

        <div className='form-group'>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" onChange={onChange} />
        </div>
        <input
          type='submit'
          value='Login'
          className='btn btn-primary btn-block'
        />
      </form>
    </div>

    <h3> OR </h3> <br />
    <GoogleLogin
        // onSuccess={onSuccess}
        // onFailure={onFailure}
        // isSignedIn={true}
        buttonText={"Login with Google"}
        theme="dark"/>
    </div>
  )
}


export default Login;