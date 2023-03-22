// import React ,{useState}from 'react'

export default function About(props) {
    // const [btn,btnState]=useState("Enable Dark Mode")
    // const[myStyle , newStyle]=useState({
    //     color:"black",
    //     backgroundColor:"white"
    // })
    // const toggleStyle=()=>{
    //         if(myStyle.color === "black"){
    //             newStyle({
    //                 color:"White",
    //                 // backgroundColor:"black",
    //                 backgroundColor:"White",
                    
    //             })
    //             btnState("Enable Light Mode");
    //         }
    //         else{
    //             newStyle({
    //                 color:"black",
    //                 backgroundColor:"White"
    //             })
                
    //             btnState("Enable Dark Mode");
    //         }
    //     }
    let myStyle={
        color:props.mode ==='dark'?'white':'#042743',
        backgroundColor:props.mode ==='dark'?'rgb(36 74 104)':'white',
        // border:'2px solid',
        // borderColor:props.mode ==='dark'?'white':'#042743',
    }

  return (
            <div className="accordion" id="accordionExample" style={{color:props.mode ==='dark'?'white':'#042743'}}>
                <h1>About Us</h1>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
              <strong> Analyze Your Text</strong> 
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                Text Coverter gives You a way to analyze yor text quickley and efficiently
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
            <strong> Free To Use</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                Text Coverter is free open source tool that provides instant character count, change to upper case or converter to lower case.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
            <strong>Browser Compatibility</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
               The word counter software works on nearly every we browser like Chrome, Firefox, Safari, Opera and Internet explorer. It suits to count characters in facebook, blogs, excel documents etc.
            </div>
            </div>
        </div>
        {/* <div className="container my-3">
        <button type="button" className="btn btn-primary" onClick={toggleStyle}>{btn}</button>
        </div> */}
        </div>
  )
}
