import React, { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {login} from '../features/authSlice'
import {Button} from '../components/Button'
import {Logo} from '../components/Logo'
import {Input} from '../components/Input'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

const SignUp = () => {

    const navigate = useNavigate();
    const dispatch= useDispatch();
    const {register,handleSubmit} = useForm();
    const [error,setError] = useState("");

    const create = async(data) => {
        setError("");
        try {
            const session = await authService.createAccount(data)
            if(session){
                const userData= await authSevice.getCurrentUser()
                if(userData) dispatch(login(userData));
                navigate("/");    
            }
        } catch (error) {
            setError(error.message);
        }
    }

  return (
    <div>
      
    </div>
  )
}

export default SignUp
