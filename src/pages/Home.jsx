import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase.js'
import { useRevealAnimation } from '../hooks/useRevealAnimation.js'

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

    </section>
  )
}
