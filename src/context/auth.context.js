import { useState, createContext } from 'react'

export const AuthContext = createContext({})

export default function AuthProvider({ children }) {
  const [user, setUser] = useState({
    email: '',
    password: '',
    role: '',
    keepConnected: false
  })

  function SignIn(userData) {
    setUser(userData)
  }

  function setKeepConnected(keepConnected) {
    setUser({ ...user, keepConnected })
  }

  return (
    <AuthContext.Provider value={{ user, SignIn, setKeepConnected }}>
      {children}
    </AuthContext.Provider>
  )
}
