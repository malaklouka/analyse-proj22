import React from 'react'
import { useNavigate } from 'react-router-dom';



const Home = () => {
    const navigate = useNavigate(); 
  



    return (
        <div>
            <h1>hey there</h1>
            <button onClick={()=>navigate('/login')}> LOG IN</button>
            <button onClick={()=>navigate('/SIGNUP')}> SIGN UP</button>


            </div>
    )
}

export default Home
