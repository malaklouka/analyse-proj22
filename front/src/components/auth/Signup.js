import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { registerUser } from '../../JS/actions/userAction'

const Signup = () => {
    const [name,setName]= useState("")
    const [surname,setSurname]= useState("")
const [sexe,setSexe]=useState('')
const [tel,setTel]=useState('')
const [budget,setBudget]=useState('')
const [image,setImage]=useState('')
const [adresse,setAdresse]=useState('')
const [etat,setEtat]=useState('')
const [age,setAge]=useState('')

    const [email,setEmail]= useState("")
    const [password,setPassword]= useState("")
    const dispatch = useDispatch()
    const navigate=useNavigate()
    return (
        
 <div className="login-form">
          <div className="sign-in-htm">
            <div className="group">
              <label htmlFor="user" className="label" style={{color:"black"}}>Name</label>
              <input id="user" type="text" className="input"
               onChange={(e)=>setName(e.target.value)} />
            </div>
            <div className="group">
              <label htmlFor="user" className="label" style={{color:"black"}}>SURName</label>
              <input id="user" type="text" className="input"
               onChange={(e)=>setSurname(e.target.value)} />
            </div>
            
            <div className="group">
              <label htmlFor="pass" className="label"style={{color:"black"}}>Email Address</label>
              <input id="pass" type="text" className="input" 
              onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div className="group">
              <label htmlFor="pass" className="label"style={{color:"black"}}>Password</label>
              <input id="pass" type="password" className="input" data-type="password"
               onChange={(e)=>setPassword(e.target.value)}  />
            </div>
            <div className="group">
              <label htmlFor="pass" className="label"style={{color:"black"}}>Sexe</label>
              <input id="pass" type="text" className="input" data-type="password"
               onChange={(e)=>setSexe(e.target.value)}  />
            </div>
            <div className="group">
              <label htmlFor="pass" className="label"style={{color:"black"}}>budget</label>
              <input id="pass" type="password" className="input" data-type="password"
               onChange={(e)=>setBudget(e.target.value)}  />
            </div>
            <div className="group">
              <label htmlFor="pass" className="label"style={{color:"black"}}>image</label>
              <input id="pass" type="password" className="input" data-type="password"
               onChange={(e)=>setImage(e.target.value)}  />
            </div>
            <div className="group">
              <label htmlFor="pass" className="label"style={{color:"black"}}>tel</label>
              <input id="pass" type="password" className="input" data-type="password"
               onChange={(e)=>setTel(e.target.value)}  />
            </div>
            <div className="group">
              <label htmlFor="pass" className="label"style={{color:"black"}}>Adresse</label>
              <input id="pass" type="password" className="input" data-type="password"
               onChange={(e)=>setAdresse(e.target.value)}  />
            </div>
            <div className="group">
              <label htmlFor="pass" className="label"style={{color:"black"}}>etat</label>
              <input id="pass" type="password" className="input" data-type="password"
               onChange={(e)=>setEtat(e.target.value)}  />
            </div>
            <div className="group">
              <label htmlFor="pass" className="label"style={{color:"black"}}>age</label>
              <input id="pass" type="password" className="input" data-type="password"
               onChange={(e)=>setAge(e.target.value)}  />
            </div>
          
         

            <div className="group">
              <input type="submit" className="button" defaultValue="Sign In"
               onClick={()=>dispatch(registerUser({name,surname,email,password,sexe,tel,image,age,etat,budget,adresse},navigate))}/>
            </div>
            <div className="hr" />
            <div className="foot-lnk">
          {/**  <Switch>
             <Route exact path="/" >
               <button>
                 <Link to="/login">Login</Link>
             </button>
             </Route>
              <Route path="/login" component={Signin} />   
          </Switch> */ }       
            </div>
          </div>        </div>
    )
}

export default Signup
