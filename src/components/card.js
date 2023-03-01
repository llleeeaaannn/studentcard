import styles from '../styles/card.module.css';
import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../App';

const Card = ({ data }) => {

  return (
    <div className={styles.card}>
      <header>
        <h2>{ data.degreeWithYear }</h2>
      </header>

      <main>
        <img src='/images/erasmuslogo.png' alt='erasmus logo'></img>

        <div className={styles.headshot}>
          <img src={ data.photo } alt='headshot'></img>
        </div>

        <div className={styles.details}>
          <div>
            <span>Student</span>
            <p>{ data.name }</p>
          </div>

          <div>
            <span>Date of Birth</span>
            <p>{ data.dateofbirth }</p>
          </div>

          <div>
            <span>Student ID</span>
            <p>{ data.studentID }</p>
          </div>

          <div>
            <span>Degree Programme</span>
            <p>{ data.degree }</p>
          </div>

          <div>
            <span>Academic Year</span>
            <p>{ data.year }</p>
          </div>
        </div>

      </main>

      <footer>
        <span>Valid from { data.validFrom } to { data.validTo }</span>
      </footer>
    </div>
  )
}

export default Card;
