import React from "react";
import styles from './textArea.module.css'

export default function textArea() {
  return (
    <div>
      <div className={styles.textAreaDiv}>
        <textarea
          name="Response and historyResponse-and-history"
          className={styles.textArea}
        ></textarea>
      </div>
    </div>
  );
}
