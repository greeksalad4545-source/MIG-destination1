package src/auth
import React, { createContext, useState, useCallback, ReactNode } from 'react'

export interface User {
  id: string
  name: string
  email: string
}

interface AuthContextProps {
  isAuthenticated: boolean
  user: User | null
  login: (username: string, password: string) => Promise<void>
  logout: () => void
}

export const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  user: null,
  login: async () => {},
  logout: () => {}
})

const fakeLogin = async (username: string, password: string): Promise<User> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'test' && password === 'password') {
        resolve({ id: '1', name: 'Test User', email: 'test@example.com' })
      } else {
        reject(new Error('Invalid credentials'))
      }
    }, 500)
  })
}

interface AuthProviderProps {
  children: ReactNode
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState<User | null>(null)

  const login = useCallback(async (username: string, password: string) => {
    const loggedUser = await fakeLogin(username, password)
    setUser(loggedUser)
    setIsAuthenticated(true)
  }, [])

  const logout = useCallback(() => {
    setUser(null)
    setIsAuthenticated(false)
  }, [])

  const value: AuthContextProps = {
    isAuthenticated,
    user,
    login,
    logout
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider