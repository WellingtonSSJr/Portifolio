import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'


function App() {

  return (
    <BrowserRouter>
     <Routes>
      <Route path='/Portifolio/' element={<Home/>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App
