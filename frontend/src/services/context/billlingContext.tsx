import { ReactNode, createContext, useState } from "react";

interface ProviderProps {
  children: ReactNode;
}

interface Billing {
  adress: String | null;
  additionnalAdress: string | null;
  zipCode: string | null;
  city: string | null;
}

export interface BillingContextType {
  billing: Billing;
  setBilling: (billing: Billing) => void;
}

const BillingContext = createContext<BillingContextType | null>(null);

function BillingProvider({ children }: ProviderProps) {
  const [billing, setBilling] = useState({
    adress: null,
    additionnalAdress: null,
    zipCode: null,
    city: null,
  });

  return (
    <BillingContext.Provider
      value={{ billing, setBilling } as BillingContextType}
    >
      {children}
    </BillingContext.Provider>
  );
}

export default BillingProvider;
export { BillingContext };
