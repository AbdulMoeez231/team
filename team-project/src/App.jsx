import React, { useState } from 'react'
import './App.css'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Component/Home'
import CaterogryPage from './Array/CaterogryPage'
import Details from './Component/Details'

const App = () => {
let [idx,setIdx] = useState(0)

  let Clicked = (i) => {
    console.log(i);
    setIdx(i)
  }

  return (
    <>

    <BrowserRouter>
      <Routes>

      <Route path='/' element={<Home/>} />
      <Route path='/caterogry/:id' element={<CaterogryPage Clicked={Clicked}/>} />
      <Route path='/details/:id' element={<Details idx={idx} />} />

      </Routes>
    
    </BrowserRouter>
     
    </>
  )
}

export default App