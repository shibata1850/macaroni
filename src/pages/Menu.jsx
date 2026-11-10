import { useState } from 'react'

const menuViews = [
  {
    id: 'lunch',
    label: 'Lunch',
    src: '/images/menu-page-03.jpg',
    alt: 'ランチメニュー',
  },
  {
    id: 'dinner',
    label: 'Dinner',
    src: '/images/menu-page-01.jpg',
    alt: 'ディナーメニュー',
  },
  {
    id: 'course',
    label: 'Course',
    src: '/images/menu-page-05.jpg',
    alt: 'コースメニュー',
  },
  {
    id: 'party',
    label: 'Party Plan',
    src: '/images/menu-page-02.jpg',
    alt: 'パーティープラン',
  },
  {
    id: 'drink',
    label: 'Drink',
    src: '/documents/875d96e0-2e7c-44a5-8803-56f926394ced.pdf#page=5&toolbar=0&navpanes=0&scrollbar=0',
    alt: 'ドリンクメニュー',
  },
  {
    id: 'dessert',
    label: 'Dessert',
    src: '/documents/7da9fe83-fe59-4832-82c4-03da373e3360.pdf#page=1&toolbar=0&navpanes=0&scrollbar=0',
    alt: 'デザートメニュー',
  },
]

export default function Menu() {
  const [activeId, setActiveId] = useState('lunch')
  const activeMenu = menuViews.find((menu) => menu.id === activeId) ?? menuViews[0]
  const isImageMenu = activeMenu.src.startsWith('/images/')

  return (
    <section className="page" id="page-menu">
      <section className="menu-document-page">
        <div className="menu-document-inner">
          <nav className="menu-document-tabs" aria-label="メニューカテゴリー">
            {menuViews.map((menu) => (
              <button
                key={menu.id}
                type="button"
                className={`menu-document-tab${activeId === menu.id ? ' is-active' : ''}`}
                onClick={() => setActiveId(menu.id)}
              >
                {menu.label}
              </button>
            ))}
          </nav>
          {isImageMenu ? (
            <img
              key={activeMenu.src}
              className="menu-document menu-document-image"
              src={activeMenu.src}
              alt={activeMenu.alt}
              loading="eager"
            />
          ) : (
            <iframe
              key={activeMenu.src}
              className="menu-document"
              src={activeMenu.src}
              title={`${activeMenu.label}メニュー`}
            />
          )}
        </div>
      </section>
    </section>
  )
}
