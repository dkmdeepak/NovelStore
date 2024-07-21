
// import './App.css'
import './bootstrap.min.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import { Routes,Route } from 'react-router-dom'
import Auth from './pages/Auth'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import Create from './Editing/Create'
import Edit from './Editing/Edit'
import View from './components/View'
import AllFiles from './Editing/AllFiles'
import Sidebar from './components/Sidebar'
import Select from './pages/Select'
import { useContext } from 'react'
import { TokenAuthContext } from './Context Api/AuthContext'
import Header1 from './components/Header1'
import Details from './Editing/Details'


function App() {
  const {authStatus,setAuthStatus}=useContext(TokenAuthContext)
  return (
    <>
    <div>
    {authStatus ? <Header /> : <Header1 />}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dash' element={authStatus?<Dashboard/>:<Home/>} />
        <Route path='/auth' element={<Auth/>} />
        <Route path='/edt' element={<Edit/>} />
        <Route path='/crt' element={<Create/>} />
        <Route path='/dtls' element={<Details/>} />
        <Route path='/all' element={authStatus?<AllFiles/>:<Home/>} />
        <Route path='/view' element={<View/>} />
        <Route path='/side' element={<Sidebar />} />
        <Route path='/select' element={<Select />} />
      </Routes>
    <Footer/>  
    <ToastContainer />
    </div>
    </>
  )
}

export default App
