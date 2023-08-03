export const IS_DEV_ENV = import.meta.env.MODE !== 'production'

export const {
  VITE_APP_API_BASE_URL: APP_API_BASE_URL,
  VITE_APP_BASE_URL: APP_BASE_URL,
  VITE_PUBLIC_URL: APP_PUBLIC_URL
}: ImportMetaEnv = import.meta.env
