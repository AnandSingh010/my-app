// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import Forms from "./component/Forms";
import { useState } from "react";
// import About from "./component/About";

function App() {
  const toggleMode=()=>{
    if(mode ==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#032049'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
    }
  }
  const [mode, setMode]=useState('light') // whether dark mode is enabled or not 
  return <>
  
    <Navbar title="TextUtils" headerName="About Us" mode={mode} toggleMode={toggleMode}/>
    <div className="container my-3">
   <Forms heading="Enter your data to change" mode={mode} />
    </div>
    <div className="container my-3">
    {/* <About></About> */}
    </div>
   
  
  </>;
}

export default App;
