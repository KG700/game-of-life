import React from 'react';

import classes from './Backdrop.module.css';

const Backdrop = (props) => {
  return(
    props.show
    ?
      <div className={classes.Backdrop}>
        <h1>GAME OF LIFE</h1>
        <div>
          <button
            className={classes.Refresh}
            onClick={props.refresh}></button>
          {props.isRunning
          ?
            <button
              className={classes.Pause}
              onClick={props.stop}></button>
          :
            <button
              className={classes.Play}
              onClick={props.start}></button>
          }
        </div>
      </div>
    :
      null

  )
}

export default Backdrop;
