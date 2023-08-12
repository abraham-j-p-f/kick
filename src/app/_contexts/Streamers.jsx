"use client";
import { createContext, useState } from "react";

export const StreamersContext = createContext();

export default function Streamers({ children }) {
  const [streamersState, setStreamersState] = useState(true);

  return (
    <StreamersContext.Provider value={{ streamersState, setStreamersState }}>
      {children}
    </StreamersContext.Provider>
  );
}
