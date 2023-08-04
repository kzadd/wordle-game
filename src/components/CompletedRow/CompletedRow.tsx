import { LETTERS_LENGTH } from '@/configs/constants'
import { checkLetter } from '@/utils/words'
import CharacterBox from '@/components/CharacterBox'

interface CompletedRowProps {
  solution: string
  word: string
}

/**
 * The CompletedRow' component
 */
const CompletedRow = ({ word, solution }: CompletedRowProps) => {
  return (
    <div className="mb-4 flex gap-4 uppercase">
      {Array.from(Array(LETTERS_LENGTH)).map((_, index) => (
        <CharacterBox
          key={index}
          letter={word[index]}
          status={checkLetter({ letter: word[index], position: index, solution })}
        />
      ))}
    </div>
  )
}

export default CompletedRow
