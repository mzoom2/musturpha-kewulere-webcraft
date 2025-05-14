
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online shopping platform with secure payment integration, inventory management, and responsive design.",
    tech: ["HTML", "CSS", "JavaScript", "Python"]
  },
  {
    title: "AI Customer Service Bot",
    description: "An intelligent chatbot that handles customer inquiries, provides product information, and routes complex issues to human support.",
    tech: ["Python", "NLP", "API Integration"]
  },
  {
    title: "Smart Home Automation System",
    description: "IoT-based home automation solution allowing users to control lighting, security, and appliances via mobile app or voice commands.",
    tech: ["Microcontrollers", "Python", "Mobile App"]
  },
  {
    title: "Medical Appointment System",
    description: "Web application for scheduling medical appointments, tracking patient history, and managing clinic resources efficiently.",
    tech: ["JavaScript", "RESTful API", "Database"]
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-[#1a1a1a]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">Featured <span className="text-amber-400">Projects</span></h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            A selection of my recent work showcasing the range of solutions I've developed.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/30 border border-gray-700/50 rounded-lg overflow-hidden hover:border-amber-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-48 bg-gradient-to-r from-amber-500/20 to-amber-700/20"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <Button variant="outline" className="text-amber-400 border-amber-500/50 hover:bg-amber-500/10">
                  <span className="flex items-center gap-2">
                    View Details <ExternalLink size={16} />
                  </span>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button className="bg-amber-500 hover:bg-amber-600 text-black">
            <a href="https://github.com/m-zoom" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              View All Projects <ExternalLink size={16} />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
