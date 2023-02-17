
import { BrowserRouter } from 'react-router-dom'
import Companies from './components/Companies'
import Courses from './components/Courses'
import HerSection from './components/HerSection'
import Navbar from './components/Navbar'
import  './App.css'
import Acheivement from './components/Acheivement'

function App() {
 
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <HerSection/>
    <Companies/>
    <Courses/>
    <Acheivement/>
    
    </BrowserRouter>
    
   
    </>
  
      
  )
}

export default App
