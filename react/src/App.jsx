import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Board from './pages/Board'


function App() {


  return (
    <>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='board' element={<Board />} />
        </Routes>    
      

    </>
  )
}

export default App
