import { useNavigate } from 'react-router-dom'
import { useRevealAnimation } from '../hooks/useRevealAnimation.js'

export default function Home() {
  const navigate = useNavigate()
  useRevealAnimation()

  return (
    <section className="page" id="page-home">
      <section className="top-video-hero">
        <video
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
      </section>

      <section className="home-info-section" aria-labelledby="home-info-title">
        <div className="home-info-header">
          <span className="section-label section-label-both">Information</span>
          <h2 id="home-info-title">営業日と駐車場</h2>
          <p>ご来店前にご確認ください</p>
        </div>
        <div className="home-info-images">
          <div className="home-info-col home-info-left">
            <img src="/images/home-calendar-hours.png" alt="営業カレンダーと営業時間" loading="lazy" />
          </div>
          <div className="home-info-col home-info-right">
            <img src="/images/home-parking-info.png" alt="駐車場の案内図" loading="lazy" />
          </div>
        </div>
        <button className="home-info-link" type="button" onClick={() => navigate('/access')}>
          店舗案内を詳しく見る
        </button>
      </section>

    </section>
  )
}
