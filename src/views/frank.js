import styles from '../styles/page.module.css';
import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../App';
import Card from '../components/card';
import Menu from '../components/menu';
import Navbar from '../components/navbar';
import { frankData } from '../data/profiles';

const Frank = () => {

  const { menu } = useContext(AppContext);

  return (
    <div className={styles.page}>
      <Navbar />
      <Card data={ frankData }/>
      { menu && <Menu /> }
    </div>
  )
}

export default Frank;
