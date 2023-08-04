import { useEffect, useState } from 'react'

/**
 * The WordleGame' container
 */
const WordleGame = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
    const theme = localStorage.getItem('theme')

    return theme ? theme === 'dark' : prefersDarkMode
  })

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else document.documentElement.classList.remove('dark')
  }, [isDarkMode])

  const handleToggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light')
  }

  return (
    <div>
      WordleGame
      <button
        className="rounded-3xl bg-gray-400 p-4 dark:bg-white dark:text-gray-400"
        onClick={handleToggleTheme}
      >
        Light / Dark
      </button>
    </div>
  )
}

export default WordleGame
