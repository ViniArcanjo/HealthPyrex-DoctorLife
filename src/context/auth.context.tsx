import { useState, createContext } from "react";

type AuthData = {
  user: any;
  signIn: (any) => void;
  setKeepConnected: (any) => void;
};

export const AuthContext = createContext({} as AuthData);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState({
    email: "",
    password: "",
    role: "",
    keepConnected: false,
  });

  function signIn(userData) {
    setUser(userData);
  }

  function setKeepConnected(keepConnected) {
    setUser({ ...user, keepConnected });
  }

  return (
    <AuthContext.Provider value={{ user, signIn, setKeepConnected }}>
      {children}
    </AuthContext.Provider>
  );
}
