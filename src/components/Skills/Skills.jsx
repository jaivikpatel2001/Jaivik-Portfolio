import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { skillsData } from '../../data/projectsData';
import './Skills.css';

const skillIcons = {
  'HTML': 'html.png',
  'CSS': 'css-3.png',
  'JavaScript': 'js.png',
  'React.js': 'react.png',
  'Bootstrap': 'bootstrap.png',
  'Tailwind CSS': 'tailwind.png',
  'Node.js': 'node.png',
  'Express': 'express.png',
  'MongoDB': 'mongodb.png',
  'SQL': 'mysql.png',
  'Git': 'git.png',
  'GitHub': 'github.png',
  'Postman': 'postman.png',
  'VS Code': 'vscode.png',
  'Replit': 'replit.png'
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Skills & Technologies
        </motion.h2>

        <div className="skills-content" ref={ref}>
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              className="skills-category"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-card"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="skill-icon">
                      <img
                        src={`/${skillIcons[skill.name]}`}
                        alt={skill.name}
                        className="skill-image"
                      />
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
