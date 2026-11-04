import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRevealAnimation } from '../hooks/useRevealAnimation.js'

const menuCategories = [
  { id: 'lunch', label: 'Lunch', jp: 'ランチ', pages: ['menu-page-01.jpg'] },
  { id: 'dinner', label: 'Dinner', jp: 'ディナー', pages: ['menu-page-02.jpg', 'menu-page-03.jpg'] },
  { id: 'dessert', label: 'Dessert', jp: 'デザート', pages: ['menu-page-05.jpg'] },
  { id: 'seasonal', label: 'Seasonal', jp: '季節のコース', pages: ['menu-page-04.jpg'] },
]

export default function Menu() {
  const navigate = useNavigate()
  useRevealAnimation()
  const [active, setActive] = useState('lunch')

  const current = menuCategories.find((c) => c.id === active)

  return (
    <section className="page" id="page-menu">
      <section className="menu-full">
        <div className="menu-full-inner">
          <div className="menu-category-tabs">
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`menu-category-tab${active === cat.id ? ' is-active' : ''}`}
                onClick={() => setActive(cat.id)}
              >
                <span className="menu-tab-en">{cat.label}</span>
                <span className="menu-tab-jp">{cat.jp}</span>
              </button>
            ))}
          </div>

          <div className="menu-full-section reveal" id={`menu-${active}`}>
            <div className="menu-section-heading">
              <span className="section-label section-label-both">{current.label}</span>
              <h2 className="section-title">{current.jp}</h2>
            </div>
            <div className="menu-pdf-pages">
              {current.pages.map((page, i) => (
                <img
                  key={i}
                  className="menu-pdf-page"
                  src={`/images/${page}`}
                  alt={`${current.jp} メニュー ページ${i + 1}`}
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
