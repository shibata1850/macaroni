import HeroVideo from '../components/HeroVideo.jsx'
import Access from './Access.jsx'

export default function Home() {
  return (
    <div className="page home-page" id="page-home">
      <HeroVideo />
      <Access embedded />
    </div>
  )
}
