import HowToPlayDialogContainer from '@/containers/HowToPlayDialog'
import StatisticsDialogContainer from '@/containers/StatisticsDialog'
import WordleGameContainer from '@/containers/WordleGame'

/**
 * The Game' page
 */
const Game = () => {
  return (
    <main className="flex h-screen flex-col items-center justify-center bg-[#f9f9f9]">
      <WordleGameContainer />
      <HowToPlayDialogContainer />
      <StatisticsDialogContainer />
    </main>
  )
}

export default Game
