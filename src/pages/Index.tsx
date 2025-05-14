
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    
    // Mark component as loaded
    setIsLoaded(true);
    console.log("Index page component mounted");
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      console.log("Index page component unmounted");
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] text-white overflow-x-hidden">
      <Header scrollY={scrollY} />
      <main className="w-full">
        {isLoaded && (
          <>
            <Hero />
            <About />
            <Services />
            <Skills />
            <Projects />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
