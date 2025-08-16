import Hero from '../components/Hero'
import Services from '../components/Services'
import Journey from "../components/Journey"; // This must match exactly
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Journey />
      <FAQ />
      <Contact />
    </>
  )
}