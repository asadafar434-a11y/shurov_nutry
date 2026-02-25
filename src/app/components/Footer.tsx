import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl mb-4">Елена Озер</h3>
            <p className="text-gray-400 leading-relaxed">
              Профессиональный нутрициолог, помогающий людям достичь здоровья через правильное питание и индивидуальный подход.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  О специалисте
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Услуги
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Отзывы
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg mb-4">Часы работы</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Понедельник - Пятница: 9:00 - 20:00</li>
              <li>Суббота: 10:00 - 18:00</li>
              <li>Воскресенье: Выходной</li>
              <li className="text-emerald-400 mt-4">Онлайн консультации 24/7</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p className="flex items-center justify-center gap-2">
            Сделано с <Heart className="w-4 h-4 text-red-500 fill-red-500" /> для вашего здоровья
          </p>
          <p className="mt-2">© 2026 Елена Озер. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
