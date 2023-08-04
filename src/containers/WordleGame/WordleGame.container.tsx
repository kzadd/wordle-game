import { MAX_CHALLENGES } from '@/configs/constants'
import CompletedRow from '@/components/CompletedRow'
import CurrentRow from '@/components/CurrentRow'
import EmptyRow from '@/components/EmptyRow'

interface WordleGameProps {
  completeWords: string[]
  currentWord: string
  gameStatus: string
  isRevealing?: boolean
  turn: number
  word: string
}

/**
 * The WordleGame' container
 */
const WordleGame = ({
  completeWords,
  currentWord,
  gameStatus,
  isRevealing,
  turn,
  word
}: WordleGameProps) => {
  return (
    <section className="mb-14">
      {completeWords.map((userWord, index) => (
        <CompletedRow
          isRevealing={isRevealing && completeWords.length - 1 === index}
          key={index}
          solution={word}
          word={userWord}
        />
      ))}

      {gameStatus === 'playing' ? <CurrentRow word={currentWord} /> : null}

      {Array.from(Array(MAX_CHALLENGES - turn)).map((_, index) => (
        <EmptyRow key={index} />
      ))}
    </section>
  )
}

export default WordleGame
