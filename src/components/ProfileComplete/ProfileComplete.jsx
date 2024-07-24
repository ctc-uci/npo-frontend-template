import { React } from 'react';
import { Link } from 'react-router-dom';
import classes from './ProfileComplete.module.css';
import background from '../../images/profile-complete-background.png';

function ProfileComplete() {
  return (
    <div className={classes.background}>
      <img src={background} alt="Background" className={classes.background} />
      <Link to="/" className={classes.home}>
        Home
      </Link>
    </div>
  );
}

export default ProfileComplete;
