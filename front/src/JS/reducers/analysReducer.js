import { ANALYSE_ADDED, ANALYSE_FAILED, ANALYSE_LOADING, DELETE_ANFAIL, DELETE_ANSUCCESS, GET_ANALYS, GET_FAILED_ANALYS } from "../constants/AnalysConst"

const initialState={
    analyse:null,
   
    loading:false,
    errors:null,
    isAuth:false,
}
export const analysReducer=(state=initialState,{type,payload})=>{
switch (type) {
    case ANALYSE_ADDED:
        localStorage.setItem("token",payload.token)
        return {...state,loading:false,analyse:payload.analyse,isAuth:true}
  
        case ANALYSE_FAILED:
            return {...state,loading:false,errors:payload}
    case GET_ANALYS:
            
            return {...state,loading:false,analyse:payload.analyse}

    case ANALYSE_LOADING:
                return {...state,loading:true}
  
    case GET_FAILED_ANALYS:
                    return {...state,loading:false, isAuth:true,errors:payload}
  
    
    case DELETE_ANSUCCESS:
          return {...state,loading:false,analyse:payload}

    case DELETE_ANFAIL:
        return {  loading:false,
            errors:payload}       

          
                 

    default:
        return state
}
}