import React from 'react'
import { Route,Routes } from 'react-router'
import Homepage from './Pages/Homepage'
import Createpage from './Pages/Createpage'
import Notedetailpage from './Pages/Notedetailpage'
import toast from 'react-hot-toast'

const App = () => {
  return (
    <div className = "relative h-full w-full">
     
      

    <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"/>
     <Routes>
      <Route path='/' element = {<Homepage/>} />
      <Route path='/createnote' element={<Createpage/>}/>
      <Route path='/note/:id' element= {<Notedetailpage/>}/>
    </Routes> 
    </div>
  )
}

export default App
