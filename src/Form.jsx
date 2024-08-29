import React from 'react'

export default function Form() {
  return (
    <div className='main'>
      <p className='sign' align='center'>
        Sign In
      </p>
      <form className='form1'>
        <input type="text" className='username' placeholder='Username' />
        <input type="password" className='password' placeholder='Password' />
        <a className='submit' align='center'>
          Sign in
        </a>
        <p className='forgot' align='center'>
          <a href="">Forgot Password</a>
        </p>
      </form>
    </div>
  )
}
