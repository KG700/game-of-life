import React, { Component } from 'react';
import './App.css';

const NUMBER_OF_ROWS = 20;
const NUMBER_OF_COLUMNS = 30;

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

      </div>
    );
  }
}

export default App;
