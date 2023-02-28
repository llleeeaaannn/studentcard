import styles from '../styles/navbar.module.css';
import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../App';

const Navbar = () => {

  const { random } = useContext(AppContext);

  return (
    <div className={styles.card}>
      <svg width="16" height="16" viewBox="0 0 16 16">
        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"/>
      </svg>
      <svg width="24" height="24" viewBox="0 0 24 24">
        <path fill="currentColor" d="m15.07 11.25l-.9.92C13.45 12.89 13 13.5 13 15h-2v-.5c0-1.11.45-2.11 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41a2 2 0 0 0-2-2a2 2 0 0 0-2 2H8a4 4 0 0 1 4-4a4 4 0 0 1 4 4a3.2 3.2 0 0 1-.93 2.25M13 19h-2v-2h2M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10c0-5.53-4.5-10-10-10Z"/>
      </svg>
    </div>
  )
}

export default Navbar;
