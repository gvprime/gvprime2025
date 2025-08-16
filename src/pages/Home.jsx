import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import FAQ from '../components/FAQ';
import Journey from '../components/Journey';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-[#020617] text-[#e2e8f0]">
      <Header />
      
      <main>
        <Hero />
        
        <Services />
        
        <FAQ />
        
        <Journey />
        
        <About />
        
        <Contact />
      </main>
      
      
    </div>
  );
}