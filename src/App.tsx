import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Container } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home' 
import { Market } from './pages/Market' 
import { About } from './pages/About' 
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Container className='mb-2'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/market' element={<Market />} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </Container>
    </>
  )
}

export default App
