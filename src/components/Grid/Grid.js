import React from 'react';

import Ball from './Ball/Ball';
import classes from './Grid.module.css';

const Grid = (props) => {
  console.log('<Grid />')
  const tableRows = props.cellStatus.map(row => {
    let theCells = row.map(cell => {
      return <td>
              {cell !== 'dead' ? <Ball style={cell} /> : null}
              </td>
    });
    return <tr>{theCells}</tr>;
  });

  return (
    // <div className={classes.Container}>
      <table
        className={classes.Grid}
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
      >
      {props.children}
        <tbody>
          {tableRows}
        </tbody>
      </table>
    // </div>
  )
}

export default Grid;
