import { useState } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'

export default function Header() {
  const [navOpen, setNavOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const currentPath = location.pathname === '/' ? '/' : location.pathname.slice(1)

  const closeNav = () => setNavOpen(false)

  const handleNavClick = (e, path) => {
    e.preventDefault()
    closeNav()
    navigate(path)
  }

  const navItems = [
    { label: 'Menu', path: 'menu' },
    { label: 'Information', path: 'access' },
    { label: 'Contact', path: 'contact' },
  ]

  return (
    <header id="header" className={navOpen ? '' : ''}>
      <a
        href="#/"
        className="logo"
        aria-label="macaroni. ホーム"
        onClick={(e) => handleNavClick(e, '/')}
      >
        <img alt="macaroni." src="/images/logo.png" />
      </a>
      <button
        className={`nav-toggle ${navOpen ? 'open' : ''}`}
        id="navToggle"
        aria-label="メニューを開く"
        aria-expanded={navOpen}
        onClick={() => setNavOpen(!navOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={navOpen ? 'open' : ''}>
        <ul>
          {navItems.map((item) => (
            <li key={item.path}>
              <a
                href={`#/${item.path}`}
                className={currentPath === item.path ? 'active' : ''}
                onClick={(e) => handleNavClick(e, '/' + item.path)}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://www.instagram.com/macaroni.kitakami/"
              target="_blank"
              rel="noopener"
              onClick={closeNav}
            >
              Instagram
            </a>
          </li>
        </ul>
      </nav>
      <div
        className={`nav-overlay ${navOpen ? 'open' : ''}`}
        onClick={closeNav}
      />
    </header>
  )
}
