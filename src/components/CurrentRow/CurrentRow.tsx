import { LETTERS_LENGTH } from '@/configs/constants'
import CharacterBox from '@/components/CharacterBox'

interface CurrentRowProps {
  word: string
}

/**
 * The CurrentRow' component
 */
const CurrentRow = ({ word }: CurrentRowProps) => {
  return (
    <div className="mb-3 flex gap-3 uppercase">
      {word.split('').map((letter, index) => (
        <CharacterBox key={index} letter={letter} status="edit" />
      ))}

      {Array.from(Array(LETTERS_LENGTH - word.length)).map((_, index) => (
        <CharacterBox key={index} />
      ))}
    </div>
  )
}

export default CurrentRow
