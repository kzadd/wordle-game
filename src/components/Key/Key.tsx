import classnames from 'classnames'
import { ReactNode } from 'react'
import { LETTERS_LENGTH, REVEAL_TIME_MS } from '@/configs/constants'
import { CharacterBoxStatus } from '@/types/wordle'

type Props = {
  children?: ReactNode
  isRevealing?: boolean
  letter: string
  onClick: (letter: string) => void
  status?: CharacterBoxStatus
  width?: number
}

/**
 * The Key' component
 */
const Key = ({ children, status, width = 40, letter, onClick, isRevealing }: Props) => {
  const keyDelayMs = REVEAL_TIME_MS * LETTERS_LENGTH

  const classes = classnames(
    'flex h-12 items-center justify-center rounded-lg mx-0.5 text-lg font-bold cursor-pointer select-none ',
    {
      'bg-[#66A060] dark:bg-[#6AAA64] correct text-white': status === 'correct',
      'bg-[#939B9F] absent text-white': status === 'absent',
      'bg-[#939B9F4D] dark:bg-[#939B9F33] text-[#56575E] dark:text-white': status === 'empty',
      'bg-[#CEB02C] present text-white': status === 'present',
      'transition ease-in-out': isRevealing
    }
  )

  const styles = {
    transitionDelay: isRevealing ? `${keyDelayMs}ms` : 'unset',
    width: `${width}px`
  }

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = event => {
    onClick(letter)
    event.currentTarget.blur()
  }

  return (
    <button
      aria-label={`${letter}${status ? ' ' + status : ''}`}
      className={classes}
      onClick={handleClick}
      style={styles}
    >
      {children || letter}
    </button>
  )
}

export default Key
