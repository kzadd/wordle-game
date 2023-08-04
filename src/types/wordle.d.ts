export type CharacterBoxStatus = 'absent' | 'correct' | 'edit' | 'empty' | 'present'

export type GameStatus = 'lost' | 'playing' | 'won'

export interface StoredGameState {
  completeWords: string[]
  solution: string
}
