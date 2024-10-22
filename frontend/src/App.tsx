import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from './components/Footer'
import { Home } from './components/Home'
import SignUp from './components/SignUp'
import Signout from "./components/SignOut"
import Profile from "./components/Profile"

 

const App = () => {

 
  return (
   
    <BrowserRouter>  
    <Routes>
       <Route path='/' element={   <Home />} />
       <Route path='/foo' element={   <Footer />} />
       <Route path='/signup' element={   <SignUp />} />
       <Route path='/signout' element={   <Signout />} />
        
    </Routes>
    </BrowserRouter>  
  )
}


export default App