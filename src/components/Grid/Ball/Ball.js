import React from 'react';

import classes from './Ball.module.css';

const Ball = (props) => {

  let style;
  if (props.style === 'dead') { style = classes.dead }
  if (props.style === 'lonely') { style = classes.Lonely }
  if (props.style === 'alive') { style = classes.Alive }
  if (props.style === 'crowded') { style = classes.Crowded }
  if (props.style === 'reviveLonely') { style = classes.ReviveLonely }
  if (props.style === 'reviveAlive') { style = classes.ReviveAlive }
  if (props.style === 'reviveCrowded') { style = classes.ReviveCrowded }

  return(
    <figure className={[classes.Ball, style].join(' ')}><span className={classes.Shadow}></span></figure>
  )
}

export default Ball;
