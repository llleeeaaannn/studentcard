import styles from '../styles/card.module.css';
import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../App';

const Card = ({ data }) => {

  return (
    <div className={styles.card}>
      <header>
        <h2>Economics and Business 2023</h2>
      </header>

      <main>
        <img src='/images/erasmuslogo.png' alt='erasmus logo'></img>

        <div className={styles.headshot}>
          <img src='/images/testphoto.png' alt='headshot'></img>
        </div>

        <div className={styles.details}>
          <div>
            <span>Student</span>
            <p>F.D. Pierce</p>
          </div>

          <div>
            <span>Date of Birth</span>
            <p>13-07-1998</p>
          </div>

          <div>
            <span>Student ID</span>
            <p>596240</p>
          </div>

          <div>
            <span>Degree Programme</span>
            <p>Economics and Business</p>
          </div>

          <div>
            <span>Academic Year</span>
            <p>2022-2023</p>
          </div>
        </div>

      </main>

      <footer>
        <span>Valid from 01-09-2022 to 31-08-2023</span>
      </footer>
    </div>
  )
}

export default Card;
