import React, { Component } from 'react';

import Grid from './components/Grid/Grid';

import './App.css';

const NUMBER_OF_ROWS = 20;
const NUMBER_OF_COLUMNS = 30;
const INITIAL_PROPORTION_ALIVE = 0.3;

class App extends Component {

  state = {
    gridStatus: Array(NUMBER_OF_ROWS)
                  .fill(Array(NUMBER_OF_COLUMNS)
                    .fill('dead')
                  )
  }

  componentDidMount() {
    console.log("Howdy!")
    this.newGridHandler();
  }

  newGridHandler = () => {
    let newGrid = this.updateGridWithAlive(this.state.gridStatus);
    let newGridWithStatus = newGrid.map((row, rowIndex) => {
      return row.map((col, colIndex) => {
        const neighbours = this.findNeighbours(rowIndex, colIndex, newGrid);
        console.log(neighbours);
      })
    });
    this.setState({ gridStatus: newGrid });
  }

  updateGridWithAlive = (grid) => {
    let newGrid = grid.map(row => {
      return row.map(cell => {
        if (Math.random() < INITIAL_PROPORTION_ALIVE) {
          return 'alive';
        }
        return 'dead';
      })
    });
    return newGrid;
  }

  findNeighbours(row, col, grid) {
    const neighbours = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
    let totalNeighbours = 0;
    neighbours.map(neighbour => {
      const x = neighbour[0] + row;
      const y = neighbour[1] + col;
      if (x > 0 && x < NUMBER_OF_ROWS && y > 0 && y < NUMBER_OF_COLUMNS) {
        if (grid[x][y] === 'alive') {
          totalNeighbours += 1;
        }
      }
    })
    return totalNeighbours;
  }

  render() {
    return (
      <div className="App">
        <Grid cellStatus={this.state.gridStatus} />
      </div>
    );
  }
}

export default App;
