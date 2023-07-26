import useThemeSwitcher from '../hooks/useTheme'

const ThemeButton = () => {
    const { theme, handleThemeSwitch } = useThemeSwitcher()
    return (
        <button 
            className='ml-6'
            onClick={handleThemeSwitch}>
            {theme === 'forest' ? '🌞' : '🌙'}
        </button>
    )
}

export default ThemeButton