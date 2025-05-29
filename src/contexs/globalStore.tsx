import { createContext, useContext, useState, type ReactNode } from 'react';

interface GlobalContextType {
  isStart: boolean;
  setIsStart: (value: boolean) => void;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [isStart, setIsStart] = useState(false);

  return (
    <GlobalContext.Provider value={{ isStart, setIsStart }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};