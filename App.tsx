import React, { Fragment } from 'react'
import { StatusBar } from 'expo-status-bar'

import Main from './src/pages/Main'

const App: React.FC = () => (
    <Fragment>
        <StatusBar style='auto' />
        <Main />
    </Fragment>
)

export default App
