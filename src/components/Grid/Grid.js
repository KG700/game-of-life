import React from 'react';

import classes from './Grid.module.css';

const Grid = (props) => {
  const tableRows = props.cellStatus.map(row => {
    let theCells = row.map(cell => {
      let style;
      if (cell == 'dead') { style = classes.dead }
      if (cell == 'lonely') { style = classes.lonely }
      if (cell == 'alive') { style = classes.alive }
      if (cell == 'crowded') { style = classes.crowded }

      return <td
              className={style}
              ></td>
    })
    return <tr>{theCells}</tr>;
  })
  return (
    <table className={classes.Grid}>
      <tbody>
        {tableRows}
      </tbody>
    </table>
  )
}

export default Grid;
