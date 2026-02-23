import { motion } from 'motion/react';
import { Award, Users, Heart, Target } from 'lucide-react';
import aboutImage from '@/assets/a8eea92051d14e6a7c46659a265d548f3f638cea.png';

const achievements = [
  {
    icon: Award,
    title: '10+ лет',
    description: 'Опыта работы в нутрициологии'
  },
  {
    icon: Users,
    title: '500+',
    description: 'Довольных клиентов'
  },
  {
    icon: Heart,
    title: '95%',
    description: 'Достигли своих целей'
  },
  {
    icon: Target,
    title: 'Индивидуальный',
    description: 'Подход к каждому клиенту'
  }
];

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-6 text-gray-900">
            О специалисте
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Профессиональный нутрициолог с многолетним опытом помощи людям в достижении их целей
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={aboutImage}
              alt="Елена Озер - профессиональный нутрициолог"
              className="rounded-3xl shadow-2xl w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl text-gray-900 mb-6">
              Елена Озер
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Я - сертифицированный нутрициолог с глубоким пониманием физиологии питания и метаболизма. 
              Моя миссия - помочь вам достичь оптимального здоровья через сбалансированное питание 
              и здоровый образ жизни.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Работаю по авторским методикам, которые учитывают индивидуальные особенности организма, 
              образ жизни и личные цели каждого клиента. Верю, что правильное питание - это не 
              ограничения, а путь к здоровью и энергии.
            </p>

            <div className="pt-6 space-y-4">
              <h4 className="text-xl text-gray-900">Образование и сертификаты:</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-3 mt-1">✓</span>
                  <span>Диплом нутрициолога, Институт нутрициологии и здоровья</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-3 mt-1">✓</span>
                  <span>Сертификат специалиста по спортивному питанию</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-3 mt-1">✓</span>
                  <span>Повышение квалификации по метаболическим нарушениям</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-3 mt-1">✓</span>
                  <span>Член Ассоциации нутрициологов России</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Achievements grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-green-50 hover:shadow-xl transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-600 rounded-full mb-4">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
