import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabase.js'
import { useRevealAnimation } from '../hooks/useRevealAnimation.js'

export default function Access() {
  const [shopInfo, setShopInfo] = useState(null)
  const [loading, setLoading] = useState(true)
  useRevealAnimation()

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('shop_info')
        .select('calendar_text, hours_text, parking_text, holidays_text, updated_at')
        .eq('id', 1)
        .maybeSingle()

      if (!error && data) {
        setShopInfo(data)
      }
      setLoading(false)
    }
    fetchData()
  }, [])

  const hasContent = shopInfo && (
    shopInfo.calendar_text ||
    shopInfo.hours_text ||
    shopInfo.parking_text ||
    shopInfo.holidays_text
  )

  const formatText = (text) => {
    if (!text) return null
    return text.split('\n').map((line, i) => (
      <span key={i}>
        {line}
        {i < text.split('\n').length - 1 && <br />}
      </span>
    ))
  }

  return (
    <section className="page" id="page-access">
      <section className="page-banner">
        <div
          className="page-banner-img"
          style={{ backgroundImage: "url('/images/access-banner.png')" }}
        />
        <div className="page-banner-overlay" />
        <div className="page-banner-content">
          <p className="label">Information</p>
          <h1>Visit us.</h1>
          <p className="jp">店舗案内</p>
        </div>
      </section>

      <section className="info-block">
        <div className="shop-info-inner">
          {loading ? (
            <p className="shop-info-loading">読み込み中…</p>
          ) : hasContent ? (
            <div className="shop-info-content reveal">
              {shopInfo.calendar_text && (
                <div className="shop-info-section">
                  <h2 className="shop-info-heading">営業カレンダー</h2>
                  <p className="shop-info-text">
                    {formatText(shopInfo.calendar_text)}
                  </p>
                </div>
              )}
              {shopInfo.hours_text && (
                <div className="shop-info-section">
                  <h2 className="shop-info-heading">営業時間</h2>
                  <p className="shop-info-text">
                    {formatText(shopInfo.hours_text)}
                  </p>
                </div>
              )}
              {shopInfo.holidays_text && (
                <div className="shop-info-section">
                  <h2 className="shop-info-heading">定休日・休業日</h2>
                  <p className="shop-info-text">
                    {formatText(shopInfo.holidays_text)}
                  </p>
                </div>
              )}
              {shopInfo.parking_text && (
                <div className="shop-info-section">
                  <h2 className="shop-info-heading">駐車場案内</h2>
                  <p className="shop-info-text">
                    {formatText(shopInfo.parking_text)}
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className="shop-info-fallback reveal">
              <img
                src="/images/access-info.jpg"
                alt="営業カレンダー・営業時間・駐車場案内"
                style={{
                  width: '100%',
                  maxWidth: '600px',
                  height: 'auto',
                  display: 'block',
                  margin: '0 auto',
                }}
              />
            </div>
          )}

          <div className="shop-info-admin-link">
            <Link to="/login" className="shop-info-admin-anchor">
              管理者ログイン
            </Link>
          </div>
        </div>
      </section>
    </section>
  )
}
