
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './components/HomePage/HomePage';
import Loader from './components/loader/Loader'

import React,{useState} from 'react'
function App() {

  const [loader, setloader] = useState(false);
  return (
    <>
    <Router>
      <Loader  loader={loader}/>
      <Routes>
        <Route path ='/' element={<HomePage setloader={setloader}/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
