import Square from "./square"
import { useEffect } from "react";
const Board = ({onClick , board , onBoard})=>{

//when enters the board page or the board reloads 
  useEffect(() => {
    onBoard();
  }); // Empty array means this runs only once

    return(
    <div className="board">
      <Square className="square" id={0} onClick={onClick} state={board[0]}/>
      <Square className="square" id={1} onClick={onClick} state={board[1]}/>
      <Square className="square" id={2} onClick={onClick} state={board[2]}/>
      <Square className="square" id={3} onClick={onClick} state={board[3]}/>
      <Square className="square" id={4} onClick={onClick} state={board[4]}/>     
      <Square className="square" id={5} onClick={onClick} state={board[5]}/>
      <Square className="square" id={6} onClick={onClick} state={board[6]}/>
      <Square className="square" id={7} onClick={onClick} state={board[7]}/>
      <Square className="square" id={8} onClick={onClick} state={board[8]}/>
    </div>
    )
}
export default Board;