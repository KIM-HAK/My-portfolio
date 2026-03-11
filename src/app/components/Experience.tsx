import { useRef } from 'react';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { GraduationCap, Briefcase, Calendar } from 'lucide-react';

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Technology',
      period: '2018 - 2022',
      description:
        'Focused on web development, software engineering, and database management. Graduated with honors.',
    },
    {
      degree: 'Full Stack Web Development Bootcamp',
      institution: 'Code Academy',
      period: '2022',
      description:
        'Intensive program covering modern web technologies including MERN stack, Vue.js, and cloud deployment.',
    },
  ];

  const experience = [
    {
      role: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      period: '2023 - Present',
      description:
        'Leading development of scalable web applications. Mentoring junior developers and implementing best practices.',
      highlights: ['Led team of 5 developers', 'Improved app performance by 40%', 'Implemented CI/CD pipeline'],
    },
    {
      role: 'Full Stack Developer',
      company: 'Digital Innovations Ltd.',
      period: '2022 - 2023',
      description:
        'Developed and maintained multiple client projects using Vue.js, Node.js, and various databases.',
      highlights: ['Built 10+ client projects', 'Reduced load time by 30%', 'Integrated third-party APIs'],
    },
    {
      role: 'Junior Web Developer',
      company: 'StartUp Hub',
      period: '2021 - 2022',
      description:
        'Assisted in developing responsive websites and learned industry best practices.',
      highlights: ['Collaborated on 5+ projects', 'Learned modern frameworks', 'Improved code quality'],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            My professional journey and educational background
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl">Education</h3>
            </motion.div>

            <div className="space-y-6">
              {education.map((item, index) => (
                <motion.div
                  key={item.degree}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="relative pl-8 pb-6 border-l-2 border-border last:border-l-0"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full border-4 border-background" />
                  <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="w-4 h-4" />
                      {item.period}
                    </div>
                    <h4 className="text-lg mb-1">{item.degree}</h4>
                    <p className="text-muted-foreground mb-3">{item.institution}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl">Experience</h3>
            </motion.div>

            <div className="space-y-6">
              {experience.map((item, index) => (
                <motion.div
                  key={item.role}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="relative pl-8 pb-6 border-l-2 border-border last:border-l-0"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full border-4 border-background" />
                  <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="w-4 h-4" />
                      {item.period}
                    </div>
                    <h4 className="text-lg mb-1">{item.role}</h4>
                    <p className="text-muted-foreground mb-3">{item.company}</p>
                    <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                    <ul className="space-y-1">
                      {item.highlights.map((highlight) => (
                        <li key={highlight} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
