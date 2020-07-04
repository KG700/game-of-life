import React from 'react';

import classes from './Ball.module.css';

const Ball = (props) => {
  return(
    <figure className={[classes.Ball, classes.Alive].join(' ')}><span className={classes.Shadow}></span></figure>
  )
}

export default Ball;

// <figure className={[classes.Ball, classes.Alive].join(' ')}><span className={classes.Shadow}></span></figure>
// <figure className={[classes.Ball, classes.Crowded].join(' ')}><span className={classes.Shadow}></span></figure>
