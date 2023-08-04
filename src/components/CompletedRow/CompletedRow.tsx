import { LETTERS_LENGTH } from '@/configs/constants'
import { checkLetter } from '@/utils/checkers'
import CharacterBox from '@/components/CharacterBox'

interface CompletedRowProps {
  isRevealing?: boolean
  solution: string
  word: string
}

/**
 * The CompletedRow' component
 */
const CompletedRow = ({ isRevealing, word, solution }: CompletedRowProps) => {
  return (
    <div className="mb-3 flex gap-3 uppercase">
      {Array.from(Array(LETTERS_LENGTH)).map((_, index) => (
        <CharacterBox
          isCompleted
          isRevealing={isRevealing}
          key={index}
          letter={word[index]}
          position={index}
          status={checkLetter({ letter: word[index], position: index, solution })}
        />
      ))}
    </div>
  )
}

export default CompletedRow
