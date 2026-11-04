import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase.js'
import { useRevealAnimation } from '../hooks/useRevealAnimation.js'

const menuCategories = [
  { id: 'lunch', label: 'Lunch', jp: 'ランチ' },
  { id: 'dinner', label: 'Dinner', jp: 'ディナー' },
  { id: 'dessert', label: 'Dessert', jp: 'デザート' },
  { id: 'seasonal', label: 'Seasonal', jp: '季節のコース' },
]

export default function Menu() {
  const navigate = useNavigate()
  useRevealAnimation()
  const [active, setActive] = useState('dinner')
  const [texts, setTexts] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMenu = async () => {
      const { data, error } = await supabase
        .from('menu_texts')
        .select('category, body')

      if (!error && data) {
        const map = {}
        data.forEach((row) => {
          map[row.category] = row.body
        })
        setTexts(map)
      }
      setLoading(false)
    }
    fetchMenu()
  }, [])

  const currentText = texts[active] || ''

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

          {loading ? (
            <p className="shop-info-loading">読み込み中…</p>
          ) : currentText ? (
            <pre className="menu-raw-text reveal">{currentText}</pre>
          ) : (
            <div className="menu-empty">
              <p className="menu-empty-text">こちらのメニューは現在準備中です。</p>
            </div>
          )}
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
