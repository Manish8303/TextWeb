import React, { useState } from "react";


export default function Textform(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text Changed To Uppercase", "success");
    

  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text Changed To Lowercase", "success");
  };

  const handleCClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);


  };
  
  const handleCopy = () => {
    console.log("I am copy");
    var text = document.getElementById("box");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to clipboard", "success");
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed", "success");
  };
  
  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="box"
            onChange={handleOnChange}
            value={text}
            rows="15"
          ></textarea>
        </div>
        <button disabled={text.length===0}
          className="btn btn-warning mx-2 my-1"
          id="btn"
          onClick={handleUpClick}
        >
          Convert To Upper Case
        </button>

        <button disabled={text.length===0}
          className="btn btn-warning mx-1 my-1"
          id="btn"
          onClick={handleLoClick}
        >
          Convert To Lower Case
        </button>

        <button disabled={text.length===0}
          className="btn btn-warning mx-1 my-1"
          id="btn"
          onClick={handleCClick}
        >
          Clear Text
        </button>

        <button disabled={text.length===0}
          className="btn btn-warning mx-1 my-1"
          id="btn"
          onClick={handleCopy}
        >
          Copy Text
        </button>

        <button disabled={text.length===0}
          className="btn btn-warning mx-1 my-1"
          id="btn"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        
      </div>

      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>
          {" "}
          {
            text
              .trim()
              .split(/\s+/)
              .filter((element) => element.length !== 0).length
          }{" "}
          words and {text.length} characters
        </p>
      </div>
    </>
  );
  }
