import { useState, useEffect } from "react";

const App = () => {
  const [ turn, setTurn ] = useState('X');
  const [ numArr, setNumArr ] = useState(["", "", "", "", "", "", "", "", ""]);
  const [ game, setGame ] = useState('Continuing');
  
  const handleTurn = (index: number) => {
    turn === 'X' ? setTurn('O') : setTurn('X');
    const newNumArr = [...numArr];
    turn === 'X' ? newNumArr[index] = 'X' : newNumArr[index] = 'O';
    setNumArr(newNumArr);
  }

  const handleGame = () => {
    for (let i = 0; i < numArr.length; i++) {
      if (
          (numArr[0] === 'X' && numArr[1] === 'X' && numArr[2] === 'X') || (numArr[0] === 'O' && numArr[1] === 'O' && numArr[2] === 'O')
          ||
          (numArr[2] === 'X' && numArr[5] === 'X' && numArr[8] === 'X') || (numArr[2] === 'O' && numArr[5] === 'O' && numArr[8] === 'O')
          ||
          (numArr[0] === 'X' && numArr[3] === 'X' && numArr[6] === 'X') || (numArr[0] === 'O' && numArr[3] === 'O' && numArr[6] === 'O')
          ||
          (numArr[3] === 'X' && numArr[4] === 'X' && numArr[5] === 'X') || (numArr[4] === 'O' && numArr[3] === 'O' && numArr[5] === 'O')
          ||
          (numArr[8] === 'X' && numArr[7] === 'X' && numArr[6] === 'X') || (numArr[7] === 'O' && numArr[8] === 'O' && numArr[6] === 'O')
          ||
          (numArr[6] === 'X' && numArr[4] === 'X' && numArr[2] === 'X') || (numArr[4] === 'O' && numArr[2] === 'O' && numArr[6] === 'O')
          ||
          (numArr[0] === 'X' && numArr[4] === 'X' && numArr[8] === 'X') || (numArr[4] === 'O' && numArr[0] === 'O' && numArr[8] === 'O')
          ||
          (numArr[7] === 'X' && numArr[4] === 'X' && numArr[1] === 'X') || (numArr[4] === 'O' && numArr[7] === 'O' && numArr[1] === 'O')
      ) {
        setGame('Over');
      }
    }
  }

  const restart = () => {
    setNumArr(["", "", "", "", "", "", "", "", ""]);
    setTurn('X');
    setGame('Continuing');
  }

  useEffect(() => {
    handleGame();
  }, [handleTurn])

  return (
    <div className="screen">
      <div id="board">
        {numArr.map((el, i) => <button onClick={game === 'Continuing' ? ()=>handleTurn(i) : ()=>null}className="box" key={i}>{el}</button>)}
      </div>
      <button onClick={restart} className="restart-btn">Restart</button>
    </div>
  );
}

export default App;
