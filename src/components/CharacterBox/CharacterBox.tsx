import classNames from 'classnames'
import { CharacterBoxStatus } from '@/types/wordle'

interface CharacterBoxProps {
  letter: string
  status: CharacterBoxStatus
}

/**
 * The CharacterBox' component
 */
const CharacterBox = ({ letter, status }: CharacterBoxProps) => {
  const classes = classNames({
    'bg-[#66A060]': status === 'correct',
    'bg-[#939B9F]': status === 'absent',
    'bg-[#939B9F4D]': status === 'empty',
    'bg-[#939B9F4D] border-[#939B9F] border-4': status === 'edit',
    'bg-[#CEB02C]': status === 'present'
  })

  return (
    <div
      className={`${classes} flex h-20 w-20 items-center justify-center rounded text-4xl font-bold text-white`}
    >
      {letter}
    </div>
  )
}

export default CharacterBox
