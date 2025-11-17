import React, { useEffect } from 'react'

export const ThemeWrapper: React.FC<{ theme: string; children: React.ReactNode }> = ({ theme, children }) => {
  useEffect(() => {
    const htmlElement = document.documentElement
    
    if (theme === 'dark') {
      htmlElement.classList.add('dark')
    } else {
      htmlElement.classList.remove('dark')
    }
  }, [theme])

  return <>{children}</>
}
