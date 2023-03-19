// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import Forms from "./component/Forms";
import { useState } from "react";
import Alert from "./component/Alert";
import About from "./component/About";
// import { Route } from "react-router-dom";
// import { Router } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";

import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom"


function App() {

  
  const [alert, setAlert]= useState(null);
const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type: type
  })
  setTimeout(()=>{
    setAlert(null)
  },1500)
}








  const toggleMode=()=>{
    if(mode ==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#032049'
      showAlert("Dark mode has been enabled", "Success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled", "Success")
    }
  }
  const [mode, setMode]=useState('light') // whether dark mode is enabled or not 
  return (
  <>
  <BrowserRouter>

    <Navbar title="TextUtils" headerName="About Us" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">

    <Routes>
        <Route path="/about" element={< About/>} />
          
          <Route path="/"
          element={<Forms showAlert={showAlert} heading="Enter your data to change" mode={mode} />}/>
          
    </Routes>
    </div>
   
    </BrowserRouter>
    {/* <div className="container my-3"> */}
    {/* <About/>
    </div> */}
   </>
  
 ); 
}


export default App;
