'use client'

import { ThemeProvider } from 'next-themes'

const ThemeProviders = ({ children }) => {
    return <ThemeProvider attribute={'data-theme'}>{children}</ThemeProvider>
}

export default ThemeProviders