import React from 'react';

import classes from './Backdrop.module.css';

const Backdrop = (props) => {
  return(
    props.show
    ?
      <div className={classes.Backdrop}>
        <button
          onClick={props.refresh}
          >NEW BOARD
        </button>
        <button
          onClick={props.step}
          >STEP
        </button>
        <button
          onClick={props.start}
        >
          START
        </button>
        <button
          onClick={props.stop}
        >
          STOP
        </button>
      </div>
    :
      null
    
  )
}

export default Backdrop;
