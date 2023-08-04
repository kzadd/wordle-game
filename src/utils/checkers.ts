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

export const getKeyStatuses = (
  completeWords: string[],
  solution: string
): { [key: string]: CharacterBoxStatus } => {
  const keyObj: { [key: string]: CharacterBoxStatus } = {}
  const splitSolution = solution.split('')

  completeWords.forEach(word => {
    word.split('').forEach((letter, i) => {
      if (!splitSolution.includes(letter)) return (keyObj[letter] = 'absent')

      if (letter === splitSolution[i]) return (keyObj[letter] = 'correct')

      if (keyObj[letter] !== 'correct') return (keyObj[letter] = 'present')
    })
  })

  return keyObj
}
