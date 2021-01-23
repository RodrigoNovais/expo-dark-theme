import { StyleSheet } from 'react-native'

import { Themes } from '../../hooks/theme-provider'

import { themes } from '../../constants/colors'

export default (theme: Themes) => StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: themes[theme].backgroundColor,
        padding: 32,
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        marginVertical: 40,
    },

    title: {
        color: themes[theme].title,
        fontWeight: 'bold',
        fontSize: 28,
    },

    button: {
        width: 80,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 2,
    },

    links: {
        color: themes[theme].text,
        fontSize: 16,
    },
})
