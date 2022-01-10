import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom'

import './App.css';
import Dashboard from './components/auth/dashboard';
import Home from './components/auth/home';
import ProtectedRoute from './components/auth/protectedRouter/ProtectedRouter';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import { currentUser } from './JS/actions/userAction';
 
 
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentUser());
  }, [])
  return (
    <div className="App">
   <Routes>
  <Route exact path='/' element={<Home/>}/>
  <Route exact path='/signup' element={<Signup/>}/>
  <Route exact path='/login' element={<Signin/>}/>
  <Route exact path='/dashboard' element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
</Routes>
    </div>
  );
}

export default App;
