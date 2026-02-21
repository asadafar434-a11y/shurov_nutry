import { motion } from 'motion/react';
import { Salad, TrendingUp, Baby, Dumbbell, Heart, Users } from 'lucide-react';

const services = [
  {
    icon: Salad,
    title: 'Персональное меню',
    description: 'Разработка индивидуального плана питания с учетом ваших предпочтений, образа жизни и целей',
    features: ['Анализ рациона', 'Подбор продуктов', 'Рецепты блюд']
  },
  {
    icon: TrendingUp,
    title: 'Коррекция веса',
    description: 'Здоровое снижение или набор веса без стресса для организма и возврата килограммов',
    features: ['Расчет калорий', 'Контроль прогресса', 'Поддержка 24/7']
  },
  {
    icon: Dumbbell,
    title: 'Спортивное питание',
    description: 'Программы питания для спортсменов и людей с активным образом жизни',
    features: ['Набор мышечной массы', 'Сушка', 'Выносливость']
  },
  {
    icon: Heart,
    title: 'Лечебное питание',
    description: 'Разработка рациона при различных заболеваниях и нарушениях обмена веществ',
    features: ['Диабет', 'ЖКТ проблемы', 'Аллергии']
  },
  {
    icon: Baby,
    title: 'Питание для детей',
    description: 'Сбалансированные программы питания для детей и подростков',
    features: ['Рост и развитие', 'Иммунитет', 'Энергия']
  },
  {
    icon: Users,
    title: 'Семейные консультации',
    description: 'Комплексный подход к питанию всей семьи с учетом потребностей каждого',
    features: ['Общий рацион', 'Обучение', 'Экономия времени']
  }
];

export function Services() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-6 text-gray-900">
            Услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Комплексный подход к здоровому питанию для достижения ваших целей
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl mb-6 group-hover:shadow-xl"
              >
                <service.icon className="w-8 h-8 text-white" />
              </motion.div>

              <h3 className="text-2xl mb-4 text-gray-900">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="mt-8 w-full py-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-all duration-300 transform group-hover:scale-105"
              >
                Узнать подробнее
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
