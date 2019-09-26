import axiosMock from "axios";
import { fetchDadJoke } from "./fetchDadJoke";

jest.mock("axios");

describe("fetchDadJoke service", () => {
  afterEach(() => {
    axiosMock.get.mockClear();
  });
  test("it returns the correct data when succeeds", async () => {
    const mockData = {
      id: "R7UfaahVfFd",
      joke:
        "My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.",
      status: 200
    };

    axiosMock.get.mockResolvedValueOnce({ data: mockData });

    const data = await fetchDadJoke();
    expect(data).toEqual(mockData);
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(axiosMock.get).toHaveBeenCalledWith("https://icanhazdadjoke.com/", {
      headers: { Accept: "application/json" }
    });
  });
});
