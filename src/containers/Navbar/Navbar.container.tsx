import { Switch } from '@headlessui/react'
import { ChartBarSquareIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react'

interface NavbarProps {
  setIsHowToPlayDialogOpen: (value: boolean) => void
  setIsStatsModalOpen: (value: boolean) => void
}

/**
 * The Navbar' container
 */
const Navbar = ({ setIsHowToPlayDialogOpen, setIsStatsModalOpen }: NavbarProps) => {
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
    <section className="py-10">
      <div className="flex h-24 w-[640px] items-center justify-between rounded-2xl bg-[#F3F3F3] px-6 py-4 dark:bg-[#DADCE008] max-sm:w-[90%]">
        <div className="flex w-[105px]">
          <QuestionMarkCircleIcon
            className="h-8 w-8 cursor-pointer text-[#818181] dark:text-[#DADCE0]"
            onClick={() => setIsHowToPlayDialogOpen(true)}
          />
        </div>

        <p className="flex text-5xl font-bold uppercase text-[#202537] dark:text-[#DADCE0]">
          Wordle
        </p>

        <div className="flex w-[105px] gap-3">
          <ChartBarSquareIcon
            className="h-8 w-8 cursor-pointer text-[#818181] dark:text-[#DADCE0]"
            onClick={() => setIsStatsModalOpen(true)}
          />

          <Switch
            checked={!isDarkMode}
            className={`${
              !isDarkMode
                ? "bg-[url('/src/assets/images/toggle-light.svg')]"
                : "bg-[url('/src/assets/images/toggle-dark.svg')]"
            } duratio relative inline-flex h-[32px] w-[60px] shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-cover bg-center bg-origin-border transition-colors ease-in-out focus:outline-none`}
            onChange={handleToggleTheme}
          >
            <span className="sr-only">Use toggle</span>
            <span
              aria-hidden="true"
              className={`${
                !isDarkMode
                  ? "translate-x-6 bg-[url('/src/assets/images/sun.svg')]"
                  : "translate-x-0 bg-[url('/src/assets/images/moon.svg')]"
              }
            pointer-events-none inline-block h-[32px] w-[32px] transform rounded-full bg-cover bg-center bg-origin-border ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
        </div>
      </div>
    </section>
  )
}
export default Navbar
