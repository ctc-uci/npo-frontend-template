import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDisclosure, Checkbox, useCheckbox } from '@chakra-ui/react';
import Terms from './Terms/Terms';
import TestComponent from '../TestComponent/TestComponent';
import chair from '../../images/chair-star-circle.png';
import stars from '../../images/blue-star.png';
import benefits from '../../images/benefits.png';
import classes from './Login.module.css';

function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = event => {
    setIsChecked(event.target.checked);
  };

  function submit() {
    if (isChecked === true) {
      console.log('sumbit');
    } else {
      console.log('block');
    }
  }

  return (
    <div id="login" className={classes.background}>
      <Terms isOpen={isOpen} onClose={onClose} />
      <h1>Login</h1>
      <p className={classes.p1}>
        We appreciate you signing up for a login at First Chair America. Our aim is for this
        experience, opportunity, recognition, and community to enhance your musical journey
        significantly.
      </p>
      <img src={chair} alt="chair surrounded by a circle of stars" className={classes.chair} />

      <img src={stars} alt="three blue stars" className={classes.stars} />
      <p className={classes.guide}>
        Guidelines:
        <br />
        <ul>
          <li>Your email address will function as your Login ID.</li>
          <li>
            Your password should consist of at least seven characters, comprising letters and
            numbers, with a maximum of 11 characters.
          </li>
          <li>
            Basic identification is necessary to establish the login. Upon completion of all login
            components, you can proceed to create your profile.
          </li>
          <li>
            {`Once Login information is finalized, you'll be prompted to review and agree to the Terms
            of Engagement. Subsequently, you'll receive a confirmation email with instructions to
            begin your profile setup.`}
          </li>
        </ul>
      </p>

      <div className={classes.container}>
        <div className={classes.verticalContainer}>
          <div>
            <input type="text" placeholder="Student's First Name" />
            <input type="text" placeholder="Student's Last Name" />
          </div>
          <input type="text" placeholder="Student's First Chair Instrument" />
          <input type="text" placeholder="Login Identification - Your Email Address" />
          <button
            style={{ color: '#af3034', backgroundColor: 'white' }}
            type="button"
            onClick={onOpen}
          >
            Click Here For Terms of Engagement
          </button>
          <Checkbox
            isChecked={isChecked}
            onChange={handleCheckboxChange}
            style={{ backgroundColor: 'white', textAlign: 'center' }}
          >
            I agree with the Terms of Engagement
          </Checkbox>
          <Link to="/logincomplete" className={classes.button}>
            Submit
          </Link>
        </div>

        <img src={benefits} alt="benefits" className={classes.benefits} />
        {/* <TestComponent /> */}
      </div>
    </div>
  );
}

export default Login;
