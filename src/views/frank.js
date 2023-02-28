import styles from '../styles/page.module.css';
import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../App';

const Frank = () => {

  const { random } = useContext(AppContext);

  return (
    <div className={styles.page}>
    </div>
  )
}

export default Frank;
