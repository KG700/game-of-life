import React from 'react';

import classes from './Backdrop.module.css';

const Backdrop = (props) => {
  return(
    props.show
    ?
      <div className={classes.Backdrop}>
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
    :
      null

  )
}

export default Backdrop;
