import { useEffect, useReducer, useState } from 'react'

import style from "./Game.module.css"

const reducer = (state, action) => {
    switch (action.type) {
        case "GOING":
            return { ...state, current: "Game Going" }
        case "WON":
            console.log("Won");
            return { ...state, current: "You won the game", level: state.level + 1 }
        case "LOOSE":
            console.log("Loose");
            return { ...state, current: "You lose the game", level: 1 }
        default:
            return state;
    }
}

const generateRandomNumber = (high) => {
    return Math.floor(Math.random() * high) + 1;
}

const Game = () => {

    const [gameState, dispatch] = useReducer(reducer, {
        current: "Started",
        level: 1
    })

    const [goal, setGoal] = useState(generateRandomNumber(50));
    const [attempt, setAttempt] = useState(0);
    const [attemptLeft, setAttemptLeft] = useState(generateRandomNumber(15));
    const [currentScore, setCurrentScore] = useState(0);
    const [totalScore, setTotalScore] = useState(0);

    const handleClick = () => {
        const newCurrentScore = generateRandomNumber(5);
        setCurrentScore(newCurrentScore);
        setAttempt(attempt + 1);
        const updatedAttemptLeft = attemptLeft - 1;
        setAttemptLeft(updatedAttemptLeft >= 0 ? updatedAttemptLeft : 0);
        if (totalScore + currentScore < goal) {
            setTotalScore(totalScore + newCurrentScore);
            dispatch({ type: "GOING" });
        } else if (totalScore + currentScore === goal) {
            setTotalScore(totalScore + currentScore);
            dispatch({ type: "WON" });
        } else if (attemptLeft === 1) {
            dispatch({ type: "LOOSE" })
        }
    }

    useEffect(() => {
        if (attemptLeft === 0 && totalScore !== goal) {
            dispatch({ type: "LOOSE" });
        } else if (totalScore === goal) {
            dispatch({ type: "WON" });
        }
    }, [attemptLeft, totalScore]);

    useEffect(() => {
        if (gameState.level > 1) {
            setGoal(generateRandomNumber(50));
        }
    }, [gameState.level])

    return (
        <div className={style.container}>
            <div className={style.header}>
                <h2>Level : {gameState.level}</h2>
                <h2>Attemp : {attempt}</h2>
                <h2>Attempt Left : {attemptLeft}</h2>
                <h2>Total Score : {totalScore}</h2>
            </div>

            <div className={style.game}>
                <h2>Goal : {goal}</h2>
                <h2>
                    <button className={style.btn} onClick={handleClick}>Play</button>
                </h2>
                <h2>Current Score : {currentScore}</h2>
            </div>

            <h2 className={style.scoreBoard}>
                Score Board
            </h2>
            <h2 className={style.score}>
                {gameState.current}
            </h2>
        </div>
    )
}

export default Game