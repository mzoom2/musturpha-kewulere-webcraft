
import { motion } from "framer-motion";
import { 
  Globe, 
  Server, 
  Code, 
  Cpu, 
  Bot,
  MessageCircle
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Creating responsive, modern websites and web applications optimized for performance and user experience."
  },
  {
    icon: Server,
    title: "REST APIs",
    description: "Building robust and scalable API solutions that connect your applications and services seamlessly."
  },
  {
    icon: Code,
    title: "AI Modules & Agents",
    description: "Developing intelligent systems and AI solutions tailored to automate tasks and enhance decision-making."
  },
  {
    icon: Cpu,
    title: "Microcontrollers & Electronics",
    description: "Designing and implementing electronic systems using microcontrollers for IoT and automation projects."
  },
  {
    icon: Bot,
    title: "Telegram Bots",
    description: "Creating custom Telegram bots that automate communications and provide valuable services to users."
  },
  {
    icon: MessageCircle,
    title: "Technical Consultation",
    description: "Providing expert advice and strategies for implementing technical solutions to complex problems."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-[#0f0f0f]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">My <span className="text-amber-400">Services</span></h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Comprehensive technical solutions designed to solve real-world problems and drive innovation.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/30 border border-gray-700/50 rounded-lg p-6 hover:border-amber-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-4 text-amber-400 bg-amber-400/10 p-3 inline-block rounded-lg">
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
