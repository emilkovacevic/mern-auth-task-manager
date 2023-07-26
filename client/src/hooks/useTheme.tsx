import { useState, useEffect } from 'react'

export const useThemeSwitcher = () => {
    const [theme, setTheme] = useState('')

    // daisyUI themes
    // corporate light theme
    // forest dark theme
    
    const handleThemeSwitch = () => {
        if (theme === 'dark') {
            localStorage.setItem('theme', 'corporate')
            setTheme('light')
            document.documentElement.setAttribute('data-theme', 'corporate')
        } else {
            localStorage.setItem('theme', 'forest')
            setTheme('dark')
            document.documentElement.setAttribute('data-theme', 'forest')
        }
    }

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme')
        if (
            savedTheme === 'forest' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            setTheme('forest')
            localStorage.setItem('theme', 'dark')
            document.documentElement.setAttribute('data-theme', 'forest')
        } else {
            setTheme('corporate')
            localStorage.setItem('theme', 'light')
            document.documentElement.setAttribute('data-theme', 'corporate')
        }
    }, [])

    return { theme, handleThemeSwitch }
}

export default useThemeSwitcher
