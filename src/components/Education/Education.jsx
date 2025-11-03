import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { FaGraduationCap, FaCalendarAlt, FaAward } from 'react-icons/fa';
import { educationData } from '../../data/projectsData';
import './Education.css';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section education">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>

        <div className="education-content" ref={ref}>
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              className="education-card card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="education-icon">
                <FaGraduationCap />
              </div>

              <div className="education-details">
                <h3 className="education-degree">{edu.degree}</h3>
                <h4 className="education-field">{edu.field}</h4>
                <p className="education-institution">{edu.institution}</p>

                <div className="education-meta">
                  <span className="education-duration">
                    <FaCalendarAlt />
                    {edu.duration}
                  </span>
                  <span className="education-cgpa">
                    <FaAward />
                    CGPA: {edu.cgpa}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
