import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

interface StatsDialogProps {
  isOpen: boolean
  onClose: () => void
}

/**
 * The StatsDialog' container
 */
const StatsDialog = ({ isOpen, onClose }: StatsDialogProps) => {
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

              <button
                className="h-[50px] w-[250px] rounded bg-[#6AAA64] text-2xl font-bold text-[#DADCE0] hover:bg-[#5a9454] focus:outline-none"
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
