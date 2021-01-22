import React from 'react'
import { Text, SafeAreaView } from 'react-native'

import { useTheme } from '../../hooks/theme-provider'

import styles from './styles'

const Main: React.FC = () => {
    const { theme } = useTheme()

    const style = styles(theme === 'dark')

    return (
        <SafeAreaView style={style.container}>
            <Text style={style.title}>Color scheme: {theme}</Text>
        </SafeAreaView>
    )
}

export default Main
