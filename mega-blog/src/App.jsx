import { useEffect, useState } from "react"
import {useDispatch} from 'react-redux'
import { login,logout } from "./features/authSlice";

function App() {

  const[loading,setLoading]=useState();
  const dispatch=useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login(userData))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=>{setLoading(false)})
  }, [])
  
  return !loading ?(
    <div>
      
    </div>
  ):null
}

export default App
