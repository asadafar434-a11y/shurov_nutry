import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Instagram, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import contactImage from 'figma:asset/9a32dbb6ed65f0283e8974d5278932d4bcae051e.png';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // В реальном приложении здесь была бы отправка данных
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-emerald-50 via-white to-green-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-6 text-gray-900">
            Записаться на консультацию
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Начните свой путь к здоровью уже сегодня. Заполните форму, и я свяжусь с вами в ближайшее время
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Ваше имя
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none transition-colors"
                  placeholder="Как вас зовут?"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2">
                  Телефон
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none transition-colors"
                  placeholder="+7 (999) 123-45-67"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Расскажите о своих целях
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none transition-colors resize-none"
                  placeholder="Опишите, что вы хотели бы достичь..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-xl text-white font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                  submitted 
                    ? 'bg-green-600 hover:bg-green-700' 
                    : 'bg-emerald-600 hover:bg-emerald-700'
                }`}
              >
                {submitted ? (
                  <>
                    ✓ Заявка отправлена!
                  </>
                ) : (
                  <>
                    Отправить заявку
                    <Send className="w-5 h-5" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info & Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={contactImage}
                alt="Свяжитесь с Еленой Озер"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 space-y-6">
              <h3 className="text-2xl text-gray-900 mb-6">
                Контактная информация
              </h3>

              <a 
                href="tel:+79991234567" 
                className="flex items-start gap-4 group hover:bg-emerald-50 p-4 rounded-xl transition-colors"
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center group-hover:bg-emerald-200 transition-colors flex-shrink-0">
                  <Phone className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Телефон</div>
                  <div className="text-gray-900">+7 (999) 123-45-67</div>
                </div>
              </a>

              <a 
                href="mailto:elena.ozer@nutrition.com" 
                className="flex items-start gap-4 group hover:bg-emerald-50 p-4 rounded-xl transition-colors"
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center group-hover:bg-emerald-200 transition-colors flex-shrink-0">
                  <Mail className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Email</div>
                  <div className="text-gray-900">elena.ozer@nutrition.com</div>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Адрес</div>
                  <div className="text-gray-900">Москва, ул. Примерная, д. 1</div>
                  <div className="text-sm text-gray-600 mt-1">Онлайн консультации по всему миру</div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6 mt-6">
                <h4 className="text-lg text-gray-900 mb-4">Социальные сети</h4>
                <div className="flex gap-4">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-shadow"
                  >
                    <Instagram className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-shadow"
                  >
                    <MessageCircle className="w-6 h-6" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
