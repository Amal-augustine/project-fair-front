
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Project from './pages/Project'
import Home from './pages/Home'
import Auth from './pages/Auth'


function App() {
  

  return (
    <>
     

     <Routes>
      <Route path='/'  element={<Home/>}/>
      <Route path='/login'  element={<Auth/>}/>
      <Route path='/register'  element={<Auth insideRegister={true}/>}/>
      <Route path='/dashboard'  element={<Dashboard/>}/>
      <Route path='/project'  element={<Project/>}/>

     </Routes>

    </>
  )
}

export default App
