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
        <div className="menu-full-inner">
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
      </section>
    </section>
  )
}
