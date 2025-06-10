import { useState } from "react";
import styles from "./App.module.css";
import MainContainer from "./components/mainContainer";

function App() {
  return (
    <>
      <div className={styles.body}>
        <div className={styles.background}>
          <MainContainer />
        </div>
      </div>
    </>
  );
}

export default App;
