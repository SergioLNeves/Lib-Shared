import React, { useEffect } from 'react'
import type { Decorator } from '@storybook/react-vite'

export const withTheme: Decorator = (StoryFn, context) => {
  const theme = context.globals.theme || 'light'

  useEffect(() => {
    const htmlElement = document.documentElement
    
    if (theme === 'dark') {
      htmlElement.classList.add('dark')
    } else {
      htmlElement.classList.remove('dark')
    }
  }, [theme])

  return <StoryFn />
}
