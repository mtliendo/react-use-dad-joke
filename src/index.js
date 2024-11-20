import * as React from "react";
import { fetchDadJoke } from "./services/fetchDadJoke";

console.log("hello from index.js");
const dadJokeReducer = (state, action) => {
  switch (action.type) {
    case "isLoading":
      return { ...state, isLoading: action.isLoading, dadJoke: action.dadJoke };
    case "hasError":
      return { ...state, error: action.error };
    case "setDadJoke":
      return { ...state, dadJoke: action.dadJoke };
    default:
      throw newError("unexpected action provided");
  }
};

const initialState = {
  isLoading: true,
  error: null,
  dadJoke: null,
};
export const useDadJoke = () => {
  const [dadJokeState, dispatch] = React.useReducer(
    dadJokeReducer,
    initialState
  );

  React.useEffect(() => {
    dispatch({ type: "hasError", error: null });

    fetchDadJoke()
      .then((dadJoke) => {
        dispatch({ type: "isLoading", isLoading: false, dadJoke });
      })
      .catch((e) => {
        console.error(e.message);
        dispatch({ type: "isLoading", isLoading: false });
        dispatch({ type: "hasError", error: e.message });
      });
  }, []);

  return dadJokeState;
};
