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
        {props.isRunning
        ?
          <button onClick={props.stop}>STOP</button>
        :
          <button onClick={props.start}>START</button>
        }
      </div>
    :
      null

  )
}

export default Backdrop;
