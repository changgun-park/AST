import { createContext, useContext, useState } from "react";

export const CreateGameContext = createContext({});

type CreateGameContextProviderProps = {
  children: React.ReactNode;
};

export function CreateGameContextProvider({
  children,
}: CreateGameContextProviderProps) {
  const value = useState({});

  return (
    <CreateGameContext.Provider value={value}>
      {children}
    </CreateGameContext.Provider>
  );
}

export function useCreateGameContext() {
  const context = useContext(CreateGameContext);
  if (!context)
    throw new Error("CreateGameContextProvider 내부에서 사용해야 합니다.");
  return context;
}
