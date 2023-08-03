import Router from '@/router'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import '@/assets/css/main.css'

const rootElement = document.getElementById('root') as HTMLElement
const root = createRoot(rootElement)

root.render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
)
