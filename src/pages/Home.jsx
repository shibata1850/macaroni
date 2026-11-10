import { useRef, useState } from 'react'
import { useRevealAnimation } from '../hooks/useRevealAnimation.js'

export default function Home() {
  useRevealAnimation()
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
          aria-label="macaroni. 店内と料理の紹介動画"
        >
          <source src="/videos/macaroni.mp4.mp4" type="video/mp4" />
        </video>
        <div className="top-video-overlay" />
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

      <section className="home-about-section" aria-labelledby="home-about-title">
        <div className="home-about-inner">
          <h2 id="home-about-title" className="section-title">ABOUT</h2>
          <p className="home-about-quote">our place for everyone</p>
          <p className="home-about-text">
            ここはみんなの居場所。<br />
            気取らず、肩肘張らず、日常的にふらっと立ち寄れる。<br />
            “macaroni.”はそんなお店です。
          </p>
        </div>
      </section>

      <footer className="home-footer">
        <div className="home-footer-building">
          <img
            src="/images/footer-shop-info.png"
            alt="macaroni. の店舗外観"
            loading="lazy"
          />
        </div>
        <div className="home-footer-info">
          <img
            className="home-footer-logo"
            src="/images/logo.png"
            alt="macaroni."
            loading="lazy"
          />
          <address className="home-footer-address">
            <p>〒024-0092</p>
            <p>岩手県北上市新穀町1丁目7-35</p>
          </address>
          <a className="home-footer-phone" href="tel:0197726672">0197-72-6672</a>
        </div>
      </footer>
    </section>
  )
}
