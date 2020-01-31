import React from 'react';
import './App.css';
import Home from './pages/Home'
import Error from './pages/Error'
import SingleRoom from './pages/SingleRoom'
import Rooms from './pages/Rooms'

function App() {
  return (
    <>
    <Home/>
    <Rooms/>
    <SingleRoom/>
    <Error/>
    </>
  );
}

export default App;
