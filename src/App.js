import React, { Component } from 'react';

import Grid from './components/Grid/Grid';
import Backdrop from './components/UI/Backdrop/Backdrop';

import classes from './App.module.css';

const NUMBER_OF_ROWS = 18;
const NUMBER_OF_COLUMNS = 35;
const INITIAL_PROPORTION_ALIVE = 0.3;

class App extends Component {

  state = {
    gridStatus: Array(NUMBER_OF_ROWS).fill(Array(NUMBER_OF_COLUMNS).fill('dead')),
    isRunning: false,
    backdropShow: false
  }

  componentDidMount() {
    console.log("componentDidMount")
    this.newGridHandler();
  }

  newGridHandler = () => {
    console.log('newGridHandler')
    let newGrid = this.updateGridWithAlive(this.state.gridStatus);
    let newGridWithStatus = this.updateGridWithLonelyCrowdedRevive(newGrid);
    let newGridWithReviveStatuses = this.updateGridWithReviveStatuses(newGridWithStatus);
    this.setState({ gridStatus: newGridWithReviveStatuses });
  }

  updateGridWithReviveStatuses = (grid) => {
    const newGrid = grid.map((row, rowIndex) => {
      return row.map((col, colIndex) => {
        const neighbours = this.findNextNeighbours(rowIndex, colIndex, grid);
        // console.log(neighbours)
        // console.log(col)
        if (col === 'revive' && neighbours < 2) {
          return 'reviveLonely'
        }
        if (col === 'revive' && neighbours < 4) {
          return 'reviveAlive'
        }
        if (col === 'revive' && neighbours > 3) {
          return 'reviveCrowded';
        }
        return col
      })
    })
    return newGrid;
  }

  updateGridWithLonelyCrowdedRevive = (grid) => {
    console.log('updateGridWithLonelyCrowded')
    const newGrid = grid.map((row, rowIndex) => {
      return row.map((col, colIndex) => {
        const neighbours = this.findNeighbours(rowIndex, colIndex, grid);
        if (col === 'alive' && neighbours < 2) {
          return 'lonely';
        }
        if (col === 'alive' && neighbours > 3) {
          return 'crowded';
        }
        if (col === 'dead' && neighbours === 3) {
          return 'revive';
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
    const neighbours = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
    let totalNeighbours = 0;
    neighbours.map(neighbour => {
      const x = (neighbour[0] + row + NUMBER_OF_ROWS) % NUMBER_OF_ROWS;
      const y = (neighbour[1] + col + NUMBER_OF_COLUMNS) % NUMBER_OF_COLUMNS;
      if (grid[x][y] === 'alive' || grid[x][y] === 'lonely' || grid[x][y] === 'crowded') {
        totalNeighbours += 1;
      }
      return 'complete';
    })
    return totalNeighbours;
  }

  findNextNeighbours(row, col, grid) {
    const neighbours = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
    let totalNeighbours = 0;
    neighbours.map(neighbour => {
      const x = (neighbour[0] + row + NUMBER_OF_ROWS) % NUMBER_OF_ROWS;
      const y = (neighbour[1] + col + NUMBER_OF_COLUMNS) % NUMBER_OF_COLUMNS;
      if (grid[x][y] === 'alive' || grid[x][y] === 'revive') {
        totalNeighbours += 1;
      }
      return 'complete';
    })
    return totalNeighbours;
  }

  stepHandler = () => {
    console.log('stepHandler')
    let nextGrid = this.state.gridStatus.map((row, rowIndex) => {
      return row.map((col, colIndex) => {
        if (col === 'reviveLonely') { return 'alive'}
        if (col === 'reviveAlive') { return 'alive'}
        if (col === 'reviveCrowded') { return 'alive'}
        if (col === 'lonely' || col === 'crowded') { return 'dead' }
        return col;
      })
    })
    let nextGridWithStatus = this.updateGridWithLonelyCrowdedRevive(nextGrid);
    let nextGridWithReviveStatuses = this.updateGridWithReviveStatuses(nextGridWithStatus);
    this.setState({ gridStatus: nextGridWithReviveStatuses });
  }

  startHandler = () => {
    this.setState({ isRunning: true, backdropShow: false });
  }

  stopHandler = () => {
    this.setState({ isRunning: false })
  }

  componentDidUpdate = (prevProps, prevState) => {
    const started = !prevState.isRunning && this.state.isRunning;
    const stopped = prevState.isRunning && !this.state.isRunning;
    if (started) {
      this.timer = setInterval(this.stepHandler, 1500);
    }
    if (stopped) {
      clearInterval(this.timer);
    }
  }

  enterHoverHandler = () => {
    console.log("hovering")
    this.setState({ backdropShow: true })
  }

  leaveHoverHandler = () => {
    console.log("not hovering")
    if (this.state.isRunning) {
      this.setState({ backdropShow: false })
    }
  }

  render() {
    console.log('render')
    return (
      <div className={classes.App}>
          <Grid
            cellStatus={this.state.gridStatus}
            onMouseEnter={this.enterHoverHandler}
            onMouseLeave={this.leaveHoverHandler}
          />
          <Backdrop
            show={this.state.backdropShow}
            onMouseEnter={this.enterHoverHandler}
            onMouseLeave={this.leaveHoverHandler}
            isRunning={this.state.isRunning}
            refresh={this.newGridHandler}
            step={this.stepHandler}
            start={this.startHandler}
            stop={this.stopHandler}
          />
      </div>
    );
  }
}

export default App;
