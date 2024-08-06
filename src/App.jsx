import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Male from './pages/Male'
import Female from './pages/Female'
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <>
 <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/male' element={<Male/>}/>
        <Route path='/female' element={<Female/>}/>
  
      </Routes>
 </BrowserRouter>
    </>
  )
}

export default App