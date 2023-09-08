import { createContext, useContext } from "react";
import Youtube from "../api/youtube";
import YoutubeMock from "../api/youtubeMock";

export const YoutubeApiContext = createContext();

// toggle youtubeMock/youtube here
// const youtube = new YoutubeMock();
const youtube = new Youtube();

export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
