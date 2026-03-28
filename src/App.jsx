import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import bgImage from "./assets/bg.jpg";

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden text-[#F3EDEE]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.72),rgba(18,7,11,0.93))]" />

      <div className="relative">
        <Navbar />
        <Hero />
        <About />
        <Footer />
      </div>
    </main>
  );
}

export default App;