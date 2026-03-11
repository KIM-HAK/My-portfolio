import { motion } from 'motion/react';
import { ArrowDown, Download } from 'lucide-react';
import profile from "../../assets/images/profile.jpg";

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-muted-foreground mb-2">Hello, I'm</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl mb-2">John Doe</h1>
              <h2 className="text-3xl md:text-4xl text-muted-foreground">Full Stack Developer</h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground max-w-lg"
            >
              Passionate about creating beautiful, functional web applications that solve real-world
              problems. Specialized in building responsive and user-friendly digital experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => scrollToSection('#projects')}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                View Projects
                <ArrowDown className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollToSection('#contact')}
                className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
              >
                Contact Me
              </button>
              <button className="px-6 py-3 border border-border rounded-lg hover:bg-secondary transition-colors flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download CV
              </button>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-20"></div>
              <img
                src={profile}
                alt="Profile"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-background shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
