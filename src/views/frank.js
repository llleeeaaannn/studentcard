import styles from '../styles/card.module.css';
import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../App';

const Frank = () => {

  const { random } = useContext(AppContext);

  return (
    <div className={styles.card}>
    </div>
  )
}

export default Frank;
