import { useEffect, useState } from 'react'
import {
  DICTIONARY_WORDS,
  HOW_TO_PLAY_DIALOG_MS,
  LETTERS_LENGTH,
  MAX_CHALLENGES,
  REVEAL_TIME_MS
} from '@/configs/constants'
import { GameStatus } from '@/types/wordle'
import { loadGameStateFromLocalStorage, saveGameStateToLocalStorage } from '@/utils/localStorage'
import { getWordOfDay, isValidWord } from '@/utils/words'
import { useAlert } from '@/context/AlertContext'
import { useWindow } from '@/hooks/useWindow'
import AlertContainer from '@/containers/Alert'
import HowToPlayDialogContainer from '@/containers/HowToPlayDialog'
import KeyboardContainer from '@/containers/Keyboard'
import NavbarContainer from '@/containers/Navbar'
import StatsDialogContainer from '@/containers/StatsDialog'
import WordleGameContainer from '@/containers/WordleGame'

/**
 * The Game' page
 */
const Game = () => {
  const { showError: showErrorAlert } = useAlert()

  const [completeWords, setCompleteWords] = useState<string[]>([])
  const [currentWord, setCurrentWord] = useState<string>('')
  const [gameStatus, setGameStatus] = useState<GameStatus>('playing')
  const [isHowToPlayDialogOpen, setIsHowToPlayDialogOpen] = useState(false)
  const [isRevealing, setIsRevealing] = useState<boolean>(false)
  const [isStatsModalOpen, setIsStatsModalOpen] = useState(false)
  const [turn, setTurn] = useState<number>(1)
  const [word, setGuessWord] = useState<string>('')

  const handleChar = (letter: string) => {
    const newWord = currentWord + letter
    setCurrentWord(newWord)
  }

  const handleDelete = () => {
    const newWord = currentWord.slice(0, -1)
    setCurrentWord(newWord)
  }

  const handleEnter = () => {
    if (currentWord === word) {
      setCompleteWords([...completeWords, currentWord])

      return setGameStatus('won')
    }

    if (turn === MAX_CHALLENGES) {
      setCompleteWords([...completeWords, currentWord])

      return setGameStatus('lost')
    }

    if (currentWord.length === LETTERS_LENGTH && !isValidWord(currentWord)) {
      return showErrorAlert('La palabra no existe')
    }

    setIsRevealing(true)

    setTimeout(() => {
      setIsRevealing(false)
    }, REVEAL_TIME_MS * LETTERS_LENGTH)

    setCompleteWords([...completeWords, currentWord])
    setTurn(turn + 1)
    setCurrentWord('')
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    const letter = event.key.toUpperCase()

    if (gameStatus !== 'playing') return

    if (event.key === 'Backspace' && currentWord.length > 0) return handleDelete()

    if (event.key === 'Enter' && currentWord.length === LETTERS_LENGTH && turn <= MAX_CHALLENGES) {
      return handleEnter()
    }

    if (currentWord.length >= LETTERS_LENGTH) return

    if (DICTIONARY_WORDS.includes(letter)) return handleChar(letter)
  }

  useWindow('keydown', handleKeyDown)

  useEffect(() => {
    if (!loadGameStateFromLocalStorage()) {
      setTimeout(() => {
        setIsHowToPlayDialogOpen(true)
      }, HOW_TO_PLAY_DIALOG_MS)
    }
  })

  // Initial get word for 5 min
  useEffect(() => {
    setGuessWord(getWordOfDay())
  }, [])

  useEffect(() => {
    saveGameStateToLocalStorage({ completeWords, solution: word })
  }, [completeWords, word])

  return (
    <main className="h-screen">
      <div className="flex h-full flex-col items-center bg-[#f9f9f9] dark:bg-[#262B3C]">
        <NavbarContainer
          setIsHowToPlayDialogOpen={setIsHowToPlayDialogOpen}
          setIsStatsModalOpen={setIsStatsModalOpen}
        />
        <WordleGameContainer
          completeWords={completeWords}
          currentWord={currentWord}
          gameStatus={gameStatus}
          isRevealing={isRevealing}
          turn={turn}
          word={word}
        />
        <KeyboardContainer />
        <HowToPlayDialogContainer
          isOpen={isHowToPlayDialogOpen}
          onClose={() => setIsHowToPlayDialogOpen(false)}
        />
        <StatsDialogContainer
          isOpen={isStatsModalOpen}
          onClose={() => setIsStatsModalOpen(false)}
        />
        <AlertContainer />
      </div>
    </main>
  )
}

export default Game
