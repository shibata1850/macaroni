import { Link } from 'react-router-dom'

export default function Access() {
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
          <h2 className="shop-info-title">INFORMATION</h2>
          <div className="shop-info-pdf-wrap">
            <object
              className="shop-info-pdf"
              data="/documents/information.pdf"
              type="application/pdf"
              aria-label="営業時間・営業カレンダー・駐車場案内"
            >
              <p className="shop-info-pdf-fallback">
                PDFを表示できない場合は、下のボタンからご確認ください。
              </p>
            </object>
          </div>
          <a
            className="shop-info-pdf-link"
            href="/documents/information.pdf"
            target="_blank"
            rel="noreferrer"
          >
            店舗案内PDFを開く
          </a>
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
