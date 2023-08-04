import { useAlert } from '@/context/AlertContext'
import AlertComponent from '@/components/Alert'

/**
 * The Alert' container
 */
const Alert = () => {
  const { message, status, isVisible } = useAlert()

  return <AlertComponent isOpen={isVisible} message={message || ''} variant={status} />
}

export default Alert
