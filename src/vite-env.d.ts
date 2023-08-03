/// <reference types="vite/client" />

export interface ImportMeta {
  readonly env: ImportMetaEnv
}

export interface ImportMetaEnv {
  readonly VITE_APP_API_BASE_URL: string | undefined
  readonly VITE_APP_BASE_URL: string | undefined
  readonly VITE_PUBLIC_URL: string | undefined
}
