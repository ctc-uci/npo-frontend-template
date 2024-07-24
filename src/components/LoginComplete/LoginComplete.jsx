import { React } from 'react';
import { Link } from 'react-router-dom';
import classes from './LoginComplete.module.css';
import background from '../../images/login-complete-background.png';

function LoginComplete() {
  return (
    <div className={classes.container}>
      <img src={background} alt="Background" className={classes.background} />
      <Link to="/" className={classes.home}>
        Home
      </Link>
      <Link to="/profile" className={classes.profile}>
        Create Profile
      </Link>
    </div>
  );
}

export default LoginComplete;
