"use client";
import { createContext, useState } from "react";

export const countContext = createContext();
export default function CountContext({ children }) {
  const [change, setChange] = useState(false);
  return (
    <countContext.Provider value={{ change, setChange }}>
      {children}
    </countContext.Provider>
  );
}
