import Home from './views/Home';
import Navbar from './Componentes/Navbar';
import Profile from './views/Profile';
import './App.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import injectContext  from './store/context';


function App() {
 


 return <>
 
  
    <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route  path='/profile/:id' element={< Profile/>} /> 
        <Route path='/' element={ < Home /> } />
      </Routes>

    </BrowserRouter>
   
   

  
  
  </>
 
}

export default injectContext(App)