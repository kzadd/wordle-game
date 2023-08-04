import WordLibrary from '@/db/word-library'

export const getWords = () => WordLibrary.map((word: string) => word.toUpperCase())
