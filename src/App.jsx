import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'

const pageTitles = {
  '/': 'macaroni. ｜ マカロニ．｜ 北上市の洋食店',
  '/menu': 'Menu ｜ macaroni. ｜ マカロニ．',
  '/access': 'Information ｜ macaroni. ｜ マカロニ．',
  '/contact': 'Contact ｜ macaroni. ｜ マカロニ．',
}

export default function App() {
  const location = useLocation()

  useEffect(() => {
    document.title = pageTitles[location.pathname] || pageTitles['/']
  }, [location.pathname])

  useEffect(() => {
    const header = document.getElementById('header')
    const onScroll = () => {
      if (window.scrollY > 80) header.classList.add('scrolled')
      else header.classList.remove('scrolled')
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [location.pathname])

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  )
}
