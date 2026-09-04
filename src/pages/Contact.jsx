export default function Contact() {
  return (
    <section className="page" id="page-contact">
      <section className="page-banner">
        <div
          className="page-banner-img"
          style={{ backgroundImage: 'var(--img-counter)' }}
        />
        <div className="page-banner-overlay" />
        <div className="page-banner-content">
          <p className="label">Contact</p>
          <h1>Get in touch.</h1>
          <p className="jp">お問い合わせ</p>
        </div>
      </section>

      <section className="contact-page">
        <div className="contact-inner">
          <div className="contact-visual">
            <img
              src="/images/contact-info.jpg"
              width="1200"
              height="787"
              alt="macaroni. 店舗外観イラスト"
            />
          </div>
          <p className="contact-shop">
            macaroni<span className="brand-dot-en">.</span>
          </p>
          <p className="contact-addr">岩手県北上市新穀町1丁目7-35</p>
          <p className="contact-tel">
            <a href="tel:0197726672">0197-72-6672</a>
          </p>
        </div>
      </section>
    </section>
  )
}
