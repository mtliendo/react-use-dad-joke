import React from "react";
import { useDadJoke } from "@mtliendo/react-use-dad-jokes";

const App = () => {
  const { isLoading, error, dadJoke } = useDadJoke();

  if (isLoading) return "Loading...";

  if (error) return "uh oh...something went wrong";

  return <main>{dadJoke}</main>;
};
export default App;
