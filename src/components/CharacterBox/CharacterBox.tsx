import classNames from 'classnames'
import { CharacterBoxStatus } from '@/types/wordle'

interface CharacterBoxProps {
  letter?: string
  status?: CharacterBoxStatus
}

/**
 * The CharacterBox' component
 */
const CharacterBox = ({ letter = '', status = 'empty' }: CharacterBoxProps) => {
  const classes = classNames({
    'bg-[#66A060] dark:bg-[#6AAA64]': status === 'correct',
    'bg-[#939B9F]': status === 'absent',
    'bg-[#939B9F4D] dark:bg-[#939B9F33]': status === 'empty',
    'bg-[#CEB02C]': status === 'present',
    'bg-white border-black border-2 text-black': status === 'edit'
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
