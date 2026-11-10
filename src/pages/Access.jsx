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
      <section
        className="info-block"
        style={{ paddingTop: 'clamp(7rem, 14vw, 10rem)', paddingBottom: '4rem' }}
      >
        <div
          className="shop-info-inner"
          style={{ width: 'min(100% - 2rem, 960px)', margin: '0 auto' }}
        >
          <h1
            style={{
              marginBottom: '2rem',
              color: 'var(--ink)',
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              letterSpacing: '.08em',
              textAlign: 'center',
            }}
          >
            INFORMATION
          </h1>
          <img
            src="/documents/files_1581565-2026-11-10T07-40-27-564Z-image.png"
            alt="営業時間、営業カレンダー、駐車場のご案内"
            loading="lazy"
            style={{
              display: 'block',
              width: '100%',
              height: 'auto',
              margin: '0 auto 2rem',
            }}
          />
          <p
            className="shop-info-text shop-info-text-summary"
            style={{
              whiteSpace: 'pre-line',
              margin: 0,
              padding: 0,
              background: 'transparent',
              border: 'none',
              boxShadow: 'none',
            }}
          >
            {informationText}
          </p>
        </div>
      </section>
    </section>
  )
}
