import { motion, AnimatePresence } from 'motion/react';
import { X, CreditCard, Lock, CheckCircle } from 'lucide-react';
import { useState } from 'react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    price: string;
  };
}

export function PaymentModal({ isOpen, onClose, service }: PaymentModalProps) {
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: '',
    email: '',
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    const name = e.target.name;

    // Format card number
    if (name === 'cardNumber') {
      value = value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
      if (value.length > 19) return;
    }

    // Format expiry date
    if (name === 'expiryDate') {
      value = value.replace(/\D/g, '');
      if (value.length >= 2) {
        value = value.slice(0, 2) + '/' + value.slice(2, 4);
      }
      if (value.length > 5) return;
    }

    // Format CVV
    if (name === 'cvv') {
      value = value.replace(/\D/g, '');
      if (value.length > 3) return;
    }

    setPaymentData({
      ...paymentData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsProcessing(false);
    setIsSuccess(true);

    // Auto close after success
    setTimeout(() => {
      onClose();
      setIsSuccess(false);
      setPaymentData({
        cardNumber: '',
        cardHolder: '',
        expiryDate: '',
        cvv: '',
        email: '',
      });
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[60]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-2xl z-[60]"
          >
            <div className="bg-surface border border-white/10 h-full md:h-auto max-h-[90vh] overflow-y-auto">
              {isSuccess ? (
                // Success State
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-16 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring' }}
                    className="w-20 h-20 bg-brand rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-3xl text-white font-bold uppercase tracking-wide mb-4">
                    Оплата успешна!
                  </h3>
                  <p className="text-white/60 mb-2">
                    Спасибо за покупку программы
                  </p>
                  <p className="text-brand text-xl font-semibold">
                    {service.title}
                  </p>
                  <p className="text-white/40 text-sm mt-6">
                    Чек отправлен на вашу почту
                  </p>
                </motion.div>
              ) : (
                <>
                  {/* Header */}
                  <div className="border-b border-white/10 p-8 flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl text-white font-bold uppercase tracking-wide mb-2">
                        Оплата
                      </h3>
                      <p className="text-white/40 text-sm flex items-center gap-2">
                        <Lock className="w-4 h-4" />
                        Защищенное соединение
                      </p>
                    </div>
                    <button
                      onClick={onClose}
                      className="w-10 h-10 border border-white/20 hover:border-white flex items-center justify-center text-white/60 hover:text-white transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    {/* Order summary */}
                    <div className="bg-white/5 border border-white/10 p-6 mb-8">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-white/40 text-xs uppercase tracking-wider mb-2">
                            Программа
                          </p>
                          <p className="text-white font-semibold">{service.title}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-white/40 text-xs uppercase tracking-wider mb-2">
                            Итого
                          </p>
                          <p className="text-2xl text-brand font-bold">
                            {service.price}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Payment form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Email */}
                      <div>
                        <label className="block text-white/60 text-xs uppercase tracking-wider mb-3">
                          Email для чека
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={paymentData.email}
                          onChange={handleChange}
                          required
                          placeholder="your@email.com"
                          className="w-full px-6 py-4 bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-brand transition-colors"
                        />
                      </div>

                      {/* Card Number */}
                      <div>
                        <label className="block text-white/60 text-xs uppercase tracking-wider mb-3">
                          Номер карты
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            name="cardNumber"
                            value={paymentData.cardNumber}
                            onChange={handleChange}
                            required
                            placeholder="0000 0000 0000 0000"
                            className="w-full px-6 py-4 bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-brand transition-colors"
                          />
                          <CreditCard className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                        </div>
                      </div>

                      {/* Card Holder */}
                      <div>
                        <label className="block text-white/60 text-xs uppercase tracking-wider mb-3">
                          Имя держателя карты
                        </label>
                        <input
                          type="text"
                          name="cardHolder"
                          value={paymentData.cardHolder}
                          onChange={handleChange}
                          required
                          placeholder="IVAN IVANOV"
                          className="w-full px-6 py-4 bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-brand transition-colors uppercase"
                        />
                      </div>

                      {/* Expiry and CVV */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-white/60 text-xs uppercase tracking-wider mb-3">
                            Срок действия
                          </label>
                          <input
                            type="text"
                            name="expiryDate"
                            value={paymentData.expiryDate}
                            onChange={handleChange}
                            required
                            placeholder="MM/YY"
                            className="w-full px-6 py-4 bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-brand transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-white/60 text-xs uppercase tracking-wider mb-3">
                            CVV
                          </label>
                          <input
                            type="text"
                            name="cvv"
                            value={paymentData.cvv}
                            onChange={handleChange}
                            required
                            placeholder="123"
                            className="w-full px-6 py-4 bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-brand transition-colors"
                          />
                        </div>
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={isProcessing}
                        className="w-full px-8 py-4 bg-brand hover:bg-brand-dark disabled:bg-brand/50 text-white transition-all duration-300 text-sm uppercase tracking-wider flex items-center justify-center gap-3"
                      >
                        {isProcessing ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                              className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                            />
                            Обработка...
                          </>
                        ) : (
                          <>
                            <Lock className="w-4 h-4" />
                            Оплатить {service.price}
                          </>
                        )}
                      </button>

                      {/* Security note */}
                      <p className="text-white/30 text-xs text-center">
                        Ваши данные защищены по стандарту PCI DSS
                      </p>
                    </form>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
