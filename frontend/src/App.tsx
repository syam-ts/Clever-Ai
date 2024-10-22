import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from './components/Footer'
import { Home } from './components/Home'
import Login from './components/Login'
import Signout from "./components/SignOut"
import Profile from "./components/Profile"
import { Provider } from 'react-redux'
import store from './Redux/store'
 

const App = () => {

 
  return (
    <Provider store={store}> 
   
    <BrowserRouter>  
    <Routes>
       <Route path='/' element={   <Home />} />
       <Route path='/foo' element={   <Footer />} />
       <Route path='/login' element={   <Login />} />
       <Route path='/signout' element={   <Signout />} />
        
    </Routes>
    </BrowserRouter>  
    </Provider>
  )
}


export default App