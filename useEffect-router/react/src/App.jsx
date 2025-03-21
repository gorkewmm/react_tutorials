import { useEffect, useState } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route, } from 'react-router-dom';
import Home from '../pages/Home';
import Detail from '../pages/Detail';

function App() {


  return (
      <div>
         <Router>
            <Routes>             
              <Route path='/' element={<Home/>} />
              <Route path='/detail/:id' element={<Detail/>} />
            </Routes>
         </Router>
      </div>
      
  )
}

export default App
