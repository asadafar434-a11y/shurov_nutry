import { motion } from 'motion/react';
import heroImage from 'figma:asset/c6321bc658df8915369191499ea66641bd0a1058.png';

export function ServicesModern() {
  return (
    <section id="services" className="py-24 bg-[#A4B83E]">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Top card - Our Healthy Nutrition Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#8FA335] rounded-[40px] p-12 mb-8 shadow-2xl"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h2 className="text-4xl lg:text-5xl mb-6">
                Услуги по здоровому
                <br />
                питанию
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-xl">
                Предлагаю широкий спектр услуг по питанию, помогаю достичь 
                оптимального здоровья и благополучия через персонализированное планирование 
                рациона и профессиональные консультации.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-[32px] overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src={heroImage}
                  alt="Елена Озер - консультация по питанию"
                  className="w-full h-[400px] object-cover"
                />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-4 -right-4 bg-white rounded-full px-8 py-4 shadow-xl"
              >
                <div className="text-center">
                  <div className="text-sm text-gray-600">Онлайн программы</div>
                  <div className="text-xl text-gray-900">Индивидуальный план</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="absolute top-6 -left-4 bg-white rounded-full px-6 py-3 shadow-xl"
              >
                <span className="text-gray-900 font-medium">Контроль веса</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom cards grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left card - Ready to start */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-white rounded-[40px] p-12 shadow-2xl"
          >
            <h3 className="text-3xl mb-6 text-gray-900">
              Готовы начать свой
              <br />
              путь к здоровому
              <br />
              питанию?
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Начните свой путь к здоровому питанию уже сегодня с программами, 
              разработанными специально для вас. Помогу достичь ваших целей с 
              индивидуальным подходом и постоянной поддержкой.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-[#A4B83E] text-white rounded-full hover:bg-[#8FA335] transition-all duration-300"
            >
              Начать путь →
            </motion.button>
          </motion.div>

          {/* Right card - Image with hashtag */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-[40px] overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1752766074879-62b66c5f3477?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwZm9vZCUyMGJvd2wlMjBjb2xvcmZ1bCUyMHZlZ2V0YWJsZXN8ZW58MXx8fHwxNzY3OTQzOTcwfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Healthy meal"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-[#A4B83E] text-white px-6 py-3 rounded-full inline-block mb-4">
                <span className="text-xl">#ЗдоровоеПитание</span>
              </div>
              <h3 className="text-white text-2xl mb-2">Ваша диета - моя забота</h3>
              <p className="text-white/90">Каждый день свежие и полезные блюда</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}