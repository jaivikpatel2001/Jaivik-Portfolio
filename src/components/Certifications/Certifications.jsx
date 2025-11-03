import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { FaCertificate } from 'react-icons/fa';
import { certificationsData } from '../../data/projectsData';
import './Certifications.css';

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="section certifications">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Certifications
        </motion.h2>

        <div className="certifications-grid" ref={ref}>
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="certification-card card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="certification-icon">
                <FaCertificate />
              </div>

              <div className="certification-content">
                <h3 className="certification-title">{cert.title}</h3>
                <p className="certification-platform">{cert.platform}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
