import { React, useState, useEffect, use } from "react";
import styles from "./MainContainer.module.css";
import TextArea from "./textArea.jsx";
import { getRecommendation } from "./textArea.jsx";

export default function MainContainer() {
  const [recommendation, setRecommendation] = useState("");

  return (
    <div className={styles.mainContainer}>
      <div className={styles.titleDiv}>
        <div className={styles.title}>
          {" "}
          <h1 className={styles.gradientText}>Turners Insurance - Get a Quote</h1>
        </div>
        {recommendation && (
          <div className={styles.recommendationBox}>
            <strong>Recommended Plan: {recommendation}</strong>
          </div>
        )}{" "}
      </div>
      <TextArea setRecommendation={setRecommendation} />
    </div>
  );
}
