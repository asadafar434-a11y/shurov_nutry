import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import Site from '../../imports/Site';

export function InteractiveSite() {
  const siteRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  useEffect(() => {
    if (!siteRef.current) return;

    // Make all buttons clickable and add scroll behavior
    const buttons = siteRef.current.querySelectorAll('[data-name="Button"]');
    buttons.forEach((button) => {
      const buttonEl = button as HTMLElement;
      buttonEl.style.cursor = 'pointer';
      
      const buttonText = buttonEl.textContent?.toLowerCase() || '';
      
      if (buttonText.includes('записаться')) {
        buttonEl.addEventListener('click', () => {
          // Find contact section by looking for "Начните путь" text
          const allContainers = siteRef.current?.querySelectorAll('[data-name="Container"]');
          let contactSection: Element | null = null;
          allContainers?.forEach(container => {
            if (container.textContent?.includes('Начните путь')) {
              contactSection = container;
            }
          });
          
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
          } else {
            // Fallback to form
            const form = siteRef.current?.querySelector('[data-name="Form"]');
            form?.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        });
      }
      
      if (buttonText.includes('узнать больше')) {
        buttonEl.addEventListener('click', () => {
          const aboutSection = siteRef.current?.querySelector('[data-name="Block 2"]');
          aboutSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      }
      
      if (buttonText.includes('отправить')) {
        buttonEl.addEventListener('click', (e) => {
          e.preventDefault();
          console.log('Form submitted:', formData);
          alert(`Спасибо, ${formData.name || 'гость'}! Мы свяжемся с вами в ближайшее время.`);
          setFormData({ name: '', email: '', phone: '', message: '' });
        });
      }
    });

    // Make menu items clickable
    const menuItems = siteRef.current.querySelectorAll('[data-name="List menu"] p');
    menuItems.forEach((item, index) => {
      const itemEl = item as HTMLElement;
      itemEl.style.cursor = 'pointer';
      
      itemEl.addEventListener('click', () => {
        if (index === 0) { // О специалисте
          const aboutSection = siteRef.current?.querySelector('[data-name="Block 2"]');
          aboutSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (index === 1) { // Результаты
          const resultsSection = siteRef.current?.querySelectorAll('[data-name="Container"]');
          resultsSection.forEach(section => {
            if (section.textContent?.includes('До и После') || section.textContent?.includes('кг') || section.textContent?.includes('месяц')) {
              section.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
          });
        }
      });
    });

    // Make social links functional
    const socialLinks = siteRef.current.querySelectorAll('[data-name="Link"]');
    socialLinks.forEach((link, index) => {
      const linkEl = link as HTMLElement;
      linkEl.style.cursor = 'pointer';
      
      linkEl.addEventListener('click', () => {
        if (index === 0) { // Instagram
          window.open('https://instagram.com', '_blank');
        } else if (index === 1) { // Telegram
          window.open('https://t.me', '_blank');
        } else if (index === 2) { // WhatsApp
          window.open('https://wa.me', '_blank');
        }
      });
    });

    // Make form inputs functional
    const nameInput = siteRef.current.querySelector('[data-name="Text Input"]');
    const emailInput = siteRef.current.querySelector('[data-name="Email Input"]');
    const phoneInput = siteRef.current.querySelector('[data-name="Phone Input"]');
    const messageInput = siteRef.current.querySelector('[data-name="Text Area"]');

    const makeInputInteractive = (container: Element | null, field: keyof typeof formData, type: string = 'text') => {
      if (!container) return;
      
      const placeholder = container.querySelector('p');
      if (!placeholder) return;

      if (field === 'message') {
        const textarea = document.createElement('textarea');
        textarea.className = 'w-full bg-transparent text-white text-[16px] font-["Manrope:Regular",sans-serif] outline-none resize-none';
        textarea.placeholder = placeholder.textContent || '';
        textarea.style.fontFamily = 'Manrope, sans-serif';
        textarea.rows = 4;
        
        textarea.addEventListener('focus', () => setFocusedInput(field));
        textarea.addEventListener('blur', () => setFocusedInput(null));
        textarea.addEventListener('input', (e) => {
          setFormData(prev => ({ ...prev, [field]: (e.target as HTMLTextAreaElement).value }));
        });
        
        placeholder.parentElement?.appendChild(textarea);
        placeholder.style.display = 'none';
        return;
      }
      
      const input = document.createElement('input');
      input.type = type;
      input.className = 'w-full bg-transparent text-white text-[16px] font-["Manrope:Regular",sans-serif] outline-none';
      input.placeholder = placeholder.textContent || '';
      input.style.fontFamily = 'Manrope, sans-serif';
      
      input.addEventListener('focus', () => setFocusedInput(field));
      input.addEventListener('blur', () => setFocusedInput(null));
      input.addEventListener('input', (e) => {
        setFormData(prev => ({ ...prev, [field]: (e.target as HTMLInputElement).value }));
      });
      
      placeholder.parentElement?.appendChild(input);
      placeholder.style.display = 'none';
    };

    makeInputInteractive(nameInput, 'name');
    makeInputInteractive(emailInput, 'email', 'email');
    makeInputInteractive(phoneInput, 'phone', 'tel');
    makeInputInteractive(messageInput, 'message');

    // Intersection Observer for scroll animations
    const sections = siteRef.current.querySelectorAll('[data-name="Hero block"], [data-name="Block 2"], [data-name="Consultation"]');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      buttons.forEach(button => {
        const clone = button.cloneNode(true);
        button.parentNode?.replaceChild(clone, button);
      });
    };
  }, [formData]);

  return (
    <motion.div
      ref={siteRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Site />
      <style>{`
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Fix text to single line */
        [data-name="Button"] p {
          white-space: nowrap !important;
        }

        [data-name="logo"] p:first-child {
          white-space: nowrap !important;
        }

        /* Button hover - green background */
        [data-name="Button"] {
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        [data-name="Button"]::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: #00d492;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: -1;
        }

        [data-name="Button"]:hover::before {
          transform: scaleX(1);
        }

        [data-name="Button"]:hover {
          border-color: #00d492 !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 212, 146, 0.3);
        }

        [data-name="Button"]:active {
          transform: translateY(0);
        }

        [data-name="Button"] p {
          position: relative;
          z-index: 1;
          transition: color 0.3s ease;
        }

        [data-name="Button"]:hover p {
          color: #0a0a0a !important;
        }

        /* Social Links hover - green */
        [data-name="Link"] {
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
        }

        [data-name="Link"]::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(0, 212, 146, 0.1);
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 6px;
        }

        [data-name="Link"]:hover::before {
          opacity: 1;
        }

        [data-name="Link"]:hover {
          transform: translateY(-3px);
          border-color: #00d492 !important;
        }

        [data-name="Link"]:hover [data-name="Icon"] path {
          stroke: #00d492 !important;
          stroke-opacity: 1 !important;
        }

        /* Menu hover - green */
        [data-name="List menu"] p {
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
        }

        [data-name="List menu"] p::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 2px;
          background: #00d492;
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        [data-name="List menu"] p:hover {
          color: #00d492 !important;
        }

        [data-name="List menu"] p:hover::after {
          transform: scaleX(1);
        }

        /* Form inputs - green focus */
        [data-name="Text Input"],
        [data-name="Email Input"],
        [data-name="Phone Input"],
        [data-name="Text Area"] {
          transition: all 0.3s ease;
          cursor: text;
        }

        [data-name="Text Input"]:focus-within,
        [data-name="Email Input"]:focus-within,
        [data-name="Phone Input"]:focus-within,
        [data-name="Text Area"]:focus-within {
          border-color: #00d492 !important;
          background: rgba(0, 212, 146, 0.05) !important;
          box-shadow: 0 0 0 1px #00d492, 0 0 20px rgba(0, 212, 146, 0.1);
        }

        [data-name="Text Input"] input,
        [data-name="Email Input"] input,
        [data-name="Phone Input"] input,
        [data-name="Text Area"] textarea {
          color: white !important;
        }

        [data-name="Text Input"] input::placeholder,
        [data-name="Email Input"] input::placeholder,
        [data-name="Phone Input"] input::placeholder,
        [data-name="Text Area"] textarea::placeholder {
          color: rgba(255, 255, 255, 0.3);
        }

        /* Contact info hover */
        [data-name="Container"]:has(> [data-name="Icon"]) {
          transition: all 0.3s ease;
        }

        [data-name="Container"]:has(> [style*="border-[rgba(255,255,255,0.2)]"]):hover {
          border-color: #00d492 !important;
          background: rgba(0, 212, 146, 0.05);
        }

        [data-name="Container"]:has(> [style*="border-[rgba(255,255,255,0.2)]"]):hover [data-name="Icon"] path {
          stroke: #00d492 !important;
        }

        /* Images hover */
        img {
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), filter 0.6s ease;
        }

        img:hover {
          transform: scale(1.05);
          filter: brightness(1.1);
        }

        /* Circular images */
        [style*="rounded-[26843500px]"] {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        [style*="rounded-[26843500px]"]:hover {
          transform: scale(1.08) rotate(2deg);
          border-color: rgba(0, 212, 146, 0.3) !important;
        }

        /* Testimonial cards hover */
        [data-name="Container"][style*="bg-[rgba(255,255,255,0.05)]"] {
          transition: all 0.4s ease;
        }

        [data-name="Container"][style*="bg-[rgba(255,255,255,0.05)]"]:hover {
          background: rgba(0, 212, 146, 0.05) !important;
          border-color: rgba(0, 212, 146, 0.3) !important;
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(0, 212, 146, 0.15);
        }

        /* Stats numbers - green on hover */
        [data-name="Container"]:has(> p:contains("+")) p:first-child,
        [data-name="Container"]:has(> p:contains("%")) p:first-child,
        [data-name="Container"]:has(> p:contains("24/7")) p:first-child {
          transition: color 0.3s ease;
        }

        [data-name="Container"]:has(> p:contains("+")) p:first-child:hover,
        [data-name="Container"]:has(> p:contains("%")) p:first-child:hover,
        [data-name="Container"]:has(> p:contains("24/7")) p:first-child:hover {
          color: #00d492 !important;
        }

        /* Result badges hover */
        [data-name="Text"][style*="border-[rgba(0,212,146,0.5)]"] {
          transition: all 0.3s ease;
        }

        [data-name="Text"][style*="border-[rgba(0,212,146,0.5)]"]:hover {
          background: #00d492;
          transform: scale(1.1);
        }

        [data-name="Text"][style*="border-[rgba(0,212,146,0.5)]"]:hover p {
          color: #0a0a0a !important;
        }

        /* Scroll animations */
        [data-name="Hero block"],
        [data-name="Block 2"],
        [data-name="Consultation"] {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        [data-name="Hero block"].animated,
        [data-name="Block 2"].animated,
        [data-name="Consultation"].animated {
          opacity: 1;
          transform: translateY(0);
        }

        /* Header animation */
        [data-name="Header"] {
          animation: slideDown 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          backdrop-filter: blur(10px);
          position: sticky;
          top: 0;
          z-index: 1000;
          background: rgba(10, 10, 10, 0.8);
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-100%);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Logo dots pulse */
        [data-name="logo"] circle {
          animation: pulse 2s ease-in-out infinite;
        }

        [data-name="logo"] svg:first-of-type circle {
          animation-delay: 0s;
        }

        [data-name="logo"] svg:last-of-type circle {
          animation-delay: 0.5s;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        /* Gradient text shimmer */
        [style*="WebkitTextFillColor"] {
          background-size: 200% 200%;
          animation: shimmer 4s ease-in-out infinite;
        }

        @keyframes shimmer {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        /* Green lines grow on scroll */
        [style*="bg-[#00d492]"][style*="h-[32px]"] {
          animation: growLine 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          transform-origin: top;
          transform: scaleY(0);
        }

        @keyframes growLine {
          to {
            transform: scaleY(1);
          }
        }

        /* Quote icons subtle rotation */
        [data-name="Icon"] path[stroke*="#00D492"] {
          transition: all 0.3s ease;
        }

        [data-name="Container"]:hover [data-name="Icon"] path[stroke*="#00D492"] {
          transform: rotate(5deg);
        }

        /* Cursor pointer for clickable elements */
        [data-name="Button"],
        [data-name="Link"],
        [data-name="List menu"] p,
        [data-name="Text Input"],
        [data-name="Email Input"],
        [data-name="Phone Input"],
        [data-name="Text Area"] {
          cursor: pointer;
        }

        /* Selection color */
        ::selection {
          background: #00d492;
          color: #0a0a0a;
        }

        ::-moz-selection {
          background: #00d492;
          color: #0a0a0a;
        }
      `}</style>
    </motion.div>
  );
}