import React from 'react';
import nsma from '../../images/nsma.png';
import nsjma from '../../images/nsjma.png';
import accoladi from '../../images/accoladi.png';
import mmf from '../../images/mmf.png';
import classes from './Products.module.css';

function Products() {
  return (
    <div>
      <div className={classes.background}>
        <h1 className={classes.title}>Other Products of ScholarshipAuditions.com</h1>
      </div>
      <div className={classes.container}>
        <button className={classes.button} type="button" style={{ gridArea: '1 1 2 2' }}>
          <img src={nsma} alt="NSMA" />
        </button>
        <button className={classes.button} type="button" style={{ gridArea: '1 2 2 3' }}>
          <img src={nsjma} alt="NJSMA" />
        </button>
        <button className={classes.button} type="button" style={{ gridArea: '2 1 3 2' }}>
          <img src={accoladi} alt="Accoladi" />
        </button>
        <button className={classes.button} type="button" style={{ gridArea: '2 2 3 3' }}>
          <img src={mmf} alt="My Music Future" />
        </button>
      </div>
    </div>
  );
}

export default Products;
