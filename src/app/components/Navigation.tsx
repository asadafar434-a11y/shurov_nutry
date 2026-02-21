import { motion } from 'motion/react';
import { MapPin, Instagram, Facebook, Mail, Phone } from 'lucide-react';

const navItems = [
  { name: 'О специалисте', id: 'about' },
  { name: 'Программы', id: 'services' },
  { name: 'Результаты', id: 'programs' },
];

export function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/5"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between py-5">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3"
          >
            <div className="text-center">
              <h1 className="text-3xl text-white uppercase tracking-[0.3em] font-bold">
                ELENA
              </h1>
              <p className="text-[10px] text-emerald-400 uppercase tracking-[0.2em] mt-0.5">
                Art of Nutrition
              </p>
            </div>
          </motion.div>

          {/* Center Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="text-white/70 hover:text-white transition-colors duration-300 text-sm uppercase tracking-wider"
                >
                  {item.name}
                </button>
              </motion.li>
            ))}
          </ul>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-3"
          >
            <a href="#" className="w-9 h-9 border border-white/20 rounded-sm flex items-center justify-center hover:border-emerald-400 hover:text-emerald-400 text-white/60 transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 border border-white/20 rounded-sm flex items-center justify-center hover:border-emerald-400 hover:text-emerald-400 text-white/60 transition-colors">
              <Mail className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 border border-white/20 rounded-sm flex items-center justify-center hover:border-emerald-400 hover:text-emerald-400 text-white/60 transition-colors">
              <Phone className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}