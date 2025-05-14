
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  scrollY: number;
}

const Header = ({ scrollY }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = ["home", "about", "services", "skills", "projects", "contact"];
    
    const handleScroll = () => {
      const currentPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          
          if (currentPosition >= offsetTop && currentPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? "bg-black/80 backdrop-blur-sm py-3" : "py-6 bg-transparent"}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-2xl md:text-3xl font-bold text-amber-400">
            Adebayo<span className="text-white">.dev</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className={`text-base hover:text-amber-400 transition-colors ${activeSection === link.href.substring(1) ? "text-amber-400 font-medium" : "text-gray-300"}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Navigation Trigger */}
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden text-white hover:text-amber-400 hover:bg-transparent"
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open Menu</span>
          </Button>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="fixed inset-0 bg-black/95 z-50 flex flex-col md:hidden">
              <div className="flex justify-end p-6">
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white hover:text-amber-400 hover:bg-transparent"
                >
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close Menu</span>
                </Button>
              </div>
              <nav className="flex flex-col items-center justify-center flex-1">
                <ul className="space-y-6 text-center">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <a 
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`text-xl hover:text-amber-400 transition-colors ${activeSection === link.href.substring(1) ? "text-amber-400 font-medium" : "text-gray-300"}`}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
