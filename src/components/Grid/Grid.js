import React from 'react';

import Ball from './Ball/Ball';
import classes from './Grid.module.css';

const Grid = (props) => {
  const tableRows = props.cellStatus.map((row, rowIndex) => {
    let theCells = row.map((cell, colIndex) => {
      return <td key={`(${rowIndex},${colIndex})`}>
              {cell !== 'dead' ? <Ball style={cell} /> : null}
              </td>
    });
    return <tr key={rowIndex}>{theCells}</tr>;
  });

  return (
      <table
        className={classes.Grid}
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
      >
        <tbody>
          {tableRows}
        </tbody>
      </table>
  )
}

export default Grid;
