import { Link, NavLink } from 'react-router-dom'

const Icon = ({ children }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true">{children}</svg>
)
const MenuIcon = () => <Icon><path d="M5 3v7m3-7v7M3 3v5a3 3 0 0 0 6 0V3M6 11v10M20 3c-4 2-5 6-5 10h5M20 3v18" /></Icon>
const InstagramIcon = () => <Icon><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".7" /></Icon>
const ContactIcon = () => <Icon><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></Icon>
const HomeIcon = () => <Icon><path d="m3 10 9-7 9 7M5 9v12h14V9M9 21v-8h6v8" /></Icon>

export default function Header() {
  return (
    <header id="header" className="site-header">
      <Link to="/" className="logo" aria-label="macaroni. ホーム">
        <img alt="macaroni." src="/images/logo.png" />
      </Link>
      <nav className="header-nav" aria-label="メインナビゲーション">
        <NavLink to="/menu" className="header-action" aria-label="メニュー" title="メニュー"><MenuIcon /></NavLink>
        <a className="header-action" href="https://www.instagram.com/macaroni.kitakami/" target="_blank" rel="noopener noreferrer" aria-label="Instagram（新しいタブで開く）" title="Instagram"><InstagramIcon /></a>
        <NavLink to="/contact" className="header-action" aria-label="コンタクト" title="コンタクト"><ContactIcon /></NavLink>
        <NavLink to="/" end className="header-action" aria-label="ホーム" title="ホーム"><HomeIcon /></NavLink>
      </nav>
    </header>
  )
}
