import React from "react";
import { useState } from "react";
export default function Forms(props) {
    const[text , setText] = useState("enter text here");
    // text="qjqjqjqj"  wrong way to change state
    // setText("new set text")  //right way to chage the state
    const handleUpClick=()=>{
        // console.log("uper case was clicked"+text)
        let newtext=text.toUpperCase()
        // setText("this value is changed by on change handler")
        setText(newtext)
        props.showAlert("Converted to upper case","Success")
    }
    const captalize=()=>{
      // return str.charAt(0).toUpperCase() + str.slice(1);
      let newText = text.split(" ").map(el=>el.charAt(0).toUpperCase()+ el.slice(1)).join(" ")
     setText(newText);
     props.showAlert("String has been captalize","Success")

    }
    const handleLoClick=()=>{
        // console.log("uper case was clicked"+text)
        let newtext=text.toLowerCase()
        // setText("this value is changed by on change handler")
        setText(newtext)
        props.showAlert("Converted to lower case","Success")
    }
    const handleOnChange=(event)=>{
        // console.log("uper case was on change")
        setText(event.target.value)
    }
  return (
      <>
      <div className="container" ></div>
    <div className="mb-3" style={{color:props.mode ==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <textarea className="form-control border-success border-1" id="mybox" value={text} onChange={handleOnChange} rows="8" style={{backgroundColor:props.mode ==='dark'?'#042743':'white',color:props.mode ==='dark'?'white':'black'}}></textarea>
      <button disabled={text.length === 0} className="btn btn-primary mx-1 my-3" onClick={handleUpClick}>Convert To UpperCase</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-1 my-3" onClick={handleLoClick}>Convert To LowerCase</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-1 my-3" onClick={captalize}>Captalize Case</button>
    </div>
    <div className="container my-3" style={{color:props.mode ==='dark'?'white':'black'}}>
    <h1>Your Text Summary</h1>
    <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p>{0.008* text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read the words</p>
    <h2>Preview</h2>
    <p>{text.length>0 ? text:"Nothing To Preview !"}</p>
    </div>
      </>
  );
}
