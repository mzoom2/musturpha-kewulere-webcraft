
import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 85 },
      { name: "Responsive Design", level: 90 },
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Python", level: 80 },
      { name: "RESTful APIs", level: 85 },
      { name: "Database Design", level: 75 },
    ]
  },
  {
    category: "Other",
    skills: [
      { name: "AI Development", level: 70 },
      { name: "Electronics", level: 75 },
      { name: "Problem Solving", level: 90 },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-24 bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">Technical <span className="text-amber-400">Skills</span></h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            My expertise spans across various technologies and domains, allowing me to build comprehensive solutions.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {skillsData.map((category, catIndex) => (
            <motion.div 
              key={catIndex}
              className="bg-gray-800/30 border border-gray-700/50 rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-6 text-amber-400">{category.category}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div 
                        className="bg-amber-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 + skillIndex * 0.1 }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold mb-6">Technology Stack</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {["HTML", "CSS", "JavaScript", "Python", "SQL", "Git", "AI/ML", "IoT"].map((tech, index) => (
              <div 
                key={index} 
                className="px-4 py-2 bg-gray-800 rounded-full text-gray-300 border border-gray-700"
              >
                {tech}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
