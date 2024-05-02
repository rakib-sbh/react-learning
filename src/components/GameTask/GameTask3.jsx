import { useReducer, useRef, useState } from "react";
import style from "./Game.module.css"

const generateRandomNumber = (high) => {
    return Math.floor(Math.random() * high) + 1;
}

const initState = {
    goal: generateRandomNumber(50),
    level: 1,
    attempt: 0,
    attemptLeft: generateRandomNumber(15),
    type: "Started",
    currentScore: 0,
    totalScore: 0,
    isWon: false
}

const reducer = (state, action) => {
    switch (action.type) {
        case "WON":
            return {
                ...state,
                currentScore: action.data,
                totalScore: state.totalScore + action.data,
                level: state.level + 1,
                type: "You won the game",
                attempt: state.attempt + 1,
                attemptLeft: state.attemptLeft - 1
            }
        case "GOING":
            return {
                ...state,
                currentScore: action.data,
                totalScore: state.totalScore + action.data,
                type: "Game is going",
                attempt: state.attempt + 1,
                attemptLeft: state.attemptLeft - 1
            }
        case "LOOSE":
            return {
                ...state,
                type: "You loose the game"
            }
        case "RESET":
            return initState;
        case "NEXTLEVEL":
            return {
                ...state
            }
        default:
            return state;
    }
}

const GameTask3 = () => {
    const [gameState, dispatch] = useReducer(reducer, initState)

    const [isWon, setIsWon] = useState(false);

    const handleClick = () => {
        const newScore = generateRandomNumber(5);
        if (gameState.totalScore + newScore === gameState.goal && gameState.attemptLeft >= 1) {
            // won the game
            dispatch({ type: "WON", data: newScore });
        } else if (gameState.totalScore + newScore < gameState.goal && gameState.attemptLeft >= 1) {
            dispatch({ type: "GOING", data: newScore });
        }

        if (gameState.attemptLeft === 1 && gameState.totalScore + newScore !== gameState.goal) {
            dispatch({ type: "LOOSE" })
        }
    }

    return (
        <div className={style.container}>
            <div className={style.header}>
                <h2>Level : {gameState.level}</h2>
                <h2>Attemp : {gameState.attempt}</h2>
                <h2>Attempt Left : {gameState.attemptLeft}</h2>
                <h2>Total Score : {gameState.totalScore}</h2>
            </div>

            <div className={style.game}>
                <h2>Goal : {gameState.goal}</h2>
                <h2>
                    <button className={style.btn} onClick={handleClick}>Play</button>
                </h2>
                <h2>Current Score : {gameState.currentScore}</h2>
            </div>

            <h2 className={style.scoreBoard}>
                Score Board
            </h2>
            <h2 className={style.score}>
                {gameState.type}
            </h2>
        </div>
    )
}

export default GameTask3;