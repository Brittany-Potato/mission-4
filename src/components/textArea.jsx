import React from "react";
import styles from "./textArea.module.css";

export default function textArea() {
  return (
    <div>
      <div className={styles.textAreaDiv}>
        <textarea
          name="Response and historyResponse-and-history"
          className={styles.textArea}
        ></textarea>
      </div>
      <div className={styles.submitButtonDiv}>
        <button className={styles.submitButton}>
            Submit Button
        </button>
      </div>
      <div>
        <input type="text" className={styles.textBox}/>
      </div>
    </div>
  );
}
