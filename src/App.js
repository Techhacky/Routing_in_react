import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';


function App() {
  return (
   <div>
    <Router>
    <Navbar/>
    <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/contact' element={<Contact/>}/>

    </Routes>
    </Router>
    
   </div>
  );
}

export default App;
