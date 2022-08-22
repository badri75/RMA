import React, {useRef, useEffect} from 'react'
import {useNavigate, useLocation} from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  const location = useLocation()

  const mailValid = useRef(null)

  useEffect(()=>{
    
  },[])

  return (
    <>
      <div ref={mailValid}>Email: </div>
      <div>Password: {location.state.pwd}</div>
      <p onClick={()=>{navigate('/')}}>
        <span>Back to Login</span>
      </p> 
    </>
  )
}

export default Home
