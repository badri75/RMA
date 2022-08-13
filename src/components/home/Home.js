import React from 'react'
import {useNavigate, useLocation} from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  const location = useLocation()
  return (
    <>
      <div>Email: {location.state.email}</div>
      <div>Password: {location.state.pwd}</div>
      <p onClick={()=>{navigate('/')}}>
        <span>Back to Login</span>
      </p> 
    </>
  )
}

export default Home
