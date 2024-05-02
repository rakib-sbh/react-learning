import { useReducer } from "react";

import style from "./Game.module.css";
import { reducer, createState, generateRandomNumber } from "./utils";

const GameTask3 = () => {
  const [gameState, dispatch] = useReducer(reducer, createState());

  const handleClick = () => {
    if (gameState.isWon) {
      dispatch({ type: "NEXTLEVEL", data: 0 });
      return;
    }
    if (gameState.isLoose) {
      dispatch({ type: "RESET", data: 0 });
      return;
    }
    let newScore = generateRandomNumber(5);
    let attempCount = gameState.attemptLeft - 1;
    if (
      gameState.totalScore + newScore === gameState.goal &&
      attempCount >= 0
    ) {
      dispatch({ type: "WON", data: newScore });
    } else if (
      gameState.totalScore + newScore < gameState.goal &&
      attempCount >= 0
    ) {
      dispatch({ type: "ADD", data: newScore });
    } else if (gameState.totalScore + newScore > gameState.goal) {
      dispatch({ type: "NOTADD", data: newScore });
    }

    if (
      attempCount === 0 &&
      gameState.totalScore + newScore !== gameState.goal
    ) {
      dispatch({ type: "LOOSE" });
    }
  };

  const filledArray = Array(gameState.totalScore).fill(0);

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
          <button className={style.btn} onClick={handleClick}>
            {gameState.isWon
              ? "Play Next Level"
              : gameState.isLoose
              ? "Restart"
              : "Play"}
          </button>
        </h2>
        <h2>Current Score : {gameState.currentScore}</h2>
      </div>

      <h2 className={style.scoreBoard}>Score Board</h2>
      <div className={style.scoreArray}>
        {filledArray.map((_item, index) => {
          return <div className={style.box} key={index}></div>;
        })}
      </div>
      <h2 className={style.score}>{gameState.type}</h2>
    </div>
  );
};

export default GameTask3;
