import { getWords } from './words'

export const isValidWord = (word: string) => {
  const words = getWords()

  return words.includes(word)
}
