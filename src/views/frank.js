import styles from '../styles/page.module.css';
import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../App';
import Card from '../components/card';
import Navbar from '../components/navbar';
import { frankData } from '../data/profiles';

const Frank = () => {

  const { random } = useContext(AppContext);

  return (
    <div className={styles.page}>
      <Navbar />
      <Card data={ frankData }/>
    </div>
  )
}

export default Frank;
