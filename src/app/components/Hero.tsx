import { motion } from 'motion/react';
import { Menu } from 'lucide-react';
import heroImage from '@/assets/c6321bc658df8915369191499ea66641bd0a1058.png';
import aboutImage from '@/assets/a8eea92051d14e6a7c46659a265d548f3f638cea.png';
import contactImage from '@/assets/9a32dbb6ed65f0283e8974d5278932d4bcae051e.png';
import foodImage from '@/assets/e5294f751d0c5ac385da581d5c92cf3e1899c8a5.png';

const orbits = [
  { src: aboutImage, size: 72, orbitPct: 65, duration: 28 },
  { src: contactImage, size: 88, orbitPct: 82, duration: 35 },
  { src: foodImage, size: 80, orbitPct: 100, duration: 42 },
];

export function Hero() {
  return (
    <section className="min-h-screen bg-surface relative flex items-center justify-center overflow-x-clip">
      <style>{`
        @keyframes hero-orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes hero-orbit-reverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
      `}</style>

      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Top label */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute top-32 left-12 hidden lg:block"
      >
        <p className="text-white/40 text-xs uppercase tracking-[0.3em]">Distinguished</p>
      </motion.div>

      {/* Left sidebar navigation */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute left-12 top-1/2 -translate-y-1/2 hidden lg:block"
      >
        <button className="flex items-center gap-3 px-5 py-2.5 border border-white/20 hover:border-brand text-white/60 hover:text-white transition-colors group">
          <Menu className="w-4 h-4" />
          <span className="text-xs uppercase tracking-wider">Меню</span>
        </button>
      </motion.div>

      {/* Main content */}
      <div className="container mx-auto px-6 md:px-12 pt-24 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-8"
            >
              <h1 className="text-7xl lg:text-8xl text-white uppercase tracking-[0.15em] font-bold mb-6 leading-none">
                ELENA
              </h1>
              <p className="text-brand text-sm uppercase tracking-[0.3em] mb-8">
                Art of Nutrition
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xl text-white/60 mb-12 leading-relaxed max-w-lg"
            >
              Индивидуальные программы питания, созданные с заботой о вашем здоровье и благополучии
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex items-center gap-4"
            >
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border border-white/20 hover:border-brand text-white hover:text-brand transition-all duration-300 text-sm uppercase tracking-wider group"
              >
                Записаться
              </button>
            </motion.div>
          </motion.div>

          {/* Right side - Hero image with orbiting elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-xl mx-auto">
              {/* Center image */}
              <div className="absolute inset-[22%] rounded-full overflow-hidden border-2 border-white/5 z-10">
                <img
                  src={heroImage}
                  alt="Healthy food"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Orbiting satellites */}
              {orbits.map((orbit, i) => {
                const offset = (100 - orbit.orbitPct) / 2;
                return (
                  <div
                    key={i}
                    className="absolute rounded-full border border-white/[0.04]"
                    style={{
                      width: `${orbit.orbitPct}%`,
                      height: `${orbit.orbitPct}%`,
                      top: `${offset}%`,
                      left: `${offset}%`,
                      animation: `hero-orbit ${orbit.duration}s linear infinite`,
                    }}
                  >
                    <div
                      className="absolute rounded-full overflow-hidden border-2 border-white/10 shadow-lg shadow-black/20"
                      style={{
                        width: orbit.size,
                        height: orbit.size,
                        top: `calc(50% - ${orbit.size / 2}px)`,
                        left: -(orbit.size / 2),
                      }}
                    >
                      <img
                        src={orbit.src}
                        alt=""
                        className="w-full h-full object-cover"
                        style={{
                          animation: `hero-orbit-reverse ${orbit.duration}s linear infinite`,
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom tagline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-12 left-0 right-0 text-center"
      >
        <p className="text-white/30 text-xs uppercase tracking-[0.3em]">
          Мы создаем <span className="text-brand">здоровье</span>
        </p>
      </motion.div>

      {/* Right sidebar - How to section */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="absolute right-12 top-1/2 -translate-y-1/2 hidden xl:block"
      >
        <p className="text-white/40 text-xs uppercase tracking-[0.3em] mb-6">How to</p>
        <div className="space-y-4">
          {[
            { icon: '♥', text: 'Enjoy' },
            { icon: '⚡', text: 'Use' },
            { icon: '🌱', text: 'Grow' },
            { icon: '✨', text: 'Shine' }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-2 group cursor-pointer">
              <div className="w-12 h-12 border border-white/20 group-hover:border-brand flex items-center justify-center transition-colors">
                <span className="text-xl">{item.icon}</span>
              </div>
              <span className="text-white/40 group-hover:text-white text-[10px] uppercase tracking-wider transition-colors">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
