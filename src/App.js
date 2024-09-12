import './App.css';
import Header from './components/header';
import Board  from './components/board';
import Form from './components/Form';
import Footer from './components/Footer';
import { BrowserRouter as Router , Route ,Routes} from 'react-router-dom';
import { useState } from 'react';
function App() {

  const [playerNames , setPlayerNames] = useState([null , null])
  const [player , setPlayer] = useState(localStorage.getItem('playerState'))
  const [boardState , setBoardState] = useState([null,null,null,null,null,null,null,null,null])
  const [gameState , setGameState] = useState(false)

  const setNames  = (firstPlayer , secondPlayer) => {
    setPlayerNames([firstPlayer , secondPlayer]);
  }

  const onBoardLoad = ()=>{
    const firstPlayer = localStorage.getItem('firstPlayer')
    const secondPlayer = localStorage.getItem('secondPlayer')
    const gameState = JSON.parse(localStorage.getItem('gameState'))
    const Board = JSON.parse(localStorage.getItem('board'))
    const player = JSON.parse(localStorage.getItem('playerState'))

    setNames(firstPlayer,secondPlayer);
    setBoardState(Board);
    setGameState(gameState);
    setPlayer(player);
  }

  const switchPlayer = ()=>{
    localStorage.setItem("playerState" , !player);
    setPlayer(!player);
  }

  const onClick =  (id)=>{
  if(!gameState){
    if(boardState[id] == null){
    
      const newBoard = boardState.map((element , index)=>
        index === id ?(player ? 'o' : 'x' ): element)
      

      setBoardState(newBoard)
      checkGame(newBoard);
      switchPlayer();
      localStorage.setItem('board' , JSON.stringify(newBoard));
    }
  }
}  
  const checkGame =(newBoard)=>{
    if(
      (newBoard[0] === newBoard[1] && newBoard[1] === newBoard[2] && newBoard[0] != null) || 
      (newBoard[3] === newBoard[4] && newBoard[4] === newBoard[5] && newBoard[3] != null) ||
      (newBoard[6] === newBoard[7] && newBoard[7] === newBoard[8] && newBoard[6] != null)){
        setGameState(true);
        localStorage.setItem('gameState' , 'true')
    }

    else if(
      (newBoard[0] === newBoard[3] && newBoard[3] === newBoard[6] && newBoard[0] != null) || 
      (newBoard[1] === newBoard[4] && newBoard[4] === newBoard[7] && newBoard[1] != null) ||
      (newBoard[2] === newBoard[5] && newBoard[5] === newBoard[8] && newBoard[2] != null)){
        setGameState(true)
        localStorage.setItem('gameState' , 'true')

      }


    else if(
      (newBoard[0] === newBoard[4] && newBoard[4] === newBoard[8] && newBoard[0] != null)||
      (newBoard[2] === newBoard[4] && newBoard[4] === newBoard[6] && newBoard[2] != null)){
        setGameState(true)  
        localStorage.setItem('gameState' , 'true')
      }
  }

  const checkWinner = ()=>{
    let p = playerNames[Number(!player)]
    return p
  }

  const onReset = ()=>{
    const Board = [null, null, null, null, null, null, null, null, null]; // Array of 9 nulls
    localStorage.setItem('board', JSON.stringify(Board));
    localStorage.setItem('gameState' , false)
    localStorage.setItem('playerState' , '0')

    setBoardState(Board)
    setGameState(false)
    setPlayer(0)
  }

  return (
    <Router>
    <div className="App">
    <Routes>
      <Route path='/' 
      element={<Form setNames = {setNames}/>}
      />

      <Route path='/game' element={
        <>
      <Header showPlayer={player} playerNames = {playerNames} reset={onReset}/>
      {<Board onClick = {onClick} board={boardState} onBoard = {onBoardLoad}/>}
        </>
      }/>

    </Routes>
     {gameState && <Footer player = {checkWinner()}/>}
    </div >
    </Router>
  );
}

export default App;
