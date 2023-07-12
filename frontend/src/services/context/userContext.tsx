import { ReactNode, createContext, useState } from "react";

export interface User {
  id: number | null;
  admin: boolean | null;
  phonenum: string | null;
  gender: string | null;
  email: string | null;
  lastName: string | null;
  firstName: string | null;
}

export interface UserContextType {
  user: User;
  setUser: (user: User) => void;
}

export interface ProviderProps {
  children: ReactNode;
}

const defaultUser = null;
const UserContext = createContext<UserContextType | null>(defaultUser);

function Provider({ children }: ProviderProps) {
  const [user, setUser] = useState({
    id: null,
    admin: null,
    phonenum: null,
    gender: null,
    email: null,
    lastName: null,
    firstName: null,
  });

  return (
    <UserContext.Provider value={{ user, setUser } as UserContextType}>
      {children}
    </UserContext.Provider>
  );
}

export default Provider;
export { UserContext };
