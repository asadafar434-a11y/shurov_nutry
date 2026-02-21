import { motion } from 'motion/react';
import { Target, Calendar, MessageCircle, TrendingUp, Apple, Heart } from 'lucide-react';
import { useState } from 'react';
import { ServiceModal } from './ServiceModal';

const services = [
  {
    icon: Target,
    title: 'Персональная программа',
    description: 'Индивидуальный план питания',
    price: '15 000 ₽',
    duration: '7 дней разработки',
    fullDescription: 'Комплексная программа, созданная специально для вас с учетом ваших целей, образа жизни, пищевых предпочтений и медицинских показаний. Включает детальный план питания на каждый день с рецептами и списком покупок.',
    includes: [
      'Первичная консультация (60 минут)',
      'Анализ текущего рациона питания',
      'Индивидуальное меню на 30 дней',
      'Рецепты и способы приготовления',
      'Список покупок на каждую неделю',
      'Рекомендации по режиму питания',
      'PDF-документ с программой'
    ]
  },
  {
    icon: Calendar,
    title: 'Сопровождение 30 дней',
    description: 'Ежедневная поддержка',
    price: '25 000 ₽',
    duration: '30 дней',
    fullDescription: 'Полное сопровождение на протяжении месяца с ежедневной поддержкой, корректировкой меню и мотивацией. Идеальный вариант для тех, кто хочет гарантированного результата под контролем специалиста.',
    includes: [
      'Персональная программа питания',
      'Ежедневная связь в мессенджере',
      'Еженедельные видео-консультации',
      'Корректировка меню по запросу',
      'Анализ пищевого дневника',
      'Мотивационная поддержка',
      'Финальный отчет с рекомендациями'
    ]
  },
  {
    icon: MessageCircle,
    title: 'Разовая консультация',
    description: 'Анализ питания и рекомендации',
    price: '5 000 ₽',
    duration: '60 минут',
    fullDescription: 'Индивидуальная консультация для анализа вашего текущего рациона, обсуждения целей и получения профессиональных рекомендаций по питанию. Отличный старт для знакомства с принципами здорового питания.',
    includes: [
      'Видео-консультация 60 минут',
      'Анализ текущего рациона',
      'Оценка пищевых привычек',
      'Рекомендации по питанию',
      'Ответы на ваши вопросы',
      'Краткий план действий'
    ]
  },
  {
    icon: TrendingUp,
    title: 'Программа похудения',
    description: 'Комплексный подход',
    price: '20 000 ₽',
    duration: '45 дней',
    fullDescription: 'Специализированная программа для здорового и устойчивого снижения веса. Основана на научном подходе к питанию с учетом метаболизма, гормонального фона и образа жизни. Гарантия результата или возврат средств.',
    includes: [
      'Расчет калорийности и БЖУ',
      'Меню для снижения веса на 45 дней',
      'Протокол питьевого режима',
      'Рекомендации по физической активности',
      'Еженедельные взвешивания и замеры',
      'Корректировка программы',
      'Гарантия результата'
    ]
  },
  {
    icon: Apple,
    title: 'Спортивное питание',
    description: 'Для набора массы',
    price: '18 000 ₽',
    duration: '30 дней',
    fullDescription: 'Программа питания для спортсменов и людей, занимающихся фитнесом. Разработана для набора качественной мышечной массы с учетом тренировочного режима и индивидуальных особенностей организма.',
    includes: [
      'Расчет калорийности для набора массы',
      'План питания на тренировочные дни',
      'План питания на дни отдыха',
      'Рекомендации по спортпиту',
      'Схема приема пищи до/после тренировки',
      'Рецепты высокобелковых блюд',
      'Корректировка по результатам'
    ]
  },
  {
    icon: Heart,
    title: 'Лечебное питание',
    description: 'При заболеваниях',
    price: '22 000 ₽',
    duration: '30 дней',
    fullDescription: 'Терапевтическое питание при различных заболеваниях: диабет, гастрит, панкреатит, холецистит и другие. Программа составляется на основе медицинских показаний и анализов с учетом всех ограничений.',
    includes: [
      'Изучение медицинских документов',
      'Лечебное меню на 30 дней',
      'Рекомендации по режиму питания',
      'Список разрешенных/запрещенных продуктов',
      'Рецепты диетических блюд',
      'Консультация по приему пищи',
      'Связь с врачом при необходимости'
    ]
  }
];

export function ServicesGrid() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section id="services" className="py-32 bg-[#0a0a0a] border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-emerald-400 text-xs uppercase tracking-[0.3em] mb-6">
            Программы
          </p>
          <h2 className="text-5xl lg:text-6xl mb-6 text-white font-bold uppercase tracking-wide">
            Услуги
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Выберите программу, которая подходит именно вам
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              <div className="bg-white/5 border border-white/10 hover:border-emerald-400/50 p-8 transition-all duration-500 h-full">
                {/* Icon */}
                <div className="w-14 h-14 border border-white/20 group-hover:border-emerald-400 flex items-center justify-center mb-8 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-white/60 group-hover:text-emerald-400 transition-colors" />
                </div>

                {/* Content */}
                <h3 className="text-xl mb-3 text-white font-semibold uppercase tracking-wide">{service.title}</h3>
                <p className="text-white/40 mb-8 text-sm">{service.description}</p>

                {/* Price */}
                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                  <span className="text-2xl text-white font-bold">
                    {service.price}
                  </span>
                  <div className="w-8 h-8 border border-white/20 group-hover:border-emerald-400 flex items-center justify-center transition-all">
                    <svg className="w-4 h-4 text-white/60 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-24 text-center"
        >
          <div className="border border-white/10 p-16 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '40px 40px'
              }}></div>
            </div>

            <div className="relative z-10">
              <p className="text-emerald-400 text-xs uppercase tracking-[0.3em] mb-6">
                Специальное предложение
              </p>
              <h3 className="text-4xl md:text-5xl mb-6 text-white font-bold uppercase tracking-wide">
                Первая консультация<br />бесплатно
              </h3>
              <p className="text-white/50 mb-10 max-w-xl mx-auto">
                Познакомимся, обсудим ваши цели и я предложу оптимальный план действий
              </p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-10 py-4 border border-white/20 hover:border-emerald-400 text-white hover:text-emerald-400 transition-all duration-300 text-sm uppercase tracking-wider inline-flex items-center gap-3"
              >
                Записаться
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Service Modal */}
      {selectedService && (
        <ServiceModal
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
          service={selectedService}
        />
      )}
    </section>
  );
}