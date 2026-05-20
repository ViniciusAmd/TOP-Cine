import Header from './components/Header'
import { Routes,  Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Favoritos from './pages/Favoritos'

function App() {
  return (
    <div className='app'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/favoritos' element={<Favoritos></Favoritos>}></Route>
      </Routes>
    </div>
  )
}


export default App