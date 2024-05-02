import { useEffect, useReducer, useState } from 'react'

import style from "./Game.module.css"

const reducer = (state, action) => {
    switch (action.type) {
        case "GOING":
            return { ...state, current: "Game Going" }
        case "WON":
            console.log("Won");
            return { ...state, current: "You won the game" }
        case "LOOSE":
            console.log("Loose");
            return { ...state, current: "You lose the game" }
    }
}

const generateRandomNumber = (high) => {
    return Math.floor(Math.random() * high) + 1;
}

const Game = () => {

    const [gameState, dispatch] = useReducer(reducer, {
        current: "Started"
    })

    const [level, setLevel] = useState(1);
    const [goal, setGoal] = useState(generateRandomNumber(50));
    const [attempt, setAttempt] = useState(0);
    const [attemptLeft, setAttemptLeft] = useState(generateRandomNumber(15));
    const [currentScore, setCurrentScore] = useState(0);
    const [totalScore, setTotalScore] = useState(0);

    const handleClick = () => {
        setCurrentScore(generateRandomNumber(5));
        setAttemptLeft(attemptLeft - 1);
        setAttempt(attempt + 1);
        dispatch({ type: "GOING" })
    }

    useEffect(() => {
        console.log("Current Score:", currentScore);
        console.log("Total Score: ", totalScore);
        console.log("----");
        if (totalScore + currentScore <= goal && attemptLeft >= 0) {
            if (totalScore + currentScore == goal) {
                setTotalScore(totalScore + currentScore);
                // setLevel(level + 1);
                // // setGoal(generateRandomNumber(50));
                // setAttempt(0);
                // setAttemptLeft(generateRandomNumber(15));
                // setCurrentScore(0);
                dispatch({ type: "WON" })
            } else {
                setTotalScore(totalScore + currentScore);
                dispatch({ type: "GOING" })
            }
        }

        if (attemptLeft == 0) {
            setLevel(1);
            setGoal(generateRandomNumber(50));
            setAttempt(0);
            setAttemptLeft(generateRandomNumber(15));
            setCurrentScore(0);
            setTotalScore(0);
            dispatch({ type: "LOOSE" })
        }
    }, [currentScore, attemptLeft, attempt]);

    return (
        <div className={style.container}>
            <div className={style.header}>
                <h2>Level : {level}</h2>
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