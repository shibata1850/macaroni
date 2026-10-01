import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase.js'
import { useRevealAnimation } from '../hooks/useRevealAnimation.js'

const instaPhotos = [
  'insta-01.jpg', 'insta-02.jpg', 'insta-03.jpg',
  'insta-04.jpg', 'insta-05.jpg', 'insta-06.jpg',
  'insta-07.jpg', 'insta-08.jpg', 'insta-09.jpg',
]

const foodPhotos = [
  'hero-slide-01.jpg', 'hero-slide-02.jpg', 'hero-slide-03.jpg',
  'hero-slide-04.jpg', 'hero-slide-05.jpg', 'hero-slide-06.jpg',
]

const CameraIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="6" width="20" height="14" rx="3" stroke="white" strokeWidth="1.5" />
    <circle cx="12" cy="13" r="4" stroke="white" strokeWidth="1.5" />
    <path d="M8 6L9.5 3.5H14.5L16 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const formatText = (text) => text.split('\n').map((line, index) => (
  <span key={index}>
    {line}
    {index < text.split('\n').length - 1 && <br />}
  </span>
))

export default function Home() {
  const navigate = useNavigate()
  const [shopInfo, setShopInfo] = useState(null)
  const [infoLoading, setInfoLoading] = useState(true)
  useRevealAnimation()

  useEffect(() => {
    const fetchShopInfo = async () => {
      const { data, error } = await supabase
        .from('shop_info')
        .select('calendar_text, parking_text')
        .eq('id', 1)
        .maybeSingle()

      if (!error && data) setShopInfo(data)
      setInfoLoading(false)
    }

    fetchShopInfo()
  }, [])

  return (
    <section className="page" id="page-home">
      <section className="top-video-hero" aria-labelledby="home-title">
        <video
          className="top-video"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-veg-pc.jpg"
          aria-label="macaroni. 店内と料理の紹介動画"
        >
          <source src="/images/top-video.mp4" type="video/mp4" />
        </video>
        <div className="top-video-overlay" />
        <div className="top-video-content">
          <p className="hero-mark"><em>Ristorante &nbsp;dal &nbsp;2026</em></p>
          <h1 id="home-title">macaroni<span className="brand-dot brand-dot-en">.</span></h1>
          <p className="hero-jp">マカロニ<span className="brand-dot">．</span></p>
          <p className="hero-tag">気どらない、北上の一皿</p>
        </div>
      </section>

      <section className="home-info-section" aria-labelledby="home-info-title">
        <div className="home-info-header">
          <span className="section-label section-label-both">Information</span>
          <h2 id="home-info-title">営業日と駐車場</h2>
          <p>ご来店前にご確認ください</p>
        </div>
        {infoLoading ? (
          <p className="shop-info-loading">読み込み中…</p>
        ) : (
          <div className="home-info-grid">
            <article className="home-info-card">
              <span className="home-info-number">01</span>
              <h3>営業カレンダー</h3>
              <p>{shopInfo?.calendar_text ? formatText(shopInfo.calendar_text) : '営業日についてはお問い合わせください。'}</p>
            </article>
            <article className="home-info-card">
              <span className="home-info-number">02</span>
              <h3>駐車場の案内</h3>
              <p>{shopInfo?.parking_text ? formatText(shopInfo.parking_text) : '駐車場の詳細は店舗案内をご確認ください。'}</p>
            </article>
          </div>
        )}
        <button className="home-info-link" type="button" onClick={() => navigate('/access')}>
          店舗案内を詳しく見る
        </button>
      </section>

      <section className="food-gallery" aria-labelledby="food-gallery-title">
        <div className="food-gallery-header">
          <span className="section-label section-label-both">Our dishes</span>
          <h2 id="food-gallery-title">気どらない、北上の一皿</h2>
        </div>
        <div className="food-gallery-grid">
          {foodPhotos.map((photo, index) => (
            <img key={photo} src={`/images/${photo}`} alt={`macaroni. 料理写真 ${index + 1}`} loading="lazy" />
          ))}
        </div>
      </section>

      <section className="insta-section">
        <div className="insta-section-header reveal">
          <span className="section-label section-label-both">Instagram</span>
        </div>
        <div className="insta-grid reveal">
          {instaPhotos.map((photo, index) => (
            <a key={photo} className="insta-tile" href="https://www.instagram.com/macaroni.kitakami/" target="_blank" rel="noopener noreferrer">
              <img src={`/images/${photo}`} alt={`macaroni. Instagram photo ${index + 1}`} loading="lazy" />
              <div className="insta-tile-overlay" />
              <div className="insta-tile-icon"><CameraIcon /></div>
            </a>
          ))}
        </div>
        <div className="insta-cta">
          <a className="insta-link" href="https://www.instagram.com/macaroni.kitakami/" target="_blank" rel="noopener noreferrer">
            View on Instagram @macaroni.kitakami
          </a>
        </div>
        <img className="insta-mark" src="/images/logo-mark.png" width="300" height="300" alt="macaroni. マーク" />
      </section>
    </section>
  )
}
