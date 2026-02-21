import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Анна Соколова',
    role: 'Маркетолог',
    image: 'https://images.unsplash.com/photo-1545311630-51ea4a4c84de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHdvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY5MjgzNjcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    text: 'За 3 месяца работы с Еленой я не только похудела на 12 кг, но и полностью изменила свое отношение к еде.',
    result: '-12 кг'
  },
  {
    name: 'Дмитрий Петров',
    role: 'IT-специалист',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzc21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2OTI2NzE1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    text: 'Программа спортивного питания помогла мне набрать 8 кг мышечной массы.',
    result: '+8 кг'
  },
  {
    name: 'Мария Иванова',
    role: 'Предприниматель',
    image: 'https://images.unsplash.com/photo-1745434159123-4908d0b9df94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHNtaWxpbmd8ZW58MXx8fHwxNzY5MzE1NDIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    text: 'После родов я долго не могла вернуться в форму. Елена составила программу с учетом грудного вскармливания.',
    result: '-15 кг'
  }
];

export function Testimonials() {
  return (
    <section id="programs" className="py-32 bg-[#0a0a0a] border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-emerald-400 text-xs uppercase tracking-[0.3em] mb-6">
            Отзывы
          </p>
          <h2 className="text-5xl lg:text-6xl mb-6 text-white font-bold uppercase tracking-wide">
            Истории успеха
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Реальные результаты реальных людей
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 hover:border-white/20 p-8 transition-all duration-500 group"
            >
              {/* Quote */}
              <Quote className="w-10 h-10 text-emerald-400/30 mb-6" />

              {/* Text */}
              <p className="text-white/60 group-hover:text-white/80 mb-8 leading-relaxed transition-colors">
                {testimonial.text}
              </p>

              {/* Result badge */}
              <div className="mb-8">
                <span className="px-4 py-2 border border-emerald-400/50 text-emerald-400 text-sm font-semibold uppercase tracking-wider">
                  {testimonial.result}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div>
                  <div className="font-semibold text-white text-sm uppercase tracking-wide">{testimonial.name}</div>
                  <div className="text-xs text-white/40 uppercase tracking-wider">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}