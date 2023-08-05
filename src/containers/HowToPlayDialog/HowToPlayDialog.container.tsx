import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import CharacterBox from '@/components/CharacterBox'

interface HowToPlayDialogProps {
  isOpen: boolean
  onClose: () => void
}

/**
 * The HowToPlayDialog' container
 */
const HowToPlayDialog = ({ isOpen, onClose }: HowToPlayDialogProps) => {
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
                Cómo jugar
              </Dialog.Title>

              <p className="mb-3 text-left text-[#202537] dark:text-[#DADCE0]">
                Adivina la palabra oculta en cinco intentos.
              </p>

              <p className="mb-3 text-left text-[#202537] dark:text-[#DADCE0]">
                Cada intento debe ser una palabra válida de 5 letras.
              </p>

              <p className="mb-3 text-left text-[#202537] dark:text-[#DADCE0]">
                Después de cada intento el color de las letras cambia para mostrar qué tan cerca
                estás de acertar la palabra.
              </p>

              <p className="mb-3 text-left font-bold text-[#202537] dark:text-[#DADCE0]">
                Ejemplos
              </p>

              <div className="my-2 flex justify-center gap-2 p-2">
                <CharacterBox isCompleted isRevealing letter="G" status="correct" />
                <CharacterBox letter="A" status="edit" />
                <CharacterBox letter="T" status="edit" />
                <CharacterBox letter="O" status="edit" />
                <CharacterBox letter="S" status="edit" />
              </div>

              <p className="text-left text-[#202537] dark:text-[#DADCE0]">
                La letra <span className="font-bold">G</span> está en la palabra y en la posición
                correcta.
              </p>

              <div className="my-2 flex justify-center gap-2 p-2">
                <CharacterBox letter="V" status="edit" />
                <CharacterBox letter="O" status="edit" />
                <CharacterBox isCompleted isRevealing letter="C" status="present" />
                <CharacterBox letter="A" status="edit" />
                <CharacterBox letter="L" status="edit" />
              </div>

              <p className="text-left  text-[#202537] dark:text-[#DADCE0]">
                La letra <span className="font-bold">C</span> está en la palabra pero en la posición
                incorrecta.
              </p>

              <div className="my-2 flex justify-center gap-2 p-2">
                <CharacterBox letter="C" status="edit" />
                <CharacterBox letter="A" status="edit" />
                <CharacterBox letter="N" status="edit" />
                <CharacterBox letter="T" status="edit" />
                <CharacterBox isCompleted isRevealing letter="O" status="absent" />
              </div>

              <p className="mb-5 text-left text-[#202537] dark:text-[#DADCE0]">
                La letra <span className="font-bold">O</span> no está en la palabra.
              </p>

              <p className="mb-5 text-left text-[#202537] dark:text-[#DADCE0]">
                Puede haber letras repetidas. Las pistas son independientes para cada letra.
              </p>

              <p className="mb-5 text-[#202537] dark:text-[#DADCE0]">
                ¡Una palabra nueva cada 5 minutos!
              </p>

              <button
                className="h-[50px] w-[250px] rounded-md bg-[#6AAA64] text-2xl font-bold text-white hover:bg-[#5a9454] focus:outline-none"
                onClick={() => onClose()}
              >
                !JUGAR¡
              </button>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}

export default HowToPlayDialog
