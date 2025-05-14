
import { Github, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#0a0a0a] pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Adebayo<span className="text-amber-400">.dev</span></h3>
            <p className="text-gray-400">
              Creating innovative technological solutions to real-world problems.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Projects", "Contact"].map((link, index) => (
                <li key={index}>
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className="text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/m-zoom" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>
              
              <a 
                href="https://facebook.com/Musturpha Adebayo" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              
              <a 
                href="https://instagram.com/Musturpha Adebayo" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-pink-500 transition-colors"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              
              <a 
                href="https://tiktok.com/@adebayo_musturpha" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-[#FF0050] transition-colors"
              >
                <span className="font-bold">TT</span>
                <span className="sr-only">TikTok</span>
              </a>
            </div>
            <p className="mt-4 text-gray-400">
              WhatsApp: <a href="https://wa.me/2349047124674" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">+234 904 712 4674</a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Adebayo Musturpha Kewulere. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
