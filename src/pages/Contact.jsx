export default function Contact() {
  return (
    <section className="page" id="page-contact">
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
            <img src="/images/logo.png" alt="macaroni." className="contact-logo" />
          </p>
          <p className="contact-addr">岩手県北上市新穀町1丁目7-35</p>
          <p className="contact-tel">
            <a href="tel:0197726672">0197-72-6672</a>
          </p>
          <div className="contact-info-pdf-wrap">
            <h2 className="contact-info-pdf-title">INFORMATION</h2>
            <object
              className="contact-info-pdf"
              data="/documents/information.pdf"
              type="application/pdf"
              aria-label="営業時間・営業カレンダー・駐車場案内"
            >
              <p>店舗案内PDFをご確認ください。</p>
            </object>
            <a
              className="shop-info-pdf-link"
              href="/documents/information.pdf"
              target="_blank"
              rel="noreferrer"
            >
              店舗案内PDFを開く
            </a>
          </div>
        </div>
      </section>
    </section>
  )
}
