import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import React, { createContext, useState } from 'react'

interface IProps {
  children: React.ReactNode
}
export const MantineContext = createContext(null)
const MantineUI: React.FunctionComponent<IProps> = ({ children }) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark')
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  return (
    <MantineContext.Provider value={{ toggleColorScheme, colorScheme }}>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <Notifications autoClose={4000} />
        <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
          {children}
        </MantineProvider>
      </ColorSchemeProvider>
    </MantineContext.Provider>
  )
}
export default MantineUI
