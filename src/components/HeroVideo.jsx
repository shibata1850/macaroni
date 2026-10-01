import { useEffect, useRef, useState } from 'react'
import { homeMedia } from '../config/homeMedia.js'

export default function HeroVideo() {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePlayback = () => {
      if (preference.matches) video.pause()
      else video.play().catch(() => setPlaying(false))
    }
    updatePlayback()
    preference.addEventListener('change', updatePlayback)
    return () => preference.removeEventListener('change', updatePlayback)
  }, [])

  const togglePlayback = () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) video.play().catch(() => setPlaying(false))
    else video.pause()
  }

  return (
    <section className="home-hero" aria-label="macaroni. マカロニ">
      <h1 className="visually-hidden">macaroni. マカロニ — 北上市の洋食店</h1>
      {homeMedia.videoUrl && !failed ? (
        <>
          <video
            ref={videoRef}
            className="home-hero-media"
            src={homeMedia.videoUrl}
            poster={homeMedia.posterUrl}
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="macaroni. 紹介動画（音声なし）"
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onError={() => setFailed(true)}
          />
          <button type="button" className="hero-playback" onClick={togglePlayback} aria-label={playing ? '動画を一時停止' : '動画を再生'}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              {playing ? <path d="M8 5v14M16 5v14" /> : <path d="m8 4 12 8-12 8Z" />}
            </svg>
            <span>{playing ? '一時停止' : '再生'}</span>
          </button>
        </>
      ) : (
        <img className="home-hero-media" src={homeMedia.posterUrl} alt="macaroni. の食材" />
      )}
    </section>
  )
}
