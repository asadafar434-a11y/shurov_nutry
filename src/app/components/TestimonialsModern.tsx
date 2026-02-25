import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export function TestimonialsModern() {
  return (
    <section id="programs" className="py-24 bg-[#8FA335]">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/10 backdrop-blur-sm rounded-[40px] p-16 text-white text-center"
        >
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <Quote className="w-16 h-16 mx-auto text-white/50" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl lg:text-3xl mb-12 leading-relaxed"
            >
              "Программы здорового питания от Елены стали настоящим открытием для меня. 
              Я чувствую больше энергии в течение дня, мое пищеварение улучшилось, 
              и мое настроение стабильно лучше. Это не диета, а образ жизни!"
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center justify-center gap-4"
            >
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
                alt="Анна С."
                className="w-16 h-16 rounded-full border-4 border-white shadow-xl object-cover"
              />
              <div className="text-left">
                <div className="text-xl">Анна С.</div>
                <div className="text-white/80">Довольный клиент</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}