import { BackspaceIcon } from '@heroicons/react/24/outline'
import { getKeyStatuses } from '@/utils/checkers'
import Key from '@/components/Key'

interface KeyboardProps {
  completeWords: string[]
  isRevealing?: boolean
  keys: string[]
  onKeyPressed: (key: string) => void
  solution: string
}

/**
 * The Keyboard' container
 */
const Keyboard = ({ completeWords, isRevealing, keys, onKeyPressed, solution }: KeyboardProps) => {
  const keyStatuses = getKeyStatuses(completeWords, solution)

  const handleChar = (letter: string) => onKeyPressed(letter)

  const handleDelete = () => {
    return onKeyPressed('BACKSPACE')
  }

  const handleEnter = () => {
    return onKeyPressed('ENTER')
  }

  return (
    <section className="py-10">
      <div className="rounded-2xl bg-[#DADCE04D] p-6 dark:bg-[#DADCE008]">
        <div className="mb-2 flex justify-center gap-1">
          {Array.from(Array(10)).map((_, index) => (
            <Key
              isRevealing={isRevealing}
              key={index}
              letter={keys[index]}
              onClick={handleChar}
              status={keyStatuses[keys[index]] || 'empty'}
            />
          ))}
        </div>

        <div className="mb-2 flex justify-center gap-1">
          <Key letter="" onClick={() => undefined} />

          {Array.from(Array(10)).map((key, index) => (
            <Key
              isRevealing={isRevealing}
              key={index}
              letter={keys[index + 10]}
              onClick={handleChar}
              status={keyStatuses[keys[index + 10]] || 'empty'}
            />
          ))}
        </div>

        <div className="flex justify-center gap-1">
          <Key
            isRevealing={isRevealing}
            letter="ENTER"
            onClick={handleEnter}
            status={'empty'}
            width={100}
          >
            ENTER
          </Key>

          {Array.from(Array(7)).map((key, index) => (
            <Key
              isRevealing={isRevealing}
              key={index}
              letter={keys[index + 20]}
              onClick={handleChar}
              status={keyStatuses[keys[index + 20]] || 'empty'}
            />
          ))}

          <Key
            isRevealing={isRevealing}
            letter="DELETE"
            onClick={handleDelete}
            status={'empty'}
            width={70}
          >
            <BackspaceIcon className="h-6 w-6 text-[#56575E] dark:text-white" />
          </Key>
        </div>
      </div>
    </section>
  )
}

export default Keyboard
