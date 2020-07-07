import React from 'react';

import Ball from './Ball/Ball';
import classes from './Grid.module.css';

const Grid = (props) => {
  console.log('<Grid />')
  const tableRows = props.cellStatus.map(row => {
    let theCells = row.map(cell => {
      let style;
      if (cell === 'dead') { style = classes.dead }
      if (cell === 'lonely') { style = classes.lonely }
      if (cell === 'alive') { style = classes.alive }
      if (cell === 'crowded') { style = classes.crowded }
      if (cell === 'reviveLonely') { style = classes.reviveLonely }
      if (cell === 'reviveAlive') { style = classes.reviveAlive }
      if (cell === 'reviveCrowded') { style = classes.reviveCrowded }

      return <td>
              {cell !== 'dead' ? <Ball style={cell} /> : null}
              </td>
    })
    return <tr>{theCells}</tr>;
  })
  return (
    // <div className={classes.Container}>
      <table className={classes.Grid}>
      {props.children}
        <tbody>
          {tableRows}
        </tbody>
      </table>
    // </div>
  )
}

export default Grid;
