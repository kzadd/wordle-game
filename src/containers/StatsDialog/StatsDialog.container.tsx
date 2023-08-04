import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'

interface StatsDialogProps {
  gameStatus: string
  isOpen: boolean
  onClose: () => void
  word: string
}

/**
 * The StatsDialog' container
 */
const StatsDialog = ({ gameStatus, isOpen, onClose, word }: StatsDialogProps) => {
  const [victories, setVictories] = useState<number>(0)
  const [games, setGames] = useState<number>(0)

  useEffect(() => {
    if (gameStatus === 'won') {
      setVictories(victories + 1)
      return setGames(games + 1)
    }

    if (gameStatus === 'lost') {
      return setGames(games + 1)
    }
  }, [gameStatus])

  return (
    <Transition as={Fragment} show={isOpen}>
      <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={onClose}>
        <div className="flex min-h-full items-center justify-center px-4 py-10 text-center lg:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 min-h-screen bg-white bg-opacity-80 transition-opacity dark:bg-[#262B3C] dark:bg-opacity-80" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 lg:translate-y-0 lg:scale-95"
            enterTo="opacity-100 translate-y-0 lg:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 lg:scale-100"
            leaveTo="opacity-0 translate-y-4 lg:translate-y-0 lg:scale-95"
          >
            <div className="inline-block transform overflow-hidden rounded-lg border border-[#262B3C] bg-[#F3F3F3] p-6 align-bottom shadow-xl transition-all dark:border-[#F3F3F3] dark:bg-[#262B3C] md:align-middle lg:my-8 lg:w-full lg:max-w-lg lg:p-8">
              <Dialog.Title
                as="h3"
                className="mb-8 text-center text-3xl font-medium leading-6 text-[#202537] dark:text-[#DADCE0]"
              >
                Estadísticas
              </Dialog.Title>

              <div className="flex flex-col justify-center p-8">
                <div className="mb-4 flex justify-between">
                  <div className="flex flex-col items-center justify-center">
                    <p className="mb-3 text-3xl font-bold text-[#202537] dark:text-[#DADCE0]">
                      {games}
                    </p>

                    <p className="mb-3 text-lg text-[#202537] dark:text-[#DADCE0]">Jugadas</p>
                  </div>

                  <div className="flex flex-col items-center justify-center">
                    <p className="mb-3 text-3xl font-bold text-[#202537] dark:text-[#DADCE0]">
                      {victories}
                    </p>

                    <p className="mb-3 text-lg text-[#202537] dark:text-[#DADCE0]">Victorias</p>
                  </div>
                </div>

                {gameStatus === 'lost' && (
                  <p className="mb-3 text-lg text-[#202537] dark:text-[#DADCE0]">
                    La palabra era: <span className="font-bold">{word}</span>
                  </p>
                )}

                <p className="mb-3 text-lg uppercase text-[#202537] dark:text-[#DADCE0]">
                  Siguiente palabra
                </p>

                <p className="mb-3 text-lg font-bold text-[#202537] dark:text-[#DADCE0]">04:10</p>
              </div>

              <button
                className="h-[50px] w-[250px] rounded bg-[#6AAA64] text-2xl font-bold text-white hover:bg-[#5a9454] focus:outline-none"
                onClick={() => onClose()}
              >
                Aceptar
              </button>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}

export default StatsDialog
