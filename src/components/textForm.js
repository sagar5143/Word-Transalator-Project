import React, { useState } from 'react'

export default function TextForm(props) {
  const handleupclick = () =>{
    console.log("Uppercase was clicked" )
    let newText = text.toUpperCase()
    settext(newText)
  }
  const handleloclick = () =>{
    console.log("Lowercase was clicked" )
    let newText = text.toLowerCase()
    settext(newText)
  }
  const handleClearclick = () =>{
    console.log("Clear was clicked" )
    let newText = ('')
    settext(newText)
  }
  const handleCaclick = () =>{
    console.log("Capitalize was clicked")
    let newText = text.charAt(0).toUpperCase() + text.slice(1)
    settext(newText)
  }
  const handleOnChange = (event) =>{
    console.log("Onchange")
    settext(event.target.value)
  }
  
  const [text,settext] = useState("Enter text here" )
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
        <div>
         <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleupclick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleloclick}>Convert to lowercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCaclick}>Capitalize Case</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleClearclick}>Clear text</button>
    </div>
    <div className="container">
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.0076 * text.split(" ").length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}



