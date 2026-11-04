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
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMenu = async () => {
      const { data, error } = await supabase
        .from('menu_items')
        .select('category, section, name, price, description, sort_order')
        .order('sort_order', { ascending: true })

      if (!error && data) {
        setItems(data)
      }
      setLoading(false)
    }
    fetchMenu()
  }, [])

  const filtered = items.filter((item) => item.category === active)
  const sections = [...new Set(filtered.map((item) => item.section))]

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
          ) : filtered.length === 0 ? (
            <div className="menu-empty">
              <p className="menu-empty-text">こちらのメニューは現在準備中です。</p>
            </div>
          ) : (
            <div className="menu-text-list reveal">
              {active === 'seasonal' ? (
                <div className="menu-seasonal-course">
                  <div className="menu-section-heading">
                    <span className="section-label section-label-both">MENU Di GIORNO</span>
                    <h2 className="section-title">本日のコース</h2>
                  </div>
                  <p className="menu-course-note">※季節に合わせたコース料理です。詳しくはお問い合わせください。</p>
                  <div className="menu-course-list">
                    {filtered.map((item, i) => (
                      <div key={i} className="menu-course-item">
                        <span className="menu-course-index">{String(i + 1).padStart(2, '0')}</span>
                        <span className="menu-course-name">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                sections.map((section) => {
                  const sectionItems = filtered.filter((item) => item.section === section)
                  return (
                    <div key={section} className="menu-section-block">
                      <h3 className="menu-section-name">{section}</h3>
                      <div className="menu-items-grid">
                        {sectionItems.map((item, i) => (
                          <div key={i} className="menu-item-row">
                            <div className="menu-item-head">
                              <span className="menu-item-name">{item.name}</span>
                              <span className="menu-item-price">{item.price}</span>
                            </div>
                            {item.description && (
                              <p className="menu-item-desc">{item.description}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                })
              )}
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
