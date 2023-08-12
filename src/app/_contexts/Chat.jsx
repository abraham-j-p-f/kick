"use client";
import { createContext, useState } from "react";

export const ChatContext = createContext();

export default function Chat({ children }) {
  const [chatState, setChatState] = useState(true);

  return (
    <ChatContext.Provider value={{ chatState, setChatState }}>
      {children}
    </ChatContext.Provider>
  );
}
