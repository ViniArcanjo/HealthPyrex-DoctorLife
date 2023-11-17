import { useState, createContext } from "react";
import { User } from "../services/models/user";

type AuthData = {
  user: any;
  signIn: (any) => void;
  setKeepConnected: (any) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  onLeave: () => Promise<void>;
};

export const AuthContext = createContext({} as AuthData);

export default function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User>({
    email: "",
    role: "",
    keepConnected: false,
  });

  function signIn(userData) {
    setUser(userData);
  }

  function setKeepConnected(keepConnected) {
    setUser({ ...user, keepConnected });
  }

  async function onLeave() {
    await setIsLoggedIn(false), setUser({} as User);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        setKeepConnected,
        isLoggedIn,
        setIsLoggedIn,
        onLeave,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
