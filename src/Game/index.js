import React from "react";

//import './Game.css';

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    const numRows = 3;
    const numCols = 3;
    const numBlocks = 0;
    var squaresList = [];

    for (var i = 0; i < numRows; i++) {
      for (var j = 0; j < numCols; j++) {
        squaresList.push(
          <div>{this.renderSquare(numBlocks)}</div>
        );
      }
    }
    return squaresList;
  }
}

const


export class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      stepNumber: 0,
      xIsNext: true,
      // position: []
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    const grid = this.makeCoordinates();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";

    var clickedPosition = this.getCoordinates(i, grid);

    this.setState({
      history: [
        ...history,
        {
          squares: squares,
          position: clickedPosition,
        },
      ],
      // position: [...this.state.position, clickedPosition],
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }

  makeCoordinates() {
    let coordinates = [];
    for (let a = 1; a <= 3; a++) {
      for (let b = 1; b <= 3; b++) {
        coordinates.push({
          row: a,
          col: b,
        });
      }
    }
    return coordinates;
  }

  getCoordinates(i, array) {
    return "Clicked position: " + array[i].row + " " + array[i].col;
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    //const position = this.state.position;

    // const currentPosition = position[position.length - 1];

    const moves = history.map((historyItem, move) => {
      const desc = move ? "Got to move #" + move : "Go to start game";
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
          <div> {historyItem.position} </div>
        </li>
      );
    });

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
