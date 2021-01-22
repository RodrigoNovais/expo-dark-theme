import React from 'react'
import { Text, SafeAreaView } from 'react-native'

import styles from './styles'

const Main: React.FC = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Color scheme: light</Text>
        </SafeAreaView>
    )
}

export default Main
