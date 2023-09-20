import { useState, createContext } from 'react'

export const AuthContext = createContext({})

export default function AuthProvider({ children }) {
  const [user, setUser] = useState({
    email: '',
    keepConnected: false
  })

  function SignIn(email) {
    setUser({ email })
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
