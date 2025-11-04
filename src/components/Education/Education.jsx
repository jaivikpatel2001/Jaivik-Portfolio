import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { FaGraduationCap, FaCalendarAlt, FaAward, FaUniversity } from 'react-icons/fa';
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

        <div className="education-timeline" ref={ref}>
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="timeline-marker">
                <FaGraduationCap />
              </div>

              <div className="timeline-content card">
                <div className="timeline-header">
                  <h3 className="timeline-title">{edu.degree}</h3>
                  <span className="timeline-institution">
                    <FaUniversity /> {edu.institution}
                  </span>
                </div>

                {edu.field && (
                  <div className="timeline-field">
                    {edu.field}
                  </div>
                )}

                <div className="timeline-meta">
                  <span className="timeline-duration">
                    <FaCalendarAlt />
                    {edu.duration}
                  </span>
                  {edu.cgpa && (
                    <span className="timeline-grade">
                      <FaAward />
                      CGPA: {edu.cgpa}
                    </span>
                  )}
                  {edu.percentage && (
                    <span className="timeline-grade">
                      <FaAward />
                      {edu.percentage}
                    </span>
                  )}
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
