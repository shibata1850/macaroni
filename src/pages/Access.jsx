import { Link } from 'react-router-dom'

const informationText = `席数：２１席（テーブル１５席、カウンター６席）
駐車場：８台（店頭３台、道路を挟んだ斜め向かい側５台）
※駐車場に限りがある為、ランチタイムにご利用の際は、１グループ４名様までは、【お車１台に乗り合わせでのご来店】をお願いしております。
お一人様１台ずつでのご来店は、他のお客様が停められ無くなる為、ご遠慮ください。
営業時間：LUNCH 11:30~14:30 CLOSE 14:00L.O 最終入店 13:40 になります。
DINNER 17:30~21:30 CLOSE 20:00L.O 最終入店 19:40 になります。
定休日：毎週火曜日（祝日の場合は翌水曜日）
※不定休日がございます。営業カレンダーをご確認ください。`

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
          <p className="shop-info-text shop-info-text-summary">{informationText}</p>
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
