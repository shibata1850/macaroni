import { useLocation, useNavigate } from 'react-router-dom'

const HomeIcon = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true">
    <path d="m4 15.2 12-10 12 10" />
    <path d="M7.5 13.5V27h17V13.5M13 27v-7h6v7" />
  </svg>
)

const MenuIcon = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true">
    <path d="M6 8h20M6 16h20M6 24h20" />
  </svg>
)

const InstagramIcon = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true">
    <rect x="5" y="5" width="22" height="22" rx="6" />
    <circle cx="16" cy="16" r="5" />
    <circle cx="23" cy="9" r="1" fill="currentColor" stroke="none" />
  </svg>
)

const ContactIcon = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true">
    <rect x="4" y="7" width="24" height="18" rx="2" />
    <path d="m5 9 11 9L27 9" />
  </svg>
)

const navItems = [
  { label: 'ホーム', path: '/', Icon: HomeIcon },
  { label: 'メニュー', path: '/menu', Icon: MenuIcon },
  { label: 'Instagram', href: 'https://www.instagram.com/macaroni.kitakami/', Icon: InstagramIcon },
  { label: 'お問い合わせ', path: '/contact', Icon: ContactIcon },
]

export default function Header() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <header id="header" className="site-header">
      <a
        href="#/"
        className="logo"
        aria-label="macaroni. ホーム"
        onClick={(event) => {
          event.preventDefault()
          navigate('/')
        }}
      >
        <img alt="macaroni." src="/images/logo.png" />
      </a>

      <nav className="header-nav" aria-label="メインメニュー">
        {navItems.map(({ label, path, href, Icon }) => (
          <a
            key={label}
            className={`header-nav-link${path && location.pathname === path ? ' is-active' : ''}`}
            href={href || `#${path}`}
            target={href ? '_blank' : undefined}
            rel={href ? 'noopener noreferrer' : undefined}
            aria-label={label}
            aria-current={path && location.pathname === path ? 'page' : undefined}
            onClick={path ? (event) => {
              event.preventDefault()
              navigate(path)
            } : undefined}
          >
            <Icon />
          </a>
        ))}
      </nav>
    </header>
  )
}
