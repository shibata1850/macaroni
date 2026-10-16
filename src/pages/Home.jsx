import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRevealAnimation } from '../hooks/useRevealAnimation.js'

export default function Home() {
  const navigate = useNavigate()
  useRevealAnimation()
  const [lightbox, setLightbox] = useState(null)
  const videoRef = useRef(null)
  const [soundOn, setSoundOn] = useState(false)

  const toggleSound = () => {
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setSoundOn(!v.muted)
  }

  return (
    <section className="page" id="page-home">
      <section className="top-video-hero">
        <video
          ref={videoRef}
          className="top-video"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-veg-pc.jpg"
          aria-label="macaroni. 店内と料理の紹介動画"
        >
          <source src="/videos/macaroni.mp4.mp4" type="video/mp4" />
        </video>
        <button
          type="button"
          className="video-sound-toggle"
          onClick={toggleSound}
          aria-label={soundOn ? '音声をオフにする' : '音声をオンにする'}
        >
          {soundOn ? (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M11 5 6 9H3v6h3l5 4V5z" fill="currentColor" stroke="none" />
              <path d="M16 9a4 4 0 0 1 0 6" />
              <path d="M19 7a8 8 0 0 1 0 10" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M11 5 6 9H3v6h3l5 4V5z" fill="currentColor" stroke="none" />
              <path d="M16 9a4 4 0 0 1 0 6" />
              <path d="M22 9l-5 6M17 9l5 6" />
            </svg>
          )}
        </button>
      </section>

      <section className="home-info-section" aria-labelledby="home-info-title">
        <div className="home-info-header">
          <span className="section-label section-label-both">Information</span>
        </div>
        <div className="home-info-images">
          <div className="home-info-col home-info-left">
            <img
              src="/images/home-calendar-hours.png"
              alt="営業カレンダーと営業時間"
              loading="lazy"
              onClick={() => setLightbox('/images/home-calendar-hours.png')}
            />
          </div>
          <div className="home-info-col home-info-right">
            <img
              src="/images/home-parking-info.png"
              alt="駐車場の案内図"
              loading="lazy"
              onClick={() => setLightbox('/images/home-parking-info.png')}
            />
          </div>
        </div>
        <button className="home-info-link" type="button" onClick={() => navigate('/access')}>
          店舗案内を詳しく見る
        </button>
      </section>

      {lightbox && (
        <div className="lightbox-overlay" onClick={() => setLightbox(null)}>
          <img src={lightbox} alt="拡大画像" className="lightbox-img" />
        </div>
      )}

    </section>
  )
}
