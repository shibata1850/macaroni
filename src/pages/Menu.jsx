import { useNavigate } from 'react-router-dom'
import { useRevealAnimation } from '../hooks/useRevealAnimation.js'

const menuPages = [
  'menu-hero.jpg',
  'menu-page-01.jpg',
  'menu-page-02.jpg',
  'menu-page-03.jpg',
  'menu-page-04.jpg',
]

export default function Menu() {
  const navigate = useNavigate()
  useRevealAnimation()

  return (
    <section className="page" id="page-menu">
      <section className="page-banner">
        <div
          className="page-banner-img"
          style={{ backgroundImage: "url('/images/menu-hero.jpg')" }}
        />
        <div className="page-banner-overlay" />
        <div className="page-banner-content">
          <p className="label">Menu</p>
          <h1>Le proposte</h1>
          <p className="jp">ご利用シーンに合わせて</p>
        </div>
      </section>

      <section className="menu-full">
        <div className="menu-full-inner">
          <div className="menu-full-section reveal" id="menu-dinner">
            <div className="menu-pdf-pages">
              {menuPages.map((page, i) => (
                <img
                  key={i}
                  className="menu-pdf-page"
                  src={`/images/${page}`}
                  alt={`メニュー ページ${i + 1}`}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="reserve-strip"
        style={{ padding: '6rem 3rem', background: 'var(--cream)', textAlign: 'center' }}
      >
        <span className="section-label">Reservation</span>
        <h2 className="section-title">ご予約・お問い合わせ</h2>
        <p className="section-title-jp">Visit us / Contact</p>
        <div className="cta-row">
          <a
            href="#/access"
            className="cta-line"
            onClick={(e) => {
              e.preventDefault()
              navigate('/access')
            }}
          >
            View Access
          </a>
        </div>
      </section>
    </section>
  )
}
