import React, {useState} from 'react'




export default function TextForm(props) {
    const handleUpClick = () =>{
        console.log("Uppercase was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
        document.getElementById("myBox").style.backgroundColor = "white"
        document.getElementById("myBox").style.color = "black"
        document.getElementById("myBox").style.border = "2px solid black"
        
        
    }
    const handleLpClick = () =>{
        console.log("Lowercase was clicked" + text)
        let newText = text.toLowerCase();
        setText(newText)
        document.getElementById("myBox").style.backgroundColor = "black"
        document.getElementById("myBox").style.color = "white"
        document.getElementById("myBox").style.border = "2px solid red"
    }
    const handleClearClick = () => {
        let newText = '';
        setText(newText)
        document.getElementById("dark").style.backgroundColor = "white"
        document.getElementById("dark").style.color = "black"
    }
    const handleDarkClick = () => {
        document.getElementById("dark").style.backgroundColor = "black"
        document.getElementById("dark").style.color = "white"
        document.getElementById("myBox").style.border = "2px solid red"

    }
    const handleonChange = (event) =>{
        console.log("On Change")
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    // text = "new text"// wrong way to change the state
    // setText = "new text"// correct way to change the state
  return (
    <>
    <div className='container' id='dark' style={{color:props.mode=== 'dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
<div className="mb-3 my-3">
{/* <label for="myBox" class="form-label">Example textarea</label> */}
<textarea className="form-control" value={text} onChange={handleonChange} style={{backgroundColor:props.mode=== 'dark'?'gray':'white'}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-4 my-3" onClick={handleLpClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-4" onClick={handleClearClick}>Clear Text</button>
<button className="btn btn-primary mx-4" onClick={handleDarkClick}>Dark</button>
</div>
<div className="container my-2" style={{color:props.mode=== 'dark'?'white':'black'}}>
    <h1>Your text summary</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length } Minutes read</p>
    <h2>Preview</h2>
    <p>{text}</p>
</div>
</>
)
}
