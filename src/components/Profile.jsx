import React from 'react'
import Userconetxt from './Userconetxt'
import { useContext } from 'react'
const Profile = () => {
    const user=useContext(Userconetxt)
  return (
    <>
    <h1>profile name is {user}</h1>
    </>
  )
}

export default Profile