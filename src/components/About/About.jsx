import React from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './About.module.css';
import destinyCosette from '../../images/students/destiny-cosette.png';

function About() {
  const navigate = useNavigate();

  const toProfile = () => {
    navigate(`/profile`);
  };

  return (
    <div id="about" className={classes.about}>
      <h1 className={classes.title}>About</h1>
      <div className={classes.text}>
        <p>
          Earning the distinction of First Chair in Band or Orchestra is a significant
          accomplishment worthy of recognition and celebration. It reflects a steadfast dedication
          to excellence and unwavering pursuit of musical mastery. Congratulations on this
          remarkable achievement!
        </p>
        <p>
          First Chair America proudly serves as a repository for American school band and orchestra
          members who have attained this prestigious status. Upon completing a basic profile, your
          achievement will be honored and acknowledged by your school, state, and instrument. Share
          this milestone with your loved ones by inviting them to join in the celebration on our
          platform.
        </p>
        <p>
          {`In addition to honoring individuals who achieve the esteemed status of First Chair in
          their school's band or orchestra, our platform also acknowledges those selected for this
          distinction in various esteemed ensembles such as All-County, All-City, All-District,
          All-Region, and notable, All-State. Moreover, by being a part of First Chair America
          Certified Registry, you have the opportunity to prominently feature this accomplishment on
          your collegiate applications.`}
        </p>
        <p>
          This service is provided complimentary by ScholarshipAuditions.com, reinforcing our
          commitment to supporting and celebrating the achievements of young musicians across the
          nation.
          <br />
          <br />
        </p>

        <div className={classes.horizontalContainer}>
          <p className={classes.p}>
            First Chair America Cartified Member
            <br />
            <br />
            Destiny Cosette
            <br />
            <br />
            First Chair Saxophone
            <br />
            <br />
            Millwood High School Wind Ensemble
            <br />
            Millwood, Oklahoma 2022, 2023, 2024
            <br />
            <br />
            All-Eastern Region Band
            <br />
            Oklahoma School Band Directors Association 2024
            <br />
            <br />
            All-County Band
          </p>
          <div>
            <img
              src={destinyCosette}
              alt="Destiny Cosette playing saxophone"
              className={classes.img}
            />
            <p>Graduation 2024</p>
          </div>
        </div>
      </div>
      <button className={classes.button} type="button" onClick={toProfile}>
        Start Profile
      </button>
    </div>
  );
}

export default About;
