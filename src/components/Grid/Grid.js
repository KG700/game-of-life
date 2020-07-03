import React from 'react';

const Grid = (props) => {
  const tableRows = props.cellStatus.map(row => {
    let theCells = row.map(cell => {
      return <td
              className={cell}
              >{cell}</td>
    })
    return <tr>{theCells}</tr>;
  })
  return <table><tbody>{tableRows}</tbody></table>
}

export default Grid;
