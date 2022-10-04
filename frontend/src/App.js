
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './components/HomePage/HomePage';
import Loader from './components/loader/Loader'

import React,{useState} from 'react'
import AboutUs from './components/About Us/AboutUs';
import Contact from './components/Contact Us/Contact';
import Login from './components/Login/Login';
import Projects from './components/Projects/Projects';
import Header from './components/HomePage/Header';
import Footer from './components/HomePage/Footer';
function App() {

  const [loader, setloader] = useState(false);
  return (
    <>
    <Router>
    <Header/>
      
      <Routes>
        <Route path ='/' element={<HomePage setloader={setloader}/>}/>
        <Route path ='/About' element={<AboutUs/>}/>
        <Route path ='/Contact' element={<Contact/>}/>
        <Route path ='/login' element={<Login/>}/>
        <Route path ='/Projects' element={<Projects/>}/>

      </Routes>
      {/* <Loader  loader={loader}/> */}
      <Footer/>
    </Router>
    </>
  );
}

export default App;
