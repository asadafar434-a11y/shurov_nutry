import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { PaymentModal } from './PaymentModal';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    icon: any;
    title: string;
    description: string;
    price: string;
    fullDescription: string;
    includes: string[];
    duration: string;
  };
}

export function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
  const [showPayment, setShowPayment] = useState(false);

  const handlePayment = () => {
    setShowPayment(true);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-3xl z-50"
            >
              <div className="bg-surface border border-white/10 h-full md:h-auto max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="sticky top-0 bg-surface border-b border-white/10 p-8 flex items-center justify-between z-10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 border border-brand flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-brand" />
                    </div>
                    <div>
                      <h3 className="text-2xl text-white font-bold uppercase tracking-wide">
                        {service.title}
                      </h3>
                      <p className="text-white/40 text-xs uppercase tracking-wider mt-1">
                        {service.duration}
                      </p>
                    </div>
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
                  {/* Description */}
                  <div className="mb-8">
                    <h4 className="text-brand text-xs uppercase tracking-[0.3em] mb-4">
                      Описание программы
                    </h4>
                    <p className="text-white/60 leading-relaxed text-lg">
                      {service.fullDescription}
                    </p>
                  </div>

                  {/* What's included */}
                  <div className="mb-8">
                    <h4 className="text-brand text-xs uppercase tracking-[0.3em] mb-6">
                      Что входит
                    </h4>
                    <div className="space-y-4">
                      {service.includes.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-4"
                        >
                          <CheckCircle className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                          <span className="text-white/70">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Price and CTA */}
                  <div className="border-t border-white/10 pt-8 flex items-center justify-between gap-6">
                    <div>
                      <p className="text-white/40 text-xs uppercase tracking-wider mb-2">
                        Стоимость
                      </p>
                      <p className="text-4xl text-white font-bold">
                        {service.price}
                      </p>
                    </div>
                    <button
                      onClick={handlePayment}
                      className="px-10 py-4 bg-brand hover:bg-brand-dark text-white transition-all duration-300 text-sm uppercase tracking-wider"
                    >
                      Оплатить
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Payment Modal */}
      <PaymentModal
        isOpen={showPayment}
        onClose={() => setShowPayment(false)}
        service={service}
      />
    </>
  );
}
