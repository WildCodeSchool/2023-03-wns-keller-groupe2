import { ReactNode, createContext, useState } from "react";

interface ProviderProps {
  children: ReactNode;
}

interface Order {
  locationOfStart: Date | null;
  dateOfStart: string | null;
  locationOfEnd: Date | null;
  dateOfEnd: string | null;
}

export interface OrderContextType {
  order: Order;
  setOrder: (order: Order) => void;
}

const OrderContext = createContext<OrderContextType | null>(null);

function OrderProvider({ children }: ProviderProps) {
  const [order, setOrder] = useState({
    locationOfStart: null,
    dateOfStart: null,
    locationOfEnd: null,
    dateOfEnd: null,
  });

  return (
    <OrderContext.Provider value={{ order, setOrder } as OrderContextType}>
      {children}
    </OrderContext.Provider>
  );
}

export default OrderProvider;
export { OrderContext };
