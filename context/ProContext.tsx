import { createContext, useContext } from "react";

export const ProContext = createContext<{ proId?: string }>({});

export const usePro = () => useContext(ProContext);
