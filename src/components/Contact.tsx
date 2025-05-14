
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Github, 
  Facebook,
  Instagram, 
  Phone, 
  Mail 
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const socialLinks = [
    { name: "GitHub", icon: Github, url: "https://github.com/m-zoom", color: "hover:text-white" },
    { name: "Facebook", icon: Facebook, url: "https://facebook.com/Musturpha Adebayo", color: "hover:text-blue-500" },
    { name: "Instagram", icon: Instagram, url: "https://instagram.com/Musturpha Adebayo", color: "hover:text-pink-500" },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">Get In <span className="text-amber-400">Touch</span></h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how I can help bring your ideas to life.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-amber-500/20 p-3 rounded-full">
                    <Phone size={20} className="text-amber-400" />
                  </div>
                  <a 
                    href="https://wa.me/2349047124674" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-amber-400 transition-colors"
                  >
                    +234 904 712 4674
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-amber-500/20 p-3 rounded-full">
                    <Mail size={20} className="text-amber-400" />
                  </div>
                  <a 
                    href="mailto:contact@adebayomusturpha.com" 
                    className="text-gray-300 hover:text-amber-400 transition-colors"
                  >
                    contact@adebayomusturpha.com
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.url}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`bg-gray-800 p-3 rounded-full text-gray-300 transition-colors ${link.color}`}
                  >
                    <link.icon size={20} />
                    <span className="sr-only">{link.name}</span>
                  </a>
                ))}
                <a 
                  href="https://tiktok.com/@adebayo_musturpha"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-full text-gray-300 hover:text-[#FF0050] transition-colors"
                >
                  <span className="font-bold text-sm">TT</span>
                  <span className="sr-only">TikTok</span>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Let's Work Together</h3>
              <p className="text-gray-400">
                I'm currently available for freelance work and interesting project opportunities. If you have a project that needs expertise in web development, AI, or electronics, let's discuss how we can collaborate.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-gray-800/30 border border-gray-700/50 rounded-lg p-6">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-300 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                ></textarea>
              </div>
              
              <Button 
                type="submit" 
                className="bg-amber-500 hover:bg-amber-600 text-black w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
