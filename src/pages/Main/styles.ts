import { StyleSheet } from 'react-native'

export const light = {
    backgroundColor: '#F0F0F0',
    title: '#32264D',
}

export const dark = {
    backgroundColor: '#32264D',
    title: '#F0F0F0',
}

export const themes = { light, dark }

export default (dark: boolean) => StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: themes[dark ? 'dark' : 'light'].backgroundColor,
        padding: 32,
    },

    title: {
        color: themes[dark ? 'dark' : 'light'].title,
        fontWeight: 'bold',
        fontSize: 28,
    },
})
