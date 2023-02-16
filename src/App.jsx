
import { BrowserRouter } from 'react-router-dom'
import Companies from './components/Companies'
import Courses from './components/Courses'
import HerSection from './components/HerSection'
import Navbar from './components/Navbar'

function App() {
 
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <HerSection/>
    <Companies/>
    <Courses/>
    
    </BrowserRouter>
    
   
    </>
  
      
  )
}

export default App
