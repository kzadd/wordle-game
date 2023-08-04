import WordLibrary from '@/db/word-library'
import { LETTERS_LENGTH } from '@/configs/constants'

export const isValidWord = (word: string) => {
  const words = getWords()

  return words.includes(word)
}

const getWords = () => {
  const words = WordLibrary.map((word: string) => {
    const normalizeWord = word.normalize('NFD').replace(/[\u0300-\u036f]/g, '')

    return normalizeWord.toUpperCase()
  })

  return words.filter((word: string) => word.length === LETTERS_LENGTH)
}

export const getWordOfDay = () => {
  const words = getWords()

  return words[getDayOfYear()]
}

const getDayOfYear = () => {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 0)
  const diff = (now as any) - (start as any) + (start.getTimezoneOffset() - now.getTimezoneOffset())
  const oneDay = 1000 * 60 * 60 * 0.5

  return Math.floor(diff / oneDay)
}
