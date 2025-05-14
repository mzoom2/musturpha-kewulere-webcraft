
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-amber-500/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            About <span className="text-amber-400">Me</span>
          </motion.h2>
          
          <motion.p
            className="text-lg text-gray-300 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I am Adebayo Musturpha Kewulere, a versatile developer and innovator passionate about creating technological solutions that solve real-world problems. With expertise in web development, AI systems, and electronics, I bring a unique blend of skills to every project.
          </motion.p>
          
          <motion.p 
            className="text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            My journey in technology began with a fascination for how digital systems can transform lives. Today, I focus on developing applications that are not only functional but also intuitive and accessible. Whether it's crafting responsive websites, building powerful APIs, or creating intelligent AI agents, I'm committed to excellence and continuous learning.
          </motion.p>
          
          <motion.div 
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold mb-2">Vision</h3>
              <p className="text-gray-400">Creating technology that empowers individuals and communities to overcome challenges and realize their potential.</p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold mb-2">Mission</h3>
              <p className="text-gray-400">To develop innovative, accessible solutions that address real needs while pushing the boundaries of what's possible.</p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold mb-2">Values</h3>
              <p className="text-gray-400">Quality, innovation, inclusivity, and continuous growth drive everything I create and every collaboration I engage in.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
