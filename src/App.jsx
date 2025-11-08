import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedGrid from './components/FeaturedGrid';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <FeaturedGrid />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default App;
