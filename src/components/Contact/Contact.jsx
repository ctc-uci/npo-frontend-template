import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import classes from './Contact.module.css';
// import InputGroup from 'react-bootstrap/InputGroup';
import amy from '../../images/military/amy-mccabe.png';
import kristopher from '../../images/military/kristopher-westrich.png';
import ruth from '../../images/military/ruth-keehner.png';
import elizabeth from '../../images/military/elizabeth-mcginness.png';

function Contact() {
  const people = {
    'Amy McCabe': [amy, 'U.S. Marine Band', 'Master Sergent', 'First Chair Trumpet'],
    'Kristopher Westrich': [
      kristopher,
      'U.S. Air Force Band',
      'Master Sergent',
      'First Chair Trumpet',
    ],
    'Ruth Keehner': [ruth, 'U.S. Navy Band', 'Master Chief Musician', 'First Chair Oboe'],
    'Elizabeth McGiness': [elizabeth, 'U.S. Army Band', 'Sergent First Class', 'First Chair Flute'],
  };

  return (
    <div id="contact" className={classes.background}>
      <h1 className={classes.title}>Contact</h1>
      <div className={classes.container}>
        <div className={classes.left}>
          <h2 style={{ margin: '0' }}>Saluting</h2>
          <h3 style={{ margin: '1% 0% 3% 0%' }}>
            First Chair Players <br />
            United States Military Bands
          </h3>
          <div className={classes.imgContainer}>
            {Object.keys(people).map(value => (
              <div key={value}>
                <img src={people[value][0]} alt={value} className={classes.img} />
                <p>{people[value][1]}</p>
                <p>{people[value][2]}</p>
                <p>{value}</p>
                <p>{people[value][3]}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={classes.vertical}>
          <div className={classes.horizontalContainer}>
            <Form.Control placeholder="Name" />
            <Form.Control placeholder="Subject" />
          </div>
          <Form.Control placeholder="Email" style={{ height: '10%', paddingTop: '2%' }} />
          <Form.Control
            placeholder="Message"
            as="textarea"
            style={{ height: '100%', paddingTop: '1%' }}
          />
          <Button className={classes.button}>Send</Button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
