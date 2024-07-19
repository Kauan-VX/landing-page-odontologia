import { ReactNode } from 'react'
import { IRoutes, Navigation } from '../../../components/Navigation'

interface LayoutProps {
  children: ReactNode
}
export default function AuthLayout({ children }: LayoutProps) {
  const router: IRoutes[] = [
    {
      name: 'Início',
      router: '/initial',
      icon: '',
    },
    {
      name: 'Serviços',
      router: '/about',
      icon: '',
    },
    {
      name: 'Nós',
      router: '/contact',
      icon: '',
    },
    {
      name: 'Contato',
      router: '/contact',
      icon: '',
    },
  ]

  return (
    <Navigation routes={router} type="Navbar">
      {children}
    </Navigation>
  )
}
