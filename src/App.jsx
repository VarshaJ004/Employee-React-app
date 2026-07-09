import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

import AddEmployee from './components/AddEmployee'
import SearchEmployee from './components/SearchEmployee'
import Navigation from './components/Navigation'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DeleteEmployee from './components/DeleteEmployee'
import ViewEmployee from './components/ViewEmployee'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddEmployee/>} />
      <Route path='/Search' element={<SearchEmployee/>} />
      <Route path='/Delete' element={<DeleteEmployee/>} />
      <Route path='/View' element={<ViewEmployee />} />

    </Routes>

    </BrowserRouter>

    
      
    </>
  )
}

export default App
