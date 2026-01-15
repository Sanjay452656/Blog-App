import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../features/authSlice';
// import authService

const Logout = () => {

    const dispatch=useDispatch();

    const handelLogout=()=>{
        // authService.logout().then(()=>{
        //     dispatch(logout());
        // })
    }

  return (
    <div className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>
      LogOut Button
    </div>
  )
}

export default Logout
