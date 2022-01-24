import { useState } from 'react'
import Square from './Square';

function Board(props) {
  const status = 'Next player: X';
  const [squares, setSquares] = useState(Array(9).fill(null));

  const handleSquareClick = (index) => {
    let squaresCopy = squares.slice(); //makes a copy of squares without a reference
    squaresCopy[index] = 'X';
    setSquares(squaresCopy);
  }

  const renderSquare = (index) => {
    return (
      <Square
        value={squares[index]}
        onClick={() => handleSquareClick(index)}
      />
    );
  }

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

export default Board;
