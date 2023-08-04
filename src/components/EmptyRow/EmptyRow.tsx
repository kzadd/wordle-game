import { LETTERS_LENGTH } from '@/configs/constants'
import CharacterBox from '@/components/CharacterBox'

/**
 * The EmptyRow' component
 */
const EmptyRow = () => {
  return (
    <div className="mb-3 flex gap-3 uppercase">
      {Array.from(Array(LETTERS_LENGTH)).map((_, index) => (
        <CharacterBox key={index} />
      ))}
    </div>
  )
}

export default EmptyRow
