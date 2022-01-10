import { CURRENT_USER, FAILED_USER, LOADING_USER, LOGIN_USER, LOGOUT_USER, REGISTER_USER } from "../constants/userConst"
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

//register user

export const registerUser=(user,navigate)=>async dispatch=>{
    dispatch({type:LOADING_USER})
    try {
        const result=await axios.post('/user/register',user)
        dispatch({type:REGISTER_USER, payload: result.data})
        console.log(result)
        //role user
        navigate('/login')
    } catch (error) {
        dispatch({type:FAILED_USER, payload:error.result.data})
    }
}
//log in user
export const loginUser=(user,navigate)=>async dispatch=>{
    dispatch({type:LOADING_USER})
    try {
        const result=await axios.post('/user/login',user)
        dispatch({type:LOGIN_USER, payload:result.data})
        console.log(result)
        //role user
        navigate('/dashboard')
    } catch (error) {
        const {errors,msg}=error.result.data
        if(Array.isArray(errors)){errors.forEach(err=>toast.error(err.msg))}
        if (msg){toast.success(msg)}
        dispatch({type:FAILED_USER, payload:error.result.data})
    }
}
//current user
export const currentUser=()=>async dispatch=>{
    dispatch({type:LOADING_USER})
    const options={
        headers:{
            authorization:localStorage.getItem('token')
        }
    }
    try {
        let result= await axios.get('/user/current',options)
        dispatch({type:CURRENT_USER,payload:result.data.user})
    } catch (error) {
        dispatch({FAILED_USER, payload:error.result.data})
    }
}

export const logout=()=>{
    return {
        type:LOGOUT_USER
    }
}