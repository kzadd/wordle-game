import { useState } from 'react'
import HowToPlayDialogContainer from '@/containers/HowToPlayDialog'
import KeyboardContainer from '@/containers/Keyboard'
import NavbarContainer from '@/containers/Navbar'
import StatsDialogContainer from '@/containers/StatsDialog'
import WordleGameContainer from '@/containers/WordleGame'

/**
 * The Game' page
 */
const Game = () => {
  const [isHowToPlayDialogOpen, setIsHowToPlayDialogOpen] = useState(false)
  const [isStatsModalOpen, setIsStatsModalOpen] = useState(false)

  return (
    <main className="h-screen">
      <div className="flex h-full flex-col items-center bg-[#f9f9f9] dark:bg-[#262B3C]">
        <NavbarContainer
          setIsHowToPlayDialogOpen={setIsHowToPlayDialogOpen}
          setIsStatsModalOpen={setIsStatsModalOpen}
        />
        <WordleGameContainer />
        <KeyboardContainer />
        <HowToPlayDialogContainer
          isOpen={isHowToPlayDialogOpen}
          onClose={() => setIsHowToPlayDialogOpen(false)}
        />
        <StatsDialogContainer
          isOpen={isStatsModalOpen}
          onClose={() => setIsStatsModalOpen(false)}
        />
      </div>
    </main>
  )
}

export default Game
