import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import classes from './Home.module.css';
import chair from '../../images/chair.png';

function HomeMaster() {
  const navigate = useNavigate();

  const toProfile = () => {
    navigate(`/Profile`);
  };

  return (
    <section className={classes.page}>
      <img src={chair} alt="american flag chair" className={classes.chair} />
      <h1 className={classes.home_title}>
        First Chair
        <br /> America
      </h1>
      <p className={classes.description}>
        Spotlighting the top instrumentalists <br />
        in school bands and orchestras nationwide!
      </p>
      <Button className={classes.button} onClick={toProfile}>
        Start Profile
      </Button>
    </section>
  );
}

export default HomeMaster;
