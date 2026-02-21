import { motion } from 'motion/react';
import { ArrowRight, Play, Menu } from 'lucide-react';
import heroImage from 'figma:asset/c6321bc658df8915369191499ea66641bd0a1058.png';
import aboutImage from 'figma:asset/a8eea92051d14e6a7c46659a265d548f3f638cea.png';
import contactImage from 'figma:asset/9a32dbb6ed65f0283e8974d5278932d4bcae051e.png';

export function Hero() {
  return (
    <section className="min-h-screen bg-[#0a0a0a] relative flex items-center justify-center overflow-hidden">
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
        <button className="flex items-center gap-3 px-5 py-2.5 border border-white/20 hover:border-emerald-400 text-white/60 hover:text-white transition-colors group">
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
              <p className="text-emerald-400 text-sm uppercase tracking-[0.3em] mb-8">
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
                className="px-8 py-4 border border-white/20 hover:border-emerald-400 text-white hover:text-emerald-400 transition-all duration-300 text-sm uppercase tracking-wider group"
              >
                Записаться
              </button>
            </motion.div>
          </motion.div>

          {/* Right side - Hero image with decorative elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative"
          >
            {/* Main image circle */}
            <div className="relative w-full aspect-square max-w-xl mx-auto">
              {/* Decorative circle border */}
              <div className="absolute inset-0 rounded-full border border-white/10"></div>
              <div className="absolute inset-8 rounded-full border border-white/5"></div>
              
              {/* Center image */}
              <div className="absolute inset-16 rounded-full overflow-hidden border-4 border-white/5">
                <img
                  src={heroImage}
                  alt="Healthy food"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative small circles around */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute -top-4 left-1/4 w-24 h-24 rounded-full overflow-hidden border-2 border-white/10"
              >
                <img src={aboutImage} alt="" className="w-full h-full object-cover" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="absolute bottom-8 -left-8 w-32 h-32 rounded-full overflow-hidden border-2 border-white/10"
              >
                <img src={contactImage} alt="" className="w-full h-full object-cover" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.6 }}
                className="absolute -bottom-4 right-8 w-28 h-28 rounded-full overflow-hidden border-2 border-white/10"
              >
                <img src="https://images.unsplash.com/photo-1642339800099-921df1a0a958?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwZm9vZCUyMGJvd2x8ZW58MXx8fHwxNzY5MzUyODA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="" className="w-full h-full object-cover" />
              </motion.div>
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
          Мы создаем <span className="text-emerald-400">здоровье</span>
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
              <div className="w-12 h-12 border border-white/20 group-hover:border-emerald-400 flex items-center justify-center transition-colors">
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