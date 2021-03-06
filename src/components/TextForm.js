import React, { useState } from "react";

export default function TextForm(props) {


  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpperClick = () => {
    setText(text.toUpperCase());
    props.showAlert("converted to uppercase","success");

  };
  const handleLowerClick = () => {
    setText(text.toLowerCase());
    props.showAlert("converted to LowerCase","success");

  };
  const handleClearClick = () => {
    setText("");
    props.showAlert("Text cleared","success");

  };

  const [text, setText] = useState("");

  return (
    <>
      <div>
        <h1 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {props.heading}
        </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="enter text here"
            style={{
              backgroundColor: props.mode === "dark" ? "#142d52" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
          <button
          disabled={text.length===0}
            className="btn btn-primary mx-1 my-2"
            onClick={handleUpperClick}
          >
            Convert to UpperCase
          </button>
          <button
            disabled={text.length===0}
            className="btn btn-primary mx-1 my-2"
            onClick={handleLowerClick}
          >
            Convert to LowerCase
          </button>
          <button
            disabled={text.length===0}
            className="btn btn-primary mx-1 my-2"
            onClick={handleClearClick}
          >
            Cleartext
          </button>
        </div>
      </div>

      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2> Your text summary</h2>
        <p>
          Your text has {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length}{" "}
          characters
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
      </div>
    </>
  );
}
