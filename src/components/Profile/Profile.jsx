import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import chair from '../../images/chair-star-circle.png';
import classes from './Profile.module.css';

function Profile() {
  return (
    <div className={classes.background}>
      <h1>Profile</h1>
      <p className={classes.p1}>
        {`To qualify as a First Chair America Certified Member, you must have held the first
        chair/first section in your school's band or orchestra for seven or more consecutive weeks.
        If selected for an honor ensemble such as All-City or All-Region, you must occupy the first
        chair/first section on the day of your performance. Once you attain this status, you're a
        lifelong member, regardless of any challenges or if you lost the first chair position.`}
        <br />
        <br />
        Note, the information marked in red will not be a part of the published student profile but
        is still required as part of the profile.
      </p>
      <img src={chair} alt="chair surrounded by a circle of stars" className={classes.chair} />

      <Container className={classes.verticalContainer}>
        <Row className={classes.r1}>
          <Form.Control placeholder="Student's First Name" />
          <Form.Control placeholder="Student's Middle Name" />
          <Form.Control placeholder="Student's Last Name" />
        </Row>
        <Row className={classes.r2}>
          <Form.Control placeholder="Student's First Chair Instrument" style={{ width: '65%' }} />
          <Button style={{ width: '30%' }}>Upload Profile Picture</Button>
        </Row>
        <Form.Control placeholder="Student's Email Address" />
        <Row style={{ marginBottom: '0' }}>
          <Form.Control placeholder="Name of School" style={{ width: '65%' }} />
          <Form.Control placeholder="Graduation Year" style={{ width: '30%' }} />
        </Row>
        <Row style={{ position: 'relative', height: '2%' }}>
          <p style={{ position: 'absolute', top: '5%', right: '15%', marginTop: '0' }}>
            (High School Only)
          </p>
        </Row>
        <Row>
          <Form.Control placeholder="School's Address" style={{ width: '35%' }} />
          <Form.Control placeholder="City" style={{ width: '25%' }} />
          <Form.Control placeholder="State" />
          <Form.Control placeholder="Zip" />
        </Row>
        {[...Array(3)].map(value => (
          <div
            key={value}
            style={{ display: 'flex', flexDirection: 'column', height: '22vh', marginBottom: '0%' }}
          >
            <Row style={{ position: 'relative', height: '2%', marginTop: '3%' }}>
              <p style={{ position: 'absolute', bottom: '10%', left: '0%', marginBottom: '0' }}>
                First Chair/First Section - seven or more consecutive weeks
              </p>
            </Row>
            <Row className={classes.r3}>
              <Form.Control
                placeholder="Name of School Performance Ensemble"
                style={{ width: '65%' }}
              />
              <Form.Control placeholder="Year" style={{ width: '10%' }} />
              <Form.Control placeholder="School Grade" style={{ width: '15%' }} />
            </Row>
            <Row className={classes.red}>
              <Form.Control placeholder="Director's First Name" style={{ width: '35%' }} />
              <Form.Control placeholder="Director's Last Name" style={{ width: '35%' }} />
            </Row>
          </div>
        ))}
        {[...Array(5)].map(value => (
          <div
            key={value}
            style={{ display: 'flex', flexDirection: 'column', height: '22vh', marginBottom: '0%' }}
          >
            <Row style={{ position: 'relative', height: '2%', marginTop: '3%' }}>
              <p style={{ position: 'absolute', bottom: '10%', left: '0%', marginBottom: '0' }}>
                First Chair/First Section
              </p>
            </Row>
            <Row className={classes.r3}>
              <Form.Control placeholder="Name of Honor Ensemble" style={{ width: '65%' }} />
              <Form.Control placeholder="Year" style={{ width: '10%' }} />
              <Form.Control placeholder="School Grade" style={{ width: '15%' }} />
            </Row>
            <Form.Control placeholder="Name of Sponsoring Association" className={classes.r3} />
          </div>
        ))}
        {[...Array(2)].map(value => (
          <div
            key={value}
            style={{ display: 'flex', flexDirection: 'column', height: '17vh', marginBottom: '0%' }}
          >
            <Row className={classes.red}>
              <Form.Control placeholder="Parent's First Name" style={{ width: '30%' }} />
              <Form.Control placeholder="Parent's Middle Name" style={{ width: '30%' }} />
              <Form.Control placeholder="Parent's Last Name" style={{ width: '30%' }} />
            </Row>
            <Row className={classes.red}>
              <Form.Control placeholder="Parent's Email Address" style={{ width: '65%' }} />
              <Form.Control placeholder="Parent's Phone Number" style={{ width: '30%' }} />
            </Row>
          </div>
        ))}
        <Row>
          <Button className={classes.button}>Upload Profile</Button>
          <p style={{ margin: '0 0 0 5%' }}>
            {`Upon uploading your profile, you will be included in the First Chair American National
            Registry. Clicking on your name will direct you to your profile page, and there's a
            chance your profile may be showcased on the homepage as a featured profile.`}
          </p>
        </Row>
      </Container>
    </div>
  );
}

export default Profile;
