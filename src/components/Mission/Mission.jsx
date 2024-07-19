import React from 'react';
import classes from './Mission.module.css';
import star from '../../images/white-star.png';

function Mission() {
  return (
    <section id="mission" className={classes.background}>
      <div className={classes.margins}>
        <div className={classes.stars}>
          {[...Array(14)].map(value => (
            <img src={star} alt="white star" key={value} />
          ))}
        </div>
        <p className={classes.p}>
          Our mission at First Chair America is to celebrate and honor the exceptional achievements
          of American school band and orchestra members who have earned the esteemed distinction of
          First Chair, fostering a national community of musical excellence.
        </p>
        <div className={classes.stars}>
          {[...Array(14)].map(value => (
            <img src={star} alt="white star" key={value} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Mission;
