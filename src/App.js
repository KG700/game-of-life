import React, { Component } from 'react';

import Grid from './components/Grid/Grid';

import './App.css';

const NUMBER_OF_ROWS = 30;
const NUMBER_OF_COLUMNS = 40;
const INITIAL_PROPORTION_ALIVE = 0.3;

class App extends Component {

  state = {
    gridStatus: Array(NUMBER_OF_ROWS)
                  .fill(Array(NUMBER_OF_COLUMNS)
                    .fill('dead')
                  )
  }

  componentDidMount() {
    console.log("componentDidMount")
    this.newGridHandler();
  }

  newGridHandler = () => {
    console.log('newGridHandler')
    let newGrid = this.updateGridWithAlive(this.state.gridStatus);
    let newGridWithStatus = this.updateGridWithLonelyCrowded(newGrid);
    this.setState({ gridStatus: newGridWithStatus });
  }

  updateGridWithLonelyCrowded = (grid) => {
    console.log('updateGridWithLonelyCrowded')
    const newGrid = grid.map((row, rowIndex) => {
      return row.map((col, colIndex) => {
        const neighbours = this.findNeighbours(rowIndex, colIndex, grid);
        // console.log(`(${rowIndex}, ${colIndex}): ${neighbours}`);
        if (col === 'alive' && neighbours < 2) {
          return 'lonely';
        }
        if (col === 'alive' && neighbours > 3) {
          return 'crowded';
        }
        return col;
      })
    });
    return newGrid;
  }

  updateGridWithAlive = (grid) => {
    console.log('updateGridWithAlive')
    let newGrid = grid.map(row => {
      return row.map(col => {
        if (Math.random() < INITIAL_PROPORTION_ALIVE) {
          return 'alive';
        }
        return 'dead';
      })
    });
    return newGrid;
  }

  findNeighbours(row, col, grid) {
    // console.log('findNeighbours')
    const neighbours = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
    let totalNeighbours = 0;
    neighbours.map(neighbour => {
      const x = neighbour[0] + row;
      const y = neighbour[1] + col;
      if (x >= 0 && x < NUMBER_OF_ROWS && y >= 0 && y < NUMBER_OF_COLUMNS) {
        if (grid[x][y] === 'alive' || grid[x][y] === 'lonely' || grid[x][y] === 'crowded') {
          totalNeighbours += 1;
        }
      }
    })
    return totalNeighbours;
  }

  stepHandler = () => {
    console.log('stepHandler')
    let nextGrid = this.state.gridStatus.map((row, rowIndex) => {
      return row.map((col, colIndex) => {
        const neighbours = this.findNeighbours(rowIndex, colIndex, this.state.gridStatus);
        if (col === 'dead' && neighbours === 3) { return 'alive' }
        if (col === 'lonely' || col === 'crowded') { return 'dead' }
        return col;
      })
    })
    let nextGridWithStatus = this.updateGridWithLonelyCrowded(nextGrid);
    this.setState({ gridStatus: nextGridWithStatus });
  }

  componentDidUpdate = () => {
    console.log('componentDidUpdate');
    setInterval(this.stepHandler, 5000);
  }

  render() {
    console.log('render')
    return (
      <div className="App">
        <Grid cellStatus={this.state.gridStatus} />
        <button
          onClick={this.newGridHandler}
          >NEW BOARD
        </button>
        <button
          onClick={this.stepHandler}
          >STEP
        </button>
      </div>
    );
  }
}

export default App;
