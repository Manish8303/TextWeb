import React from "react";

export default function About({ mode }) {
  const myStyle = {
    color: mode === "light" ? "black" : "white",
    backgroundColor: mode === "light" ? "white" : "#042743",
    border: mode === "light" ? "1px solid #ddd" : "1px solid #555",
  };

  return (
    <div className="container my-3">
      <h1 className={`my-3 text-${mode === "light" ? "dark" : "light"}`}>
        About TextWeb
      </h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className={`accordion-button ${
                mode === "light" ? "" : "text-light bg-dark"
              }`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              What is TextWeb?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
            style={myStyle}
          >
            <div className="accordion-body">
              <strong>TextWeb is a powerful text manipulation tool</strong>{" "}
              designed to help users analyze, format, and transform text
              effortlessly. Whether you need to count words, convert case, or
              perform custom text operations, TextWeb provides an intuitive
              interface to get the job done. Our goal is to make text processing
              simple, fast, and accessible for everyone.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className={`accordion-button collapsed ${
                mode === "light" ? "" : "text-light bg-dark"
              }`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              Key Features
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
            style={myStyle}
          >
            <div className="accordion-body">
              <strong>Explore the capabilities of TextWeb:</strong>
              <ul>
                <li>
                  Text transformation: Convert text to uppercase, lowercase, or
                  title case.
                </li>
                <li>
                  Word and character count: Analyze text length and composition.
                </li>
                <li>
                  Dark/Light mode: Switch between themes for comfortable
                  viewing.
                </li>
                <li>
                  Responsive design: Use TextWeb on any device with
                  Bootstrap-powered layouts.
                </li>
                <li>
                  Instant feedback: Receive alerts for actions like mode changes
                  or text processing.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className={`accordion-button collapsed ${
                mode === "light" ? "" : "text-light bg-dark"
              }`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              Get Started
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
            style={myStyle}
          >
            <div className="accordion-body">
              <strong>Start using TextWeb today!</strong> Navigate to the Home
              page to enter your text and explore our tools. Use the dark mode
              toggle in the navigation bar to switch between light and dark
              themes for a personalized experience. For feedback or support,
              contact us at{" "}
              <a href="mailto:support@textweb.com">support@textweb.com</a>.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
