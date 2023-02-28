import styles from '../styles/page.module.css';
import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../App';
import Card from '../components/card';

const Frank = () => {

  const { random } = useContext(AppContext);

  return (
    <div className={styles.page}>
      <Card />
    </div>
  )
}

export default Frank;
