
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const Hero = () => {
  const [imageError, setImageError] = useState(false);
  
  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-0 w-72 h-72 bg-amber-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-amber-600/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Hi, I'm <span className="text-amber-400">Adebayo Musturpha</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Full-stack Developer & Tech Innovator
            </motion.p>
            
            <motion.p 
              className="text-gray-400 max-w-lg mx-auto md:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Creating intelligent solutions to real-world problems through web applications, AI agents, and electronic systems.
            </motion.p>
            
            <motion.div 
              className="pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button className="bg-amber-500 hover:bg-amber-600 text-black font-medium rounded-full px-6">
                <a href="#contact" className="flex items-center gap-2">
                  Contact Me <ArrowRight size={16} />
                </a>
              </Button>
              
              <Button variant="outline" className="border-amber-400 text-amber-400 hover:bg-amber-500/10 hover:text-amber-300 shadow-lg shadow-amber-500/20 rounded-full px-6 transition-all duration-300 backdrop-blur-sm">
                <a href="#projects">View My Work</a>
              </Button>
            </motion.div>
          </div>
          
          <motion.div 
            className="md:w-1/2 flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-amber-500/50">
              <img 
                src={imageError ? "./lovable-uploads/791f0c56-003c-4e07-8d84-648bb0ebe3c9.png" : "./lovable-uploads/a96231c9-263a-44b7-98bf-2509bdccdd67.png"}
                alt="Adebayo Musturpha Kewulere" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  console.error("Image failed to load:", e);
                  setImageError(true);
                }}
                onLoad={() => console.log("Image loaded successfully")}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
