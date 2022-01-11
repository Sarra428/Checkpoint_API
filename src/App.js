
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Details from './Components/Details';
import Home from './Components/Home';
import UserList from './Components/UserList';
import Navbare from './Components/Navbar';

function App() {

    const [login,setlogin]=useState(false)


  return (
    <div className="App">
      <Navbare   login={login} setlogin={setlogin}  />


    <Routes>
      <Route  path='/'    element={<Home/>}    />
      <Route  path='/users'    element={<UserList  login={login}   />}         /> 
      <Route    path='/details/:id'      element={<Details    login={login}  /> }    />   
    </Routes>

    </div>
  );
}

export default App;
