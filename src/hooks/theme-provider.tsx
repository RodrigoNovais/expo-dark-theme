import React, { Fragment, createContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { Appearance, AppearanceProvider, ColorSchemeName, useColorScheme } from 'react-native-appearance'
import { StatusBar } from 'expo-status-bar'

export type Themes = 'light' | 'dark'
export type ThemeOptions = Themes | 'device-default'

export type ThemeContextData = {
    theme: Themes
    setTheme: (mode: ThemeOptions) => void
}

const defaultTheme: ThemeOptions = 'device-default'
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

    const [theme, setTheme] = useState<Themes>('light')
    const [userTheme, setUserTheme] = useState<ThemeOptions>(defaultTheme)
    const [deviceMode, setDeviceMode] = useState<ColorSchemeName>(colorScheme === 'no-preference' ? defaultMode : colorScheme)

    const storeTheme = async (theme: Themes) => {
        setTheme(theme)
        await AsyncStorage.setItem('@settings:theme', theme)
    }

    useEffect(() => {
        const loadStorageData = async () => {
            const themeStorage = await AsyncStorage.getItem('@settings:theme') as Themes
            if (!!themeStorage) setTheme(themeStorage)
        }

        loadStorageData()
    }, [])

    useEffect(() => {
        if (userTheme !== 'device-default') storeTheme(userTheme)
        else if (deviceMode === 'no-preference') storeTheme(defaultMode)
        else storeTheme(deviceMode)
    }, [userTheme, deviceMode])

    useEffect(() => {
        const subscription = Appearance.addChangeListener(preferences => {
            setDeviceMode(preferences.colorScheme)
        })

        return () => subscription.remove()
    })

    return (
        <AppearanceProvider>
            <ThemeContext.Provider value={{ theme, setTheme: setUserTheme }}>
                <Fragment>
                    <StatusBar style={theme === 'dark' ? 'light' : 'dark'} />
                    {children}
                </Fragment>
            </ThemeContext.Provider>
        </AppearanceProvider>
    )
}

export default ThemeProvider
