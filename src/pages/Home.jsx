import { useNavigate } from 'react-router-dom'
import { useRevealAnimation } from '../hooks/useRevealAnimation.js'

const instaPhotos = [
  'insta-01.jpg', 'insta-02.jpg', 'insta-03.jpg',
  'insta-04.jpg', 'insta-05.jpg', 'insta-06.jpg',
  'insta-07.jpg', 'insta-08.jpg', 'insta-09.jpg',
]

const pcSlides = [
  'hero-veg-pc.jpg',
  'hero-slide-veg.jpg',
  'hero-slide-01.jpg',
  'hero-slide-02.jpg',
  'hero-slide-03.jpg',
  'hero-slide-04.jpg',
  'hero-slide-05.jpg',
  'hero-slide-06.jpg',
]

const CameraIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="6" width="20" height="14" rx="3" stroke="white" stroke-width="1.5" />
    <circle cx="12" cy="13" r="4" stroke="white" stroke-width="1.5" />
    <path d="M8 6L9.5 3.5H14.5L16 6" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
)

export default function Home() {
  const navigate = useNavigate()
  useRevealAnimation()

  const navItems = [
    { label: 'Menu', path: 'menu' },
    { label: 'Information', path: 'access' },
    { label: 'Contact', path: 'contact' },
  ]

  return (
    <section className="page" id="page-home">
      <section className="hero logo-hero">
        <div className="logo-hero-slideshow logo-hero-slideshow--sp">
          <div className="logo-hero-slide" style={{ backgroundImage: 'var(--img-people)' }} />
          <div className="logo-hero-slide" style={{ backgroundImage: 'var(--img-counter)' }} />
          <div className="logo-hero-slide" style={{ backgroundImage: 'var(--img-veg)' }} />
        </div>
        <div className="logo-hero-slideshow logo-hero-slideshow--pc">
          {pcSlides.map((slide, i) => (
            <div
              key={i}
              className="logo-hero-slide"
              style={{ backgroundImage: `url('/images/${slide}')` }}
            />
          ))}
        </div>
        <div className="logo-hero-slideshow-veil" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="hero-mark"><em>Ristorante &nbsp;dal &nbsp;2026</em></p>
          <h1>macaroni<span className="brand-dot brand-dot-en">.</span></h1>
          <p className="hero-jp">マカロニ<span className="brand-dot">．</span></p>
          <p className="hero-tag">気どらない、北上の一皿</p>
        </div>

        <div className="logo-hero-inner">
          <div className="logo-hero-card">
            <div
              className="logo-hero-people"
              role="img"
              aria-label="macaroni. いろいろな人のイラスト"
            />
            <ul className="logo-hero-menu">
              {navItems.map((item) => (
                <li key={item.path}>
                  <a
                    href={`#/${item.path}`}
                    onClick={(e) => {
                      e.preventDefault()
                      navigate('/' + item.path)
                    }}
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
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          <img
            className="logo-hero-mark"
            src="/images/logo-mark.png"
            width="300"
            height="300"
            alt="macaroni. マーク"
          />
        </div>
      </section>

      <section className="insta-section">
        <div className="insta-section-header reveal">
          <span className="section-label section-label-both">Instagram</span>
        </div>

        <div className="insta-grid reveal">
          {instaPhotos.map((photo, i) => (
            <a
              key={i}
              className="insta-tile"
              href="https://www.instagram.com/macaroni.kitakami/"
              target="_blank"
              rel="noopener"
            >
              <img
                src={`/images/${photo}`}
                alt={`macaroni. Instagram photo ${i + 1}`}
                loading="lazy"
              />
              <div className="insta-tile-overlay" />
              <div className="insta-tile-icon"><CameraIcon /></div>
            </a>
          ))}
        </div>

        <div className="insta-cta">
          <a
            className="insta-link"
            href="https://www.instagram.com/macaroni.kitakami/"
            target="_blank"
            rel="noopener"
          >
            View on Instagram @macaroni.kitakami
          </a>
        </div>

        <img
          className="insta-mark"
          src="/images/logo-mark.png"
          width="300"
          height="300"
          alt="macaroni. マーク"
        />
      </section>
    </section>
  )
}
