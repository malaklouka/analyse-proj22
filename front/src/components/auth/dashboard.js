import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { logout } from '../../JS/actions/userAction';

const Dashboard = () => {
    const dispatch = useDispatch();
    const navigate=useNavigate();
 const user = useSelector(state => state.userReducer.user)
 const loading=useSelector(state=>state.userReducer.loadUser)

    return (
        <div>
         {loading? <h1>wait please</h1>: <div><h1>
            {`hello ${user.name}`}</h1></div>}  
            <button onClick={()=>dispatch(logout(),navigate("/"))}>logout</button>
        </div>
    )
}

export default Dashboard
