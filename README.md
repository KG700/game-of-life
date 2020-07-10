# Game of Life

## Overview
Game of Life is a cellular automation by the mathematician John Horton Conway. It simulates the evolution of cells based on an initial state and following a set of simple rules that determine which cells will be alive in the next iteration.

These rules include:
- Any live cell with fewer than two live neighbours will die in the next iteration.
- Any live cell with two or three live neighbours will survive to the next iteration.
- Any live cell with more than three live neighbours will die in the next iteration.
- And dead cell with exactly three live neighbours will become alive in the next iteration.

In this version of the simulation represents cells that are alive as the shape of a ball. Each cell is one of three colours which represent the number of neighbours the cells have, to align with the rules of the game. Light pink cells have fewer than two live neighbours, grey cells have two or three live neighbours and dark pink cells have more than three live neighbours.

Check it out here: https://admiring-meninsky-436249.netlify.app/
