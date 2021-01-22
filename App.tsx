import React from 'react'

import ThemeProvider from './src/hooks/theme-provider'
import Main from './src/pages/Main'

const App: React.FC = () => (
    <ThemeProvider>
        <Main />
    </ThemeProvider>
)

export default App
