import { ReactNode, createContext, useState } from "react";

interface Rent {
  id: number | null;
}

export interface RentContextType {
  rent: Rent;
  setRent: (rent: Rent) => void;
}

interface ProviderProps {
  children: ReactNode;
}

const RentContext = createContext<RentContextType | null>(null);

function Provider({ children }: ProviderProps) {
  const [rent, setRent] = useState({
    id: null,
  });

  return (
    <RentContext.Provider value={{ rent, setRent } as RentContextType}>
      {children}
    </RentContext.Provider>
  );
}

export default Provider;
export { RentContext };
