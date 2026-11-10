import { Link } from 'react-router-dom'

const informationSections = [
  {
    title: '席数',
    text: '２１席（テーブル１５席、カウンター６席）',
  },
  {
    title: '駐車場',
    text: '８台（店頭３台、道路を挟んだ斜め向かい側５台）\n※駐車場に限りがある為、ランチタイムにご利用の際は、１グループ４名様までは、【お車１台に乗り合わせでのご来店】をお願いしております。\nお一人様１台ずつでのご来店は、他のお客様が停められ無くなる為、ご遠慮ください。',
  },
  {
    title: '営業時間',
    text: 'LUNCH 11:30~14:30 CLOSE 14:00L.O 最終入店 13:40 になります。\nDINNER 17:30~21:30 CLOSE 20:00L.O 最終入店 19:40 になります。',
  },
  {
    title: '定休日',
    text: '毎週火曜日（祝日の場合は翌水曜日）\n※不定休日がございます。営業カレンダーをご確認ください。',
  },
]

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
          <div className="shop-info-content">
            {informationSections.map((section) => (
              <section className="shop-info-section" key={section.title}>
                <h3 className="shop-info-heading">{section.title}</h3>
                <p className="shop-info-text">{section.text}</p>
              </section>
            ))}
          </div>
          <img
            className="shop-info-image"
            src="/images/access-info.jpg"
            alt="営業時間・営業カレンダー・駐車場案内"
            loading="lazy"
          />
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
