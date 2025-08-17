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
    <div className="bg-darker-bg text-text-lighter min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <div className="space-y-20 lg:space-y-32 py-20 container mx-auto px-4">
          <Services />
          <Journey />
          <About />
          <FAQ />
          <Contact />
        </div>
      </main>
      

    </div>
  );
}