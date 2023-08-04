import classNames from 'classnames'
import { REVEAL_TIME_MS } from '@/configs/constants'
import { CharacterBoxStatus } from '@/types/wordle'

interface CharacterBoxProps {
  isCompleted?: boolean
  isRevealing?: boolean
  letter?: string
  position?: number
  status?: CharacterBoxStatus
}

/**
 * The CharacterBox' component
 */
const CharacterBox = ({
  isCompleted,
  isRevealing,
  letter = '',
  position = 0,
  status = 'empty'
}: CharacterBoxProps) => {
  const animationDelay = `${position * REVEAL_TIME_MS}ms`
  const isFilled = letter && !isCompleted
  const shouldReveal = isRevealing && isCompleted

  const classes = classNames({
    'bg-[#66A060] dark:bg-[#6AAA64] correct text-white': status === 'correct',
    'bg-[#939B9F] absent text-white': status === 'absent',
    'bg-[#939B9F4D] dark:bg-[#939B9F33] text-white': status === 'empty',
    'bg-[#CEB02C] present text-white': status === 'present',
    'bg-white border-black border-2 text-black': status === 'edit',
    'character-box-fill-animation': isFilled,
    'character-box-reveal': shouldReveal
  })

  return (
    <div
      className={`${classes} flex h-20 w-20 items-center justify-center rounded text-4xl font-bold`}
      style={{ animationDelay }}
    >
      <div className="letter-container" style={{ animationDelay }}>
        {letter}
      </div>
    </div>
  )
}

export default CharacterBox
