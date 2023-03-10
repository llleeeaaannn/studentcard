import styles from '../styles/menu.module.css';
import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../App';

const Menu = () => {

  return (
    <div className={styles.menu}>
      <nav className={styles.nav}>
        <div>
          <h3>Menu</h3>
        </div>

        <div>
          <span>Home</span>
        </div>

        <div>
          <span>Profile</span>
        </div>

        <div>
          <span>Timetable</span>
        </div>

        <div>
          <span>Courses</span>
        </div>

        <div>
          <span>Contact</span>
        </div>
      </nav>
    </div>
  )
}

export default Menu;
