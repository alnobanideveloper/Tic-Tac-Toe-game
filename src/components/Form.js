import { useState } from "react"
// import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';


const Form = ()=>{
    const navigate = useNavigate(); // Initialize the hook
   

    const [playerNames , setPlayerNames]= useState({
        firstPlayer:null,
        secondPlayer:null
    })

    const onSubmit = (e)=>{
        e.preventDefault()

        if(!playerNames.firstPlayer){
            alert("Enter first player name")
            return
        }

        if(!playerNames.secondPlayer){
            alert("Enter second player name")
            return
        }

        const Board = [null, null, null, null, null, null, null, null, null]; // Array of 9 nulls
        localStorage.setItem('board', JSON.stringify(Board));
        localStorage.setItem('gameState' , false)
        localStorage.setItem('firstPlayer' , playerNames.firstPlayer)
        localStorage.setItem('secondPlayer' , playerNames.secondPlayer)
        localStorage.setItem('playerState' , '0')
        navigate('/game');
    }

    return (
        <div className="form" onSubmit={onSubmit}>
        <form className="container">
            <div className="item">
                <label>player1 name: </label>
                <input type="text" id="player1" placeholder="X" 
                onChange={(e) => setPlayerNames({...playerNames , firstPlayer:e.target.value})}/>
            </div>
    
            <div className="item">
                <label >player2 name: </label>
                <input type="text" id="player2" placeholder="O" 
                onChange={(e) => setPlayerNames({...playerNames , secondPlayer:e.target.value})}/>
            </div>
    
            <input type="submit" className="item"/>
        </form>
     </div>
    )
}

export default Form
