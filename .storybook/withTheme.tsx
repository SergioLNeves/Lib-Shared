import React from 'react'
import type { Decorator } from '@storybook/react-vite'
import { ThemeWrapper } from './ThemeWrapper'

export const withTheme: Decorator = (StoryFn, context) => {
  const theme = context.globals.theme || 'light'

  return (
    <ThemeWrapper theme={theme}>
      <StoryFn />
    </ThemeWrapper>
  )
}
