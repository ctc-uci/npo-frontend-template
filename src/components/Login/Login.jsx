import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import chair from '../../images/chair-star-circle.png';
import stars from '../../images/blue-star.png';
import benefits from '../../images/benefits.png';
import classes from './Login.module.css';

function Login() {
  return (
    <Container className={classes.background}>
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

      <Container className={classes.container}>
        <Container className={classes.verticalContainer}>
          <div>
            <Form.Control placeholder="Student's First Name" />
            <Form.Control placeholder="Student's Last Name" />
          </div>
          <Form.Control placeholder="Student's First Chair Instrument" />
          <Form.Control placeholder="Login Identification - Your Email Address" />
          <Button style={{ color: '#af3034' }}>Click Here For Terms of Engagement</Button>
          <Button className={classes.button}>Submit</Button>
        </Container>

        <img src={benefits} alt="benefits" className={classes.benefits} />
      </Container>
    </Container>
  );
}

export default Login;
