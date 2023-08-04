import { createContext, ReactNode, useCallback, useContext, useState } from 'react'
import { ALERT_TIME_MS } from '@/configs/constants'

type AlertStatus = 'success' | 'error' | undefined

interface ShowOptions {
  delayMs?: number
  durationMs?: number
  onClose?: () => void
  persist?: boolean
}

interface AlertContextValue {
  isVisible: boolean
  message: string | null
  showError: (message: string, options?: ShowOptions) => void
  showSuccess: (message: string, options?: ShowOptions) => void
  status: AlertStatus
}

export const AlertContext = createContext<AlertContextValue | null>({
  isVisible: false,
  message: null,
  showError: () => null,
  showSuccess: () => null,
  status: 'success'
})

AlertContext.displayName = 'AlertContext'

export const useAlert = () => useContext(AlertContext) as AlertContextValue

interface AlertProviderProps {
  children?: ReactNode
}

export const AlertProvider = ({ children }: AlertProviderProps) => {
  const [status, setStatus] = useState<AlertStatus>('success')
  const [message, setMessage] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  const show = useCallback(
    (showStatus: AlertStatus, newMessage: string, options?: ShowOptions) => {
      const { delayMs = 0, persist, onClose, durationMs = ALERT_TIME_MS } = options || {}

      setTimeout(() => {
        setStatus(showStatus)
        setMessage(newMessage)
        setIsVisible(true)

        if (!persist) {
          setTimeout(() => {
            setIsVisible(false)
            if (onClose) {
              onClose()
            }
          }, durationMs)
        }
      }, delayMs)
    },
    [setStatus, setMessage, setIsVisible]
  )

  const showError = useCallback(
    (newMessage: string, options?: ShowOptions) => {
      show('error', newMessage, options)
    },
    [show]
  )

  const showSuccess = useCallback(
    (newMessage: string, options?: ShowOptions) => {
      show('success', newMessage, options)
    },
    [show]
  )

  return (
    <AlertContext.Provider
      value={{
        isVisible,
        message,
        showError,
        showSuccess,
        status
      }}
    >
      {children}
    </AlertContext.Provider>
  )
}
