import { CharacterBoxStatus } from '@/types/wordle'

interface CheckLetterProps {
  letter: string
  position: number
  solution: string
}

export const checkLetter = ({
  letter,
  position,
  solution
}: CheckLetterProps): CharacterBoxStatus => {
  if (solution.includes(letter)) {
    if (solution[position] === letter) return 'correct'

    return 'present'
  }

  return 'absent'
}
