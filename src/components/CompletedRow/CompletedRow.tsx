import { LETTERS_LENGTH } from '@/configs/constants'
import { checkLetter } from '@/utils/checkers'
import CharacterBox from '@/components/CharacterBox'

interface CompletedRowProps {
  solution: string
  guess: string
}

/**
 * The CompletedRow' component
 */
const CompletedRow = ({ guess, solution }: CompletedRowProps) => {
  return (
    <div className="mb-4 flex gap-4 uppercase">
      {Array.from(Array(LETTERS_LENGTH)).map((_, index) => (
        <CharacterBox
          key={index}
          letter={guess[index]}
          status={checkLetter({ letter: guess[index], position: index, solution })}
        />
      ))}
    </div>
  )
}

export default CompletedRow
