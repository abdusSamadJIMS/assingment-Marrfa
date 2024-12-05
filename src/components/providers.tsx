'use client'
import React from 'react'
import { ThemeProvider as NextThemeProvider } from 'next-themes'

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <NextThemeProvider attribute={'class'} defaultTheme='dark'>
            {children}
        </NextThemeProvider>
    )
}

export default Providers