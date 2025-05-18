
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavUsers from './Components/NavYser';
import Users from './Components/Users';
import Home from './Components/Home';
import Profil from './Components/Profil';
import { useState } from 'react';
import PrivateRoute from './Components/PrivateRoute.js';

function App() {

  const [auth, setAuth]= useState(false)
  return (
    <div >
      <NavUsers auth={auth}  setAuth={setAuth}/>
      <h1>Workshop API</h1>
      <Routes>
      <Route path='/Users' element={<PrivateRoute auth={auth}><Users/></PrivateRoute>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/Profil/:id' element={<PrivateRoute auth={auth}><Profil/></PrivateRoute>}/>
      </Routes>
    </div>
  );
}

export default App;
