import React from 'react'

const Login = ({token}) => {
  return (
    <div>
      <h1 className='big-text black-text bold-text'>Login</h1>
      <button onClick={() => token('sda')}>Valider</button>


    </div>
  )
}

export default Login