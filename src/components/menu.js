import styles from '../styles/menu.module.css';
import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../App';

const Menu = () => {

  const { menu, setMenu } = useContext(AppContext);

  return (
    <div className={styles.menu}>
      <nav className={styles.nav}>
        <header>
          <svg viewBox="0 0 24 24" onClick={() => setMenu(!menu)}>
            <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"/>
          </svg>
          <svg viewBox="0 0 24 24" onClick={() => setMenu(!menu)}>
            <path d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6Z"/>
          </svg>
        </header>

        <a href="https://www.eur.nl/en">
          <svg viewBox="0 0 24 24">
            <path d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z"/>
          </svg>
          <span>Home</span>
        </a>

        <a href="https://www.eur.nl/en">
          <svg viewBox="0 0 24 24">
            <path d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4Z"/>
          </svg>
          <span>Profile</span>
        </a>

        <a href="https://www.eur.nl/en">
          <svg viewBox="0 0 24 24">
            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM16 16a.996.996 0 0 1-1.41 0l-3.29-3.29A1 1 0 0 1 11 12V8c0-.55.45-1 1-1s1 .45 1 1v3.59l3 3c.39.39.39 1.02 0 1.41z"/>
          </svg>
          <span>Timetable</span>
        </a>

        <a href="https://www.eur.nl/en">
          <svg viewBox="0 0 24 24">
            <path d="M14 17H7v-2h7m3-2H7v-2h10m0-2H7V7h10m2-4H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z"/>
          </svg>
          <span>Courses</span>
        </a>

        <a href="https://www.eur.nl/en">
          <svg viewBox="0 0 24 24">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
          <span>Contact</span>
        </a>
      </nav>
    </div>
  )
}

export default Menu;
