import { React, useState, useEffect } from "react";
import styles from "./textArea.module.css";

export default function TextArea() {
  const [text, setText] = useState("");
  const [response, setResponse] = useState("");

  //*~~~~ GET Request ~~~~~

  useEffect(() => {
    fetch("http://localhost:4000/quote")
      .then((res) => res.json())
      .then((data) => {
        setResponse(data.message)
      });
  }, []);

  //*~~~~~ POST Request ~~~~~

  const handleSubmit = () => {
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
  };







  return (
    <div>
      <div className={styles.textAreaDiv}>
        <textarea
          name="Response and history"
          className={styles.textArea}
          onChange={(e) => {setText + response}} 
          value={text + response}
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
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </div>
  );
}
