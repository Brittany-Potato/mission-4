import React from 'react'
import styles from './MainContainer.module.css'
import TextArea from './textArea.jsx'

export default function MainContainer() {



  

  return (
    <div className={styles.mainContainer}>
       <div className={styles.titleDiv}>
        <h1 className={styles.title}>Turners Insurance - Get a Quote</h1>
       </div>
       <TextArea/>
    </div>
  );

}