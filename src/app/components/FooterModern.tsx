export function FooterModern() {
  return (
    <footer className="bg-black text-white py-16 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <h3 className="text-2xl uppercase tracking-[0.3em] font-bold mb-1">
                ELENA
              </h3>
              <p className="text-emerald-400 text-[10px] uppercase tracking-[0.2em]">
                Art of Nutrition
              </p>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              Ваш путь к здоровому питанию
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-6 text-white/60 text-xs uppercase tracking-wider">Услуги</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#services" className="text-white/40 hover:text-emerald-400 transition-colors">
                  Персональное меню
                </a>
              </li>
              <li>
                <a href="#programs" className="text-white/40 hover:text-emerald-400 transition-colors">
                  Программы питания
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/40 hover:text-emerald-400 transition-colors">
                  Консультации
                </a>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="mb-6 text-white/60 text-xs uppercase tracking-wider">О специалисте</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#about" className="text-white/40 hover:text-emerald-400 transition-colors">
                  Образование
                </a>
              </li>
              <li>
                <a href="#programs" className="text-white/40 hover:text-emerald-400 transition-colors">
                  Отзывы
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/40 hover:text-emerald-400 transition-colors">
                  Связаться
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-6 text-white/60 text-xs uppercase tracking-wider">Контакты</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="mailto:elena@ozer.ru" className="text-white/40 hover:text-emerald-400 transition-colors">
                  elena@ozer.ru
                </a>
              </li>
              <li>
                <a href="tel:+79991234567" className="text-white/40 hover:text-emerald-400 transition-colors">
                  +7 (999) 123-45-67
                </a>
              </li>
              <li className="text-white/40">
                Москва, Россия
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs uppercase tracking-wider">
            © 2026 Елена Озер
          </p>
          <div className="flex gap-6 text-xs">
            <a href="#" className="text-white/30 hover:text-emerald-400 transition-colors uppercase tracking-wider">
              Политика
            </a>
            <a href="#" className="text-white/30 hover:text-emerald-400 transition-colors uppercase tracking-wider">
              Оферта
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}