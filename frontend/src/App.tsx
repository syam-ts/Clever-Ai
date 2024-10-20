import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from './components/Footer'
import {BackgroundLines} from './components/Home'
import SignUp from './components/SignUp'
import { TextHoverEffect } from './components/Logo'
import Signout from "./components/SignOut"

 

const App = () => {

 
  return (
   
    <BrowserRouter>  
    <Routes>
       <Route path='/' element={   <BackgroundLines />} />
       <Route path='/foo' element={   <Footer />} />
       <Route path='/signup' element={   <SignUp />} />
       <Route path='/signout' element={   <Signout />} />
        
    </Routes>
 
      {/* <Routes>
        <Route path="/ok" element={<BackgroundLines />} /> 
        <Route path="/login" element={<Login />} />  
      </Routes> */}
    </BrowserRouter>  
  )
}


export default App