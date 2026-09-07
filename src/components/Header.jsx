import { useLocation, useNavigate } from 'react-router-dom'

const PhoneIcon = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true">
    <path d="M8.5 4.5 13 3l3.5 7-3.2 2.2c1.4 3 3.8 5.4 6.8 6.8l2.2-3.2 7 3.5-1.5 4.5c-.5 1.5-2 2.4-3.5 2.1C14 23.8 8.2 18 4.1 7.9 3.5 6.4 4.4 5 8.5 4.5Z" />
  </svg>
)

const HomeIcon = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true">
    <path d="m4 15.2 12-10 12 10" />
    <path d="M7.5 13.5V27h17V13.5M13 27v-7h6v7" />
  </svg>
)

export default function Header() {
  const navigate = useNavigate()
  const location = useLocation()
  const isHome = location.pathname === '/'

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

      {isHome ? (
        <a className="header-action" href="tel:0197726672" aria-label="電話をかける">
          <PhoneIcon />
        </a>
      ) : (
        <button
          className="header-action"
          type="button"
          aria-label="ホームへ戻る"
          onClick={() => navigate('/')}
        >
          <HomeIcon />
        </button>
      )}
    </header>
  )
}
