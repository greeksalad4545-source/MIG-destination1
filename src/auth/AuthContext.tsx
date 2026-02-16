package src/auth
import React, { createContext, useContext, useState, ReactNode } from 'react'

export interface User {
  id: string
  name: string
}

export interface AuthState {
  isAuthenticated: boolean
  user: User | null
}

export interface AuthActions {
  login: (user: User) => Promise<void>
  logout: () => void
}

export type AuthContextType = {
  state: AuthState
  actions: AuthActions
}

const defaultContext: AuthContextType = {
  state: {
    isAuthenticated: false,
    user: null,
  },
  actions: {
    login: async () => {
      throw new Error('AuthContext: login called outside of AuthProvider')
    },
    logout: () => {
      throw new Error('AuthContext: logout called outside of AuthProvider')
    },
  },
}

export const AuthContext = createContext<AuthContextType>(defaultContext)

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [state, setState] = useState<AuthState>({
    isAuthenticated: false,
    user: null,
  })

  const login = async (user: User): Promise<void> => {
    setState({ isAuthenticated: true, user })
  }

  const logout = (): void => {
    setState({ isAuthenticated: false, user: null })
  }

  const value: AuthContextType = {
    state,
    actions: { login, logout },
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const UseAuth = (): AuthContextType => {
  return useContext(AuthContext)
}