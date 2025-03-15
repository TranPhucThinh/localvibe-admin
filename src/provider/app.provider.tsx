import { AppContext, initialAppContext } from '@/contexts/app.context'
import React, { useState } from 'react'

type Props = {
  children: React.ReactNode
}

export const AppProvider = (props: Props) => {
  const { children } = props

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(initialAppContext.isAuthenticated)

  return <AppContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>{children}</AppContext.Provider>
}
