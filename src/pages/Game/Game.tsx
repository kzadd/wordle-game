import HowToPlayDialogContainer from '@/containers/HowToPlayDialog'
import KeyboardContainer from '@/containers/Keyboard'
import NavbarContainer from '@/containers/Navbar'
import StatisticsDialogContainer from '@/containers/StatisticsDialog'
import WordleGameContainer from '@/containers/WordleGame'

/**
 * The Game' page
 */
const Game = () => {
  return (
    <main className="flex h-screen flex-col items-center justify-center bg-[#f9f9f9] dark:bg-[#262B3C]">
      <NavbarContainer />
      <WordleGameContainer />
      <KeyboardContainer />
      <HowToPlayDialogContainer />
      <StatisticsDialogContainer />
    </main>
  )
}

export default Game
