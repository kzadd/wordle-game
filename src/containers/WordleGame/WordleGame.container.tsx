import { useEffect, useState } from 'react'
import { DICTIONARY_WORDS, LETTERS_LENGTH, ROW_LENGTH } from '@/configs/constants'
import { GameStatus } from '@/types/wordle'
import CompletedRow from '@/components/CompletedRow'
import CurrentRow from '@/components/CurrentRow'
import EmptyRow from '@/components/EmptyRow'
import { useWindow } from '@/hooks/useWindow'

/**
 * The WordleGame' container
 */
const WordleGame = () => {
  const [completeWords, setCompleteWords] = useState<string[]>([])
  const [currentWord, setCurrentWord] = useState<string>('')
  const [gameStatus, setGameStatus] = useState<GameStatus>('playing')
  const [turn, setTurn] = useState<number>(1)
  const [wordOfTheDay, setWordOfTheDay] = useState<string>('')

  const handleChar = (letter: string) => {
    const newWord = currentWord + letter

    setCurrentWord(newWord)
  }

  const handleDelete = () => {
    const newWord = currentWord.slice(0, -1)

    setCurrentWord(newWord)
  }

  const handleEnter = () => {
    if (currentWord === wordOfTheDay) {
      setCompleteWords([...completeWords, currentWord])

      return setGameStatus('won')
    }

    if (turn === ROW_LENGTH) {
      setCompleteWords([...completeWords, currentWord])

      return setGameStatus('lost')
    }

    setCompleteWords([...completeWords, currentWord])
    setTurn(turn + 1)
    setCurrentWord('')
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    const letter = event.key.toUpperCase()

    if (gameStatus !== 'playing') return

    if (event.key === 'Backspace' && currentWord.length > 0) return handleDelete()

    if (event.key === 'Enter' && currentWord.length === LETTERS_LENGTH && turn <= ROW_LENGTH) {
      return handleEnter()
    }

    if (currentWord.length >= LETTERS_LENGTH) return

    if (DICTIONARY_WORDS.includes(letter)) return handleChar(letter)
  }

  useWindow('keydown', handleKeyDown)

  useEffect(() => setWordOfTheDay('BREAK'), [])

  console.log({ as: Array.from(Array(ROW_LENGTH - turn)) })

  return (
    <section>
      {completeWords.map((guess, index) => (
        <CompletedRow guess={guess} key={index} solution={wordOfTheDay} />
      ))}

      {gameStatus === 'playing' ? <CurrentRow guess={currentWord} /> : null}

      {Array.from(Array(ROW_LENGTH - turn)).map((_, index) => (
        <EmptyRow key={index} />
      ))}
    </section>
  )
}

export default WordleGame
