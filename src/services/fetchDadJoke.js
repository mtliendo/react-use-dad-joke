import axios from "axios";

export const fetchDadJoke = async () => {
  const { data: dadJoke } = await axios
    .get("https://icanhazdadjoke.com/", {
      headers: { Accept: "application/json" }
    })
    .catch(e => {
      return { error: "unable to load data..." };
    });

  return dadJoke;
};
