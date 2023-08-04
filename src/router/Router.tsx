import { createBrowserRouter } from 'react-router-dom'
import { APP_PUBLIC_URL } from '@/configs/environments'
import routes from '@/configs/routes'
import GamePage from '@/pages/Game'
import NotFoundPage from '@/pages/NotFound'

const routesComponents = [
  {
    element: <GamePage />,
    errorElement: <NotFoundPage />,
    path: routes.root
  }
]

const Router = createBrowserRouter(routesComponents, {
  basename: APP_PUBLIC_URL
})

export default Router
