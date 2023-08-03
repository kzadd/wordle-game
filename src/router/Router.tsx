import { createBrowserRouter } from 'react-router-dom'
import { APP_PUBLIC_URL } from '@/configs/environments'
import routes from '@/configs/routes'
import Home from '@/pages/Home'
import NotFound from '@/pages/NotFound'

const routesComponents = [
  {
    element: <Home />,
    errorElement: <NotFound />,
    path: routes.root
  }
]

const Router = createBrowserRouter(routesComponents, {
  basename: APP_PUBLIC_URL
})

export default Router
