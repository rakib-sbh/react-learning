export const generateRandomNumber = (high) => {
  return Math.floor(Math.random() * high) + 1;
};

export const createState = () => {
  return {
    goal: generateRandomNumber(50),
    level: 1,
    attempt: 0,
    attemptLeft: generateRandomNumber(15),
    type: "Started",
    currentScore: 0,
    totalScore: 0,
    isWon: false,
    isLoose: false,
  };
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "WON":
      return {
        ...state,
        currentScore: action.data,
        totalScore: state.totalScore + action.data,
        type: "You won the game",
        attempt: state.attempt + 1,
        attemptLeft: state.attemptLeft - 1,
        isWon: true,
      };
    case "ADD":
      return {
        ...state,
        currentScore: action.data,
        totalScore: state.totalScore + action.data,
        type: "Game is going",
        attempt: state.attempt + 1,
        attemptLeft: state.attemptLeft - 1,
      };
    case "NOTADD":
      return {
        ...state,
        currentScore: action.data,
        totalScore: state.totalScore,
        type: "Game is going",
        attempt: state.attempt + 1,
        attemptLeft: state.attemptLeft - 1,
      };

    case "LOOSE":
      return {
        ...state,
        type: "You loose the game",
        isLoose: true,
      };
    case "RESET":
      return {
        ...createState(),
        isLoose: false,
      };
    case "NEXTLEVEL":
      return {
        ...createState(),
        level: state.level + 1,
        isWon: false,
      };
    default:
      return state;
  }
};
