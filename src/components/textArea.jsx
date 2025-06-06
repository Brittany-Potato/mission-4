import { React, useState, useEffect } from "react";
import styles from "./textArea.module.css";

export default function TextArea() {
  const [text, setText] = useState("");
  const [response, setResponse] = useState("");

  const [lines, setLines] = useState([]);

  //*~~~~ GET Request ~~~~~

  useEffect(() => {
    fetch("http://localhost:4000/quote")
      .then((res) => res.json())
      .then((data) => {
        setResponse(data.message);
      });
  }, []);

//*~~~~~ Handle Input Change ~~~~~

  const handleInputChange = (e) => {
    setText(e.target.value);
  };



  //*~~~~~ POST Request ~~~~~

  const handleSubmit = () => {
    setLines((prevLines) => [...prevLines, text]);
    fetch("http://localhost:4000/quote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: text }),
    })
      .then((res) => res.json())
      .then((data) => {
        setResponse(data.message);
        console.log(data);
      });
      setText("");
  };



  return (
    <div>
      <div className={styles.textAreaDiv}>
        <textarea
          name="Response and history"
          className={styles.textArea}
          onChange={(e) => {
            setText + response;
          }}
          value={[...lines, response].join("\n")} 
          readOnly
        ></textarea>
      </div>
      <div className={styles.submitButtonDiv}>
        <button className={styles.submitButton} onClick={handleSubmit}>
          Submit Button
        </button>
      </div>
      <div>
        <input
          type="text"
          className={styles.textBox}
          onChange={handleInputChange}
          value={text}
        />
      </div>
    </div>
  );
}
