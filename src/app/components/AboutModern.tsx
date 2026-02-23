import { motion } from 'motion/react';
import { Award, Users, TrendingUp } from 'lucide-react';
import aboutImage from '@/assets/a8eea92051d14e6a7c46659a265d548f3f638cea.png';

export function AboutModern() {
  return (
    <section id="about" className="py-32 bg-[#0a0a0a] border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Decorative border */}
              <div className="absolute -inset-4 border border-white/5"></div>
              
              <div className="relative overflow-hidden">
                <img
                  src={aboutImage}
                  alt="Елена Озер"
                  className="w-full h-[700px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* Stats overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-8 -right-8 bg-emerald-500 text-white p-8"
              >
                <div className="text-5xl font-bold mb-2">10+</div>
                <div className="text-xs uppercase tracking-wider opacity-90">Лет опыта</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <p className="text-emerald-400 text-xs uppercase tracking-[0.3em] mb-6">
                Философия
              </p>
            </motion.div>

            <h2 className="text-5xl lg:text-6xl mb-8 text-white font-bold leading-tight uppercase tracking-wide">
              Путь к<br />здоровью
            </h2>

            <p className="text-lg text-white/50 mb-10 leading-relaxed">
              Более 10 лет я помогаю людям обрести гармонию через персонализированные программы питания. 
              Каждая программа создается индивидуально с учетом вашего образа жизни и целей.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-3 gap-8 mb-12 pb-12 border-b border-white/5">
              {[
                { number: '500+', label: 'Клиентов' },
                { number: '98%', label: 'Успеха' },
                { number: '24/7', label: 'Поддержка' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 * index }}
                >
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-xs text-white/40 uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Features */}
            <div className="space-y-6">
              {[
                'Индивидуальный подход к каждому клиенту',
                'Научно обоснованные методики питания',
                'Постоянная поддержка на пути к цели'
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 * index }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-px h-8 bg-emerald-400 group-hover:h-12 transition-all duration-300"></div>
                  <p className="text-white/60 group-hover:text-white transition-colors pt-1">
                    {feature}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-12 px-8 py-4 border border-white/20 hover:border-emerald-400 text-white hover:text-emerald-400 transition-all duration-300 text-sm uppercase tracking-wider"
            >
              Узнать больше
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}