import { createRouter, RouterProvider } from '@tanstack/react-router'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { routeTree } from './routeTree.gen'
import { useAuth } from './store/auth'
import "@/index.css"
import { ThemeProvider } from './components/theme-provider'


// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// Register the environment variable for type safety
declare module "bun" {
  interface Env {
    APP_BASE_URL: string
  }
}

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return
  }

  const { worker } = await import('./mocks/browser')

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  worker.start()

}

// Import the generated route tree
const router = createRouter({ routeTree, context: { auth: null } },)

const App = () => {
  const [auth]=useAuth();
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
          <RouterProvider router={router} context={{auth:auth}}>
          </RouterProvider>
    </ThemeProvider>
  )
}

const render = () => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}

enableMocking().then(() => {
  render()
})