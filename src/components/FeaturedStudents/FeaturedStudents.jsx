import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import classes from './FeaturedStudents.module.css';
import rachelHobbs from '../../images/students/rachel-hobbs.png';
import tyDuncan from '../../images/students/ty-duncan.png';
import kevinJones from '../../images/students/kevin-jones.png';
import trayvonWalker from '../../images/students/trayvon-walker.png';
import kimLee from '../../images/students/kim-lee.png';
import joshInabiat from '../../images/students/josh-inabiat.png';
import lilyLouis from '../../images/students/lily-louis.png';
import jinYoung from '../../images/students/jin-young.png';

function FeaturedStudents() {
  const students = {
    'Rachel Hobbs': [rachelHobbs, 'Tuba', 'Garrison High School', 'Garrison, MI'],
    'Ty Duncan': [tyDuncan, 'Saxophone', 'Itta Bena High School', 'Ita Bena, MS'],
    'Kevin Jones': [kevinJones, 'Trumpet', 'Loris High School', 'Loris, SC'],
    'Trayvon Walker': [trayvonWalker, 'Percussion', 'Anthem High School', 'Phoenix, AZ'],
    'Kim Lee': [kimLee, 'Trombone', 'Lake Middle School', 'Lancaster, PA'],
    'Josh Inabiat': [joshInabiat, 'Clarinet', 'St. Xavier Middle School', 'Boston, MA'],
    'Lily Louis': [lilyLouis, 'Violin', 'Crown Middle School', 'Temecula, CA'],
    'Jin Young': [jinYoung, 'Tuba', 'Carver Middle School', 'Aurora, IL'],
  };
  const navigate = useNavigate();

  const toProfile = () => {
    navigate(`/profile`);
  };

  return (
    <section id="featured" className={classes.featured}>
      <h1 className={classes.featured_title}>Featured First Chair Instrumentalists</h1>
      <div className={classes.students}>
        {Object.keys(students).map(value => (
          <div key={value}>
            <img src={students[value][0]} alt={value} className={classes.pic} /> <h2>{value}</h2>
            <h3>{students[value][1]}</h3>
            <h3>{students[value][2]}</h3>
            <h3>{students[value][3]}</h3>
          </div>
        ))}
      </div>
      <Button className={classes.button} onClick={toProfile}>
        Start Profile
      </Button>
    </section>
  );
}

export default FeaturedStudents;
