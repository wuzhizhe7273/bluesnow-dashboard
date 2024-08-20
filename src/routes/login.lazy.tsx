import { LoginPage } from '@/pages/login-page'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/login')({
  component: LoginPage
})