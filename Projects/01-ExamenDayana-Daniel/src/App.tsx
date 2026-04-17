import { RouterProvider, createBrowserHistory, createRouter, RootRoute, Route } from '@tanstack/react-router'
import './App.css'
import ProductsPage from './pages/ProductsPage'
import ProductDetailPage from './pages/ProductDetailPage'
import { PaginationProvider } from './context/PaginationContext'

const rootRoute = new RootRoute({
  component: () => <PaginationProvider><Outlet /></PaginationProvider>,
})

import { Outlet } from '@tanstack/react-router'

const productsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/products',
  component: ProductsPage,
})

const productDetailRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/products/$productId',
  component: ProductDetailPage,
})

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: ProductsPage,
})

const routeTree = rootRoute.addChildren([productsRoute, productDetailRoute, indexRoute])

const router = createRouter({
  routeTree,
  history: createBrowserHistory(),
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

function App() {
  return <RouterProvider router={router} />
}

export default App
