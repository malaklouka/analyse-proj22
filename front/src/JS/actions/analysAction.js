import axios from "axios"
import { ANALYSE_ADDED, ANALYSE_FAILED, ANALYSE_LOADING, DELETE_ANFAIL, DELETE_ANSUCCESS, GET_ANALYS, GET_FAILED_ANALYS } from "../constants/AnalysConst"



//add analyse
export const addAnalys=(formData)=>async dispatch=>{
    try {
        const config={
            headers:{
                authorization:localStorage.getItem("token")
            }
        }
        const result=await axios.post('/an/postAn',formData,config)
        dispatch({type:ANALYSE_ADDED, payload: result.data})
        console.log(result)
    } catch (error) {
        dispatch({type:ANALYSE_FAILED, payload:error.result.data})
    }
}

//get all analyse
export const getAnalys=()=>async(dispatch)=>{
    dispatch({type:ANALYSE_LOADING})
    try {
        const response=await axios.get('/an/analys')
        dispatch({type:GET_ANALYS,payload:response.data})
    } catch (error) {
        console.dir(error)
        dispatch({type:GET_FAILED_ANALYS,payload:error})
        
    }
}

//get searched analyse by categ
export const getSearchedAnalys=({category})=>async(dispatch)=>{
    try {
        const response=await axios.get(`/an/getAn/${category}`)
        dispatch({type:GET_ANALYS, payload:response.data})
    } catch (error) {
        console.dir(error)
        dispatch({type:GET_FAILED_ANALYS, payload:error})
        
    }
}

//update analyse
export const editAnalys=(id,analyse,navigate)=>async(dispatch)=>{
    try {
        const res= await axios.put(`/an/updateAn/${id}`,analyse)
dispatch(getAnalys())
navigate("/analyse")
    } catch (error) {
        console.dir(error)
        dispatch({type:GET_FAILED_ANALYS})
    }
}

//delete analyse
export const deleteAnalys=(id)=>async (dispatch)=>{
try {
    const response= await axios.delete(`/an/delete/${id}`)
    dispatch({type:DELETE_ANSUCCESS,payload:id})
    dispatch(getAnalys())
} catch (error) {
    console.dir(error)
    dispatch({type:DELETE_ANFAIL})
    
}
}