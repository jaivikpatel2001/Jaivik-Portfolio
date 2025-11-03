import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import './About.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section about">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="about-content" ref={ref}>
          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="about-image-wrapper">
              <div className="about-image-placeholder">
                <span>JP</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3>Software Engineer specializing in MERN Stack Development</h3>
            <p>
              Hello! I'm Jaivik Patel, a passionate software engineer with a strong focus on building
              modern, scalable web applications. With expertise in the MERN stack (MongoDB, Express.js,
              React.js, and Node.js), I transform ideas into elegant digital solutions.
            </p>
            <p>
              My journey in web development has been driven by curiosity and a commitment to continuous
              learning. I thrive on solving complex problems and creating user-centric applications that
              deliver exceptional experiences.
            </p>
            <p>
              Currently, I'm working as a Full Stack Web Developer at FabAF, where I contribute to
              building innovative solutions and collaborate with talented teams to deliver high-quality
              products. I'm always excited to take on new challenges and expand my skill set.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-number">2+</span>
                <span className="highlight-label">Years Experience</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">6+</span>
                <span className="highlight-label">Projects Completed</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">100%</span>
                <span className="highlight-label">Client Satisfaction</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
