import { Outlet, useNavigation } from 'react-router-dom'
import './App.css'
import NavBar from './LayOut/ShareComponents/NavBar/NavBar'
import Footer from './LayOut/ShareComponents/Footer/Footer'
import Loading from './Components/Loading/Loading'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'

// ===================================================
   


// ===================================================
function App() {
    const navigation = useNavigation()
  return (
    <>
      <div>
          <NavBar />
          <div> {navigation.state === "loading" ? <Loading /> : <Outlet/> }</div>
          <ToastContainer/>
          <Footer/>
{/* ========================================================== */}
      {/* <h1 className='text-3xl'>App</h1> */}
    

{/* ========================================================== */}

          
      </div>
    </>
  )
}

export default App
