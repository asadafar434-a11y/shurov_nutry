import { motion } from 'motion/react';
import { useEffect, useRef } from 'react';
import Site from '../../imports/Site';

export function AnimatedSite() {
  const siteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!siteRef.current) return;

    // Add animation classes to sections
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

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={siteRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Site />
      <style>{`
        [data-name="Hero block"],
        [data-name="Block 2"],
        [data-name="Consultation"],
        [data-name="Container"]:has(> p:contains("Истории успеха")),
        [data-name="Container"]:has(> p:contains("Начните путь")) {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        [data-name="Hero block"].animated,
        [data-name="Block 2"].animated,
        [data-name="Consultation"].animated,
        [data-name="Container"].animated {
          opacity: 1;
          transform: translateY(0);
        }

        /* Header fade in */
        [data-name="Header"] {
          animation: fadeInDown 0.6s ease forwards;
        }

        /* Hero content animations */
        [data-name="Content"] > div:first-child {
          animation: fadeInLeft 1s ease 0.4s forwards;
          opacity: 0;
        }

        [data-name="Container"]:has(> [data-name="Container"]:first-child[style*="border"]) {
          animation: fadeInRight 1s ease 0.6s forwards;
          opacity: 0;
        }

        /* Buttons hover */
        [data-name="Button"], 
        button,
        a[href] {
          transition: all 0.3s ease;
        }

        [data-name="Button"]:hover,
        button:hover {
          transform: scale(1.05);
        }

        /* Image hover effects */
        img {
          transition: transform 0.7s ease, filter 0.7s ease;
        }

        img:hover {
          transform: scale(1.05);
        }

        /* Social icons hover */
        [data-name="Link"] {
          transition: all 0.3s ease;
        }

        [data-name="Link"]:hover {
          transform: translateY(-2px);
          border-color: rgba(0, 212, 146, 0.5) !important;
        }

        /* Stats counter animation */
        @keyframes countUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        [data-name="Container"]:has(> p:contains("+")) p,
        [data-name="Container"]:has(> p:contains("%")) p {
          animation: countUp 0.6s ease forwards;
        }

        /* Testimonials stagger */
        [data-name="Container"]:has([data-name="Icon"]) {
          animation: fadeInUp 0.8s ease forwards;
          opacity: 0;
        }

        [data-name="Container"]:has([data-name="Icon"]):nth-child(1) {
          animation-delay: 0.2s;
        }

        [data-name="Container"]:has([data-name="Icon"]):nth-child(2) {
          animation-delay: 0.4s;
        }

        [data-name="Container"]:has([data-name="Icon"]):nth-child(3) {
          animation-delay: 0.6s;
        }

        /* Form inputs focus */
        [data-name="Text Input"],
        [data-name="Email Input"],
        [data-name="Phone Input"],
        [data-name="Text Area"] {
          transition: all 0.3s ease;
        }

        [data-name="Text Input"]:focus-within,
        [data-name="Email Input"]:focus-within,
        [data-name="Phone Input"]:focus-within,
        [data-name="Text Area"]:focus-within {
          border-color: rgb(0, 212, 146) !important;
          background: rgba(0, 212, 146, 0.05) !important;
        }

        /* Keyframes */
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Circular images scale */
        [style*="rounded-[26843500px]"] {
          transition: transform 0.5s ease;
        }

        [style*="rounded-[26843500px]"]:hover {
          transform: scale(1.1);
        }

        /* Green line animations */
        [style*="bg-[#00d492]"] {
          animation: growLine 0.6s ease forwards;
          transform-origin: top;
          transform: scaleY(0);
        }

        @keyframes growLine {
          to {
            transform: scaleY(1);
          }
        }

        /* Menu hover */
        [data-name="List menu"] p {
          transition: color 0.3s ease;
          cursor: pointer;
        }

        [data-name="List menu"] p:hover {
          color: rgb(0, 212, 146) !important;
        }

        /* Gradient text shimmer */
        [style*="WebkitTextFillColor"] {
          background-size: 200% 200%;
          animation: shimmer 3s ease infinite;
        }

        @keyframes shimmer {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        /* Contact icons pulse */
        [data-name="Container"]:has(> [style*="border-[rgba(255,255,255,0.2)]"]) [data-name="Icon"] {
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
      `}</style>
    </motion.div>
  );
}
