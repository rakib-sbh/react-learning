import { useEffect } from "react";
import { useRef } from "react";
import { useReducer } from "react";

const initialState = {
  isRunning: false,
  time: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "START":
      return { ...state, isRunning: true };
    case "STOP":
      return { ...state, isRunning: false };
    case "RESET":
      return { isRunning: false, time: 0 };
    case "TICK":
      return { ...state, time: state.time + 1 };
    default:
      throw new Error();
  }
};

const Index = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const idRef = useRef();

  useEffect(() => {
    if (!state.isRunning) {
      return;
    }

    idRef.current = setInterval(() => dispatch({ type: "TICK" }), 1000);

    return () => {
      clearInterval(idRef.current);
      idRef.current = 0;
    };
  }, [state.isRunning]);

  return (
    <div>
      <span>{state.time}s</span>
      <button onClick={() => dispatch({ type: "START" })}>START</button>
      <button onClick={() => dispatch({ type: "STOP" })}>STOP</button>
    </div>
  );
};

export default Index;
