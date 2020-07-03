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
    console.log("Hello!")

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
