import React from 'react'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'

import { useTheme } from '../../hooks/theme-provider'

import styles from './styles'

const Main: React.FC = () => {
    const { theme, setTheme } = useTheme()

    const setLightTheme = () => setTheme('light')
    const setDarkTheme = () => setTheme('dark')
    const setDefaultTheme = () => setTheme('device-default')

    const style = styles(theme)

    return (
        <SafeAreaView style={style.container}>
            <Text style={style.title}>Color scheme: {theme}</Text>

            <View style={style.header}>
                <TouchableOpacity style={style.button} onPress={setLightTheme}>
                    <Text style={style.links}>Light</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.button} onPress={setDarkTheme}>
                    <Text style={style.links}>Dark</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.button} onPress={setDefaultTheme}>
                    <Text style={style.links}>Device</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Main
