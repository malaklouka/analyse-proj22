import { CURRENT_USER, FAILED_USER, LOADING_USER, LOGIN_USER, LOGOUT_USER, REGISTER_USER } from "../constants/userConst"

const initialState={
    user:null,
   
    loadUser:false,
    errors:null,
    isAuth:false,
}
export const userReducer=(state=initialState,{type,payload})=>{
switch (type) {
    case REGISTER_USER:
        localStorage.setItem("token",payload.token)
        return {...state,loadUser:false,user:payload.user,isAuth:true}
  
    case LOGIN_USER:
            localStorage.setItem("token",payload.token)
            return {...state,loadUser:false,user:payload.user,isAuth:true}

    case LOADING_USER:
                return {...state,loadUser:true}
  
    case CURRENT_USER:
                    return {...state,loadUser:false, isAuth:true,user:payload}
  
    
    case FAILED_USER:
          return {...state,loadUser:false,errors:payload}

    case LOGOUT_USER:
        localStorage.removeItem("token")
        return {  user:null,
            loadUser:false,
            errors:null,
            isAuth:false}       

          
                 

    default:
        return state
}
}