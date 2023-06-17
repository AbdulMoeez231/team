import React from 'react'
import './App.css'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Component/Home'
import CaterogryPage from './Array/CaterogryPage'

const App = () => {
  return (
    <>

    <BrowserRouter>
      <Routes>

      <Route path='/' element={<Home/>} />
      <Route path='/caterogry/:id' element={<CaterogryPage/>} />

      </Routes>
    
    </BrowserRouter>
     
    </>
  )
}

export default App