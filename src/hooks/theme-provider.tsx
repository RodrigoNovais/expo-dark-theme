import React, { Fragment, createContext, useEffect, useState } from 'react'

import { Appearance, AppearanceProvider, ColorSchemeName, useColorScheme } from 'react-native-appearance'
import { StatusBar } from 'expo-status-bar'

export type ThemeContextData = {
    theme: ColorSchemeName
}

const defaultMode: ColorSchemeName = 'light'
const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData)

export const useTheme = () => {
    const context = React.useContext(ThemeContext)

    if (!context)
        throw new Error('useTheme must be used within an ThemeContext')

    return context
}

export const ThemeProvider: React.FC = ({ children }) => {
    const colorScheme = useColorScheme()

    const [theme, setTheme] = useState<ColorSchemeName>(colorScheme === 'no-preference' ? defaultMode : colorScheme)

    useEffect(() => {
        const subscription = Appearance.addChangeListener(preferences => {
            setTheme(preferences.colorScheme)
        })

        return () => subscription.remove()
    })

    return (
        <AppearanceProvider>
            <ThemeContext.Provider value={{ theme }}>
                <Fragment>
                    <StatusBar style={theme === 'dark' ? 'light' : 'dark'} />
                    {children}
                </Fragment>
            </ThemeContext.Provider>
        </AppearanceProvider>
    )
}

export default ThemeProvider
