import React from 'react';
import { Link } from 'react-router-dom';
import chair from '../../images/chair-star-circle.png';
import classes from './Profile.module.css';

function Profile() {
  const instruments = [
    'Piccolo',
    'Flute',
    'Alto Flute',
    'Oboe',
    'Clarinet in Eb',
    'Clarinet in Bb',
    'Alto Clarinet in Eb',
    'Bass Clarinet in Bb',
    'Contra-Bass Clarinet in Eb',
    'Alto Saxophone in Eb',
    'Tenor Saxophone in Bb',
    'Baritone Saxophone in Eb',
    'Guam',
    'Bassoon',
    'Contrabassoon',
    'Horn in F',
    'Trumpet in Bb',
    'Trombone',
    'Bass Trombone',
    'Euphonium/Baritone',
    'Tuba',
    'Percussion',
    'Marching Percussion (Captain)',
    'Marching Pit (Captain)',
    'Violin',
    'Viola',
    'Cello',
    'Double Bass',
    'Harp',
    'Bagpipes',
  ];

  const states = [
    'Alabama',
    'Alaska',
    'American Samoa',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'District of Columbia',
    'Florida',
    'Georgia',
    'Guam',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Northern Mariana Islands',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Puerto Rico',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'U.S. Virgin Islands',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
    'Armed Force Americas',
    'Armed Forces Europe',
    'Armed Forces Pacific',
  ];

  return (
    <div id="profile" className={classes.background}>
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

      <div className={classes.verticalContainer}>
        <div className={classes.r1}>
          <input type="text" placeholder="Student's First Name" />
          <input type="text" placeholder="Student's Middle Name" />
          <input type="text" placeholder="Student's Last Name" />
        </div>
        <div className={classes.r2}>
          <select id="State" name="State" style={{ width: '65%' }}>
            <option value="" disabled selected>
              Student's First Chair Instrument
            </option>
            {instruments.map(value => (
              <option value={value}>{value}</option>
            ))}
          </select>
          <button style={{ width: '30%' }} type="button">
            Upload Profile Picture
          </button>
        </div>
        <input type="text" placeholder="Student's Email Address" />
        <div style={{ marginBottom: '0' }}>
          <input type="text" placeholder="Name of School" style={{ width: '65%' }} />
          <input type="text" placeholder="Graduation Year" style={{ width: '30%' }} />
        </div>
        <div style={{ position: 'relative', height: '2%' }}>
          <p style={{ position: 'absolute', top: '5%', right: '15%', marginTop: '0' }}>
            (High School Only)
          </p>
        </div>
        <div>
          <input type="text" placeholder="School's Address" style={{ width: '35%' }} />
          <input type="text" placeholder="City" style={{ width: '25%' }} />
          <select id="State" name="State">
            <option value="" disabled selected>
              State
            </option>
            {states.map(value => (
              <option value={value}>{value}</option>
            ))}
          </select>
          <input type="text" placeholder="Zip" />
        </div>
        {[...Array(3)].map(value => (
          <div
            key={value}
            style={{ display: 'flex', flexDirection: 'column', height: '22vh', marginBottom: '0%' }}
          >
            <div style={{ position: 'relative', height: '2%', marginTop: '3%' }}>
              <p style={{ position: 'absolute', bottom: '10%', left: '0%', marginBottom: '0' }}>
                First Chair/First Section - seven or more consecutive weeks
              </p>
            </div>
            <div className={classes.r3}>
              <input
                type="text"
                placeholder="Name of School Performance Ensemble"
                style={{ width: '65%' }}
              />
              <input type="text" placeholder="Year" style={{ width: '10%' }} />
              <input type="text" placeholder="School Grade" style={{ width: '15%' }} />
            </div>
            <div className={classes.red}>
              <input type="text" placeholder="Director's First Name" style={{ width: '35%' }} />
              <input type="text" placeholder="Director's Last Name" style={{ width: '35%' }} />
            </div>
          </div>
        ))}
        {[...Array(5)].map(value => (
          <div
            key={value}
            style={{ display: 'flex', flexDirection: 'column', height: '22vh', marginBottom: '0%' }}
          >
            <div style={{ position: 'relative', height: '2%', marginTop: '3%' }}>
              <p style={{ position: 'absolute', bottom: '10%', left: '0%', marginBottom: '0' }}>
                First Chair/First Section
              </p>
            </div>
            <div className={classes.r3}>
              <input type="text" placeholder="Name of Honor Ensemble" style={{ width: '65%' }} />
              <input type="text" placeholder="Year" style={{ width: '10%' }} />
              <input type="text" placeholder="School Grade" style={{ width: '15%' }} />
            </div>
            <input
              type="text"
              placeholder="Name of Sponsoring Association"
              className={classes.r3}
            />
          </div>
        ))}
        {[...Array(2)].map(value => (
          <div
            key={value}
            style={{ display: 'flex', flexDirection: 'column', height: '17vh', marginBottom: '0%' }}
          >
            <div className={classes.red}>
              <input type="text" placeholder="Parent's First Name" style={{ width: '30%' }} />
              <input type="text" placeholder="Parent's Middle Name" style={{ width: '30%' }} />
              <input type="text" placeholder="Parent's Last Name" style={{ width: '30%' }} />
            </div>
            <div className={classes.red}>
              <input type="text" placeholder="Parent's Email Address" style={{ width: '65%' }} />
              <input type="text" placeholder="Parent's Phone Number" style={{ width: '30%' }} />
            </div>
          </div>
        ))}
        <div>
          <Link to="/profilecomplete" className={classes.button}>
            Upload Profile
          </Link>
          <p style={{ margin: '0 0 0 5%' }}>
            {`Upon uploading your profile, you will be included in the First Chair American National
            Registry. Clicking on your name will direct you to your profile page, and there's a
            chance your profile may be showcased on the homepage as a featured profile.`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
