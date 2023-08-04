import { Transition } from '@headlessui/react'
import classNames from 'classnames'
import { Fragment } from 'react'

type AlertProps = {
  isOpen: boolean
  message: string
  variant?: 'success' | 'error'
}

/**
 * The Alert' component
 */
const Alert = ({ isOpen, message, variant = 'error' }: AlertProps) => {
  const classes = classNames(
    'fixed z-20 top-8 left-1/2 transform -translate-x-1/2 max-w-sm shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden',
    {
      'bg-blue-500 text-white': variant === 'success',
      'bg-rose-500 text-white': variant === 'error'
    }
  )

  return (
    <Transition
      as={Fragment}
      enter="ease-out duration-300 transition"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      show={isOpen}
    >
      <div className={classes}>
        <div className="p-2">
          <p className="text-center text-sm font-medium">{message}</p>
        </div>
      </div>
    </Transition>
  )
}

export default Alert
