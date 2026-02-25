import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Site from "../../imports/Site";

export function InteractiveSite() {
  const siteRef = useRef<HTMLDivElement>(null);
<<<<<<< HEAD
  const formDataRef = useRef({
=======
  const [formData, setFormData] = useState({
>>>>>>> d19f48c2027632490b3220c479497c3892c669a9
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
<<<<<<< HEAD
  const [legalModal, setLegalModal] = useState<"privacy" | "offer" | null>(null);
  const isSendingRef = useRef(false);
=======
>>>>>>> d19f48c2027632490b3220c479497c3892c669a9

  useEffect(() => {
    if (!siteRef.current) return;

<<<<<<< HEAD
    // Field validation helpers
    const setFieldError = (selector: string, hasError: boolean, message = "") => {
      const container = siteRef.current?.querySelector(`[data-name="${selector}"]`) as HTMLElement | null;
      if (!container) return;
      const borderEl = container.querySelector('[aria-hidden="true"]') as HTMLElement | null;
      if (hasError) {
        if (borderEl) { borderEl.style.borderColor = "#ef4444"; borderEl.style.borderWidth = "1.5px"; }
        container.style.backgroundColor = "rgba(239,68,68,0.06)";
        let hint = container.querySelector(".field-error") as HTMLElement | null;
        if (!hint) {
          hint = document.createElement("p");
          hint.className = "field-error";
          hint.style.cssText =
            "position:absolute;top:calc(100% + 4px);left:0;color:#ef4444;" +
            "font-size:11px;font-family:Manrope,sans-serif;white-space:nowrap;" +
            "pointer-events:none;z-index:10;";
          container.appendChild(hint);
        }
        hint.textContent = message;
      } else {
        if (borderEl) { borderEl.style.borderColor = ""; borderEl.style.borderWidth = ""; }
        container.style.backgroundColor = "";
        container.querySelector(".field-error")?.remove();
      }
    };

    const validateForm = (): boolean => {
      const d = formDataRef.current;
      let isValid = true;

      if (!d.name.trim()) {
        setFieldError("Text Input", true, "Пожалуйста, введите имя");
        isValid = false;
      } else {
        setFieldError("Text Input", false);
      }

      if (!d.email.trim()) {
        setFieldError("Email Input", true, "Пожалуйста, введите email");
        isValid = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) {
        setFieldError("Email Input", true, "Введите корректный email, например: ivan@mail.ru");
        isValid = false;
      } else {
        setFieldError("Email Input", false);
      }

      const phoneDigits = d.phone.replace(/\D/g, "");
      if (!d.phone.trim()) {
        setFieldError("Phone Input", true, "Пожалуйста, введите номер телефона");
        isValid = false;
      } else if (phoneDigits.length < 7) {
        setFieldError("Phone Input", true, "Введите корректный номер, минимум 7 цифр");
        isValid = false;
      } else {
        setFieldError("Phone Input", false);
      }

      if (!isValid) {
        siteRef.current
          ?.querySelector(".field-error")
          ?.closest("[data-name]")
          ?.scrollIntoView({ behavior: "smooth", block: "center" });
      }

      return isValid;
    };

=======
>>>>>>> d19f48c2027632490b3220c479497c3892c669a9
    // Make all buttons clickable and add scroll behavior
    const buttons = siteRef.current.querySelectorAll('[data-name="Button"]');
    buttons.forEach((button) => {
      const buttonEl = button as HTMLElement;
      buttonEl.style.cursor = "pointer";

      const buttonText = buttonEl.textContent?.toLowerCase() || "";

      if (buttonText.includes("записаться")) {
        buttonEl.addEventListener("click", () => {
<<<<<<< HEAD
=======
          // Find contact section by looking for "Начните путь" text
>>>>>>> d19f48c2027632490b3220c479497c3892c669a9
          const allContainers = siteRef.current?.querySelectorAll('[data-name="Container"]');
          let contactSection: Element | null = null;
          allContainers?.forEach((container) => {
            if (container.textContent?.includes("Начните путь")) {
              contactSection = container;
            }
          });

          if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth", block: "center" });
          } else {
<<<<<<< HEAD
=======
            // Fallback to form
>>>>>>> d19f48c2027632490b3220c479497c3892c669a9
            const form = siteRef.current?.querySelector('[data-name="Form"]');
            form?.scrollIntoView({ behavior: "smooth", block: "center" });
          }
        });
      }

      if (buttonText.includes("узнать больше")) {
        buttonEl.addEventListener("click", () => {
          const aboutSection = siteRef.current?.querySelector('[data-name="Block 2"]');
          aboutSection?.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }

      if (buttonText.includes("отправить")) {
<<<<<<< HEAD
        buttonEl.addEventListener("click", async (e) => {
          e.preventDefault();
          if (!validateForm()) return;
          if (isSendingRef.current) return;
          isSendingRef.current = true;
          const data = formDataRef.current;

          const BOT_TOKEN = "8692165307:AAHfPAdZ8p4nm1w91TokmkRmmHWshwKNb70";
          const CHAT_ID = "473378721";

          const text =
            `📋 <b>Новая заявка с сайта</b>\n\n` +
            `👤 <b>Имя:</b> ${data.name || "—"}\n` +
            `📧 <b>Email:</b> ${data.email || "—"}\n` +
            `📞 <b>Телефон:</b> ${data.phone || "—"}\n` +
            `💬 <b>Сообщение:</b> ${data.message || "—"}`;

          try {
            const res = await fetch(
              `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: "HTML" }),
              },
            );
            if (res.ok) {
              alert(`Спасибо, ${data.name || "гость"}! Мы свяжемся с вами в ближайшее время.`);
            } else {
              alert("Ошибка отправки. Пожалуйста, напишите нам напрямую.");
            }
          } catch {
            alert("Ошибка соединения. Пожалуйста, напишите нам напрямую.");
          }

          isSendingRef.current = false;
          formDataRef.current = { name: "", email: "", phone: "", message: "" };
          ["Text Input", "Email Input", "Phone Input"].forEach((s) => setFieldError(s, false));
          const inputs = siteRef.current?.querySelectorAll(
            '[data-name="Text Input"] input, [data-name="Email Input"] input, [data-name="Phone Input"] input, [data-name="Text Area"] textarea',
          );
          inputs?.forEach((el) => {
            (el as HTMLInputElement | HTMLTextAreaElement).value = "";
          });
=======
        buttonEl.addEventListener("click", (e) => {
          e.preventDefault();
          console.log("Form submitted:", formData);
          alert(`Спасибо, ${formData.name || "гость"}! Мы свяжемся с вами в ближайшее время.`);
          setFormData({ name: "", email: "", phone: "", message: "" });
>>>>>>> d19f48c2027632490b3220c479497c3892c669a9
        });
      }
    });

    // Make menu items clickable
    const menuItems = siteRef.current.querySelectorAll('[data-name="List menu"] p');
    menuItems.forEach((item, index) => {
      const itemEl = item as HTMLElement;
      itemEl.style.cursor = "pointer";

      itemEl.addEventListener("click", () => {
        if (index === 0) {
<<<<<<< HEAD
          const aboutSection = siteRef.current?.querySelector('[data-name="Block 2"]');
          aboutSection?.scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (index === 1) {
          document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth", block: "start" });
=======
          // О специалисте
          const aboutSection = siteRef.current?.querySelector('[data-name="Block 2"]');
          aboutSection?.scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (index === 1) {
          // Результаты
          const resultsSection = siteRef.current?.querySelectorAll('[data-name="Container"]');
          resultsSection.forEach((section) => {
            if (
              section.textContent?.includes("До и После") ||
              section.textContent?.includes("кг") ||
              section.textContent?.includes("месяц")
            ) {
              section.scrollIntoView({ behavior: "smooth", block: "center" });
            }
          });
>>>>>>> d19f48c2027632490b3220c479497c3892c669a9
        }
      });
    });

<<<<<<< HEAD
    // Social icons — event delegation on document (works even for lazily-mounted Sheet portal)
    const handleSocialClick = (e: MouseEvent) => {
      const link = (e.target as Element).closest('[data-name="Link"]') as HTMLElement | null;
      if (!link) return;
      if (!link.closest('[data-name="Contacts"]')) return;
      // Determine icon position within its Contacts container
      const contacts = link.closest('[data-name="Contacts"]');
      const siblings = Array.from(contacts?.querySelectorAll('[data-name="Link"]') ?? []);
      const iconIndex = siblings.indexOf(link);
      if (iconIndex === 0) {
        window.open("https://www.instagram.com/msozer28?igsh=MXg3cGJiMmo0Z2ZycA==", "_blank");
      } else if (iconIndex === 1) {
        window.open("https://mail.google.com/mail/?view=cm&to=e.ozera@gmail.com&su=%D0%97%D0%B0%D1%8F%D0%B2%D0%BA%D0%B0", "_blank");
      } else if (iconIndex === 2) {
        window.open("https://web.whatsapp.com/send?phone=905542643311&text=Здравствуйте", "_blank");
      }
    };
    document.addEventListener("click", handleSocialClick);

    // Footer legal links — event delegation
    const handleLegalClick = (e: MouseEvent) => {
      const link = (e.target as Element).closest('[data-name="Link"]') as HTMLElement | null;
      if (!link) return;
      const text = link.textContent?.trim() ?? "";
      if (text.includes("Политика")) setLegalModal("privacy");
      else if (text.includes("Оферта")) setLegalModal("offer");
    };
    document.addEventListener("click", handleLegalClick);

    // Make contact info items clickable (email & phone)
    const makeContactClickable = (
      textMatch: string,
      href: string,
    ) => {
      const allElements = siteRef.current?.querySelectorAll("*") ?? [];
      for (const el of Array.from(allElements)) {
        if (el.children.length === 0 && el.textContent?.trim() === textMatch) {
          const clickable = (el.closest('[data-name="Container"]') as HTMLElement) ?? (el as HTMLElement);
          clickable.style.cursor = "pointer";
          clickable.addEventListener("click", () => window.open(href, "_blank"));
          break;
        }
      }
    };

    makeContactClickable("elena@ozer.ru", "https://mail.google.com/mail/?view=cm&to=e.ozera@gmail.com&su=%D0%97%D0%B0%D1%8F%D0%B2%D0%BA%D0%B0");
    makeContactClickable("+7 (999) 123-45-67", "https://web.whatsapp.com/send?phone=905542643311&text=Здравствуйте");
=======
    // Make social links functional
    const socialLinks = siteRef.current.querySelectorAll('[data-name="Link"]');
    socialLinks.forEach((link, index) => {
      const linkEl = link as HTMLElement;
      linkEl.style.cursor = "pointer";

      linkEl.addEventListener("click", () => {
        if (index === 0) {
          // Instagram
          window.open("https://instagram.com", "_blank");
        } else if (index === 1) {
          // Telegram
          window.open("https://t.me", "_blank");
        } else if (index === 2) {
          // WhatsApp
          window.open("https://wa.me", "_blank");
        }
      });
    });
>>>>>>> d19f48c2027632490b3220c479497c3892c669a9

    // Make form inputs functional
    const nameInput = siteRef.current.querySelector('[data-name="Text Input"]');
    const emailInput = siteRef.current.querySelector('[data-name="Email Input"]');
    const phoneInput = siteRef.current.querySelector('[data-name="Phone Input"]');
    const messageInput = siteRef.current.querySelector('[data-name="Text Area"]');

<<<<<<< HEAD
    const makeInputInteractive = (container: Element | null, field: keyof typeof formDataRef.current, type: string = "text") => {
      if (!container) return;

      // Guard: skip if input already created
      if (container.querySelector("input, textarea")) return;

=======
    const makeInputInteractive = (container: Element | null, field: keyof typeof formData, type: string = "text") => {
      if (!container) return;

>>>>>>> d19f48c2027632490b3220c479497c3892c669a9
      const placeholder = container.querySelector("p");
      if (!placeholder) return;

      if (field === "message") {
        const textarea = document.createElement("textarea");
        textarea.className =
<<<<<<< HEAD
          'w-full bg-transparent text-[#111111] text-[16px] font-["Manrope:Regular",sans-serif] outline-none resize-none';
=======
          'w-full bg-transparent text-white text-[16px] font-["Manrope:Regular",sans-serif] outline-none resize-none';
>>>>>>> d19f48c2027632490b3220c479497c3892c669a9
        textarea.placeholder = placeholder.textContent || "";
        textarea.style.fontFamily = "Manrope, sans-serif";
        textarea.rows = 4;

        textarea.addEventListener("focus", () => setFocusedInput(field));
        textarea.addEventListener("blur", () => setFocusedInput(null));
        textarea.addEventListener("input", (e) => {
<<<<<<< HEAD
          formDataRef.current[field] = (e.target as HTMLTextAreaElement).value;
=======
          setFormData((prev) => ({ ...prev, [field]: (e.target as HTMLTextAreaElement).value }));
>>>>>>> d19f48c2027632490b3220c479497c3892c669a9
        });

        placeholder.parentElement?.appendChild(textarea);
        placeholder.style.display = "none";
        return;
      }

      const input = document.createElement("input");
      input.type = type;
<<<<<<< HEAD
      input.className = 'w-full bg-transparent text-[#111111] text-[16px] font-["Manrope:Regular",sans-serif] outline-none';
      input.placeholder = placeholder.textContent || "";
      input.style.fontFamily = "Manrope, sans-serif";

      const fieldSelectorMap: Record<string, string> = {
        name: "Text Input",
        email: "Email Input",
        phone: "Phone Input",
      };
      input.addEventListener("focus", () => setFocusedInput(field));
      input.addEventListener("blur", () => setFocusedInput(null));
      input.addEventListener("input", (e) => {
        formDataRef.current[field] = (e.target as HTMLInputElement).value;
        if (fieldSelectorMap[field]) setFieldError(fieldSelectorMap[field], false);
=======
      input.className = 'w-full bg-transparent text-white text-[16px] font-["Manrope:Regular",sans-serif] outline-none';
      input.placeholder = placeholder.textContent || "";
      input.style.fontFamily = "Manrope, sans-serif";

      input.addEventListener("focus", () => setFocusedInput(field));
      input.addEventListener("blur", () => setFocusedInput(null));
      input.addEventListener("input", (e) => {
        setFormData((prev) => ({ ...prev, [field]: (e.target as HTMLInputElement).value }));
>>>>>>> d19f48c2027632490b3220c479497c3892c669a9
      });

      placeholder.parentElement?.appendChild(input);
      placeholder.style.display = "none";
    };

    makeInputInteractive(nameInput, "name");
    makeInputInteractive(emailInput, "email", "email");
    makeInputInteractive(phoneInput, "phone", "tel");
    makeInputInteractive(messageInput, "message");

    // Intersection Observer for scroll animations
    const sections = siteRef.current.querySelectorAll(
      '[data-name="Hero block"], [data-name="Block 2"], [data-name="Consultation"]',
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
          }
        });
      },
      { threshold: 0.1 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
<<<<<<< HEAD
      document.removeEventListener("click", handleSocialClick);
      document.removeEventListener("click", handleLegalClick);
    };
  }, []);
=======
      buttons.forEach((button) => {
        const clone = button.cloneNode(true);
        button.parentNode?.replaceChild(clone, button);
      });
    };
  }, [formData]);
>>>>>>> d19f48c2027632490b3220c479497c3892c669a9

  return (
    <motion.div ref={siteRef} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="overflow-x-clip">
      <Site />
<<<<<<< HEAD

      {/* Legal modals */}
      {legalModal && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8"
          style={{ backgroundColor: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
          onClick={(e) => { if (e.target === e.currentTarget) setLegalModal(null); }}
        >
          <div className="relative bg-[#0f0f0f] border border-[rgba(255,255,255,0.08)] rounded-[10px] max-w-[760px] w-full max-h-[85vh] overflow-y-auto">
            <div className="sticky top-0 flex items-center justify-between px-6 md:px-10 py-5 bg-[#0f0f0f] border-b border-[rgba(255,255,255,0.07)] z-10">
              <p className="font-['Manrope:SemiBold',sans-serif] font-semibold text-[16px] text-white tracking-[0.5px] uppercase">
                {legalModal === "privacy" ? "Политика конфиденциальности" : "Публичная оферта"}
              </p>
              <button
                onClick={() => setLegalModal(null)}
                className="text-[rgba(255,255,255,0.4)] hover:text-white transition-colors text-[20px] leading-none ml-6 shrink-0"
                aria-label="Закрыть"
              >✕</button>
            </div>
            <div className="px-6 md:px-10 py-8 text-[rgba(255,255,255,0.7)] font-['Manrope:Regular',sans-serif] text-[14px] leading-[1.8] space-y-4">
              {legalModal === "privacy" ? (
                <>
                  <p className="text-[rgba(255,255,255,0.35)] text-[12px] tracking-[0.5px]">Дата публикации: 01.01.2026 г.</p>
                  <p>Настоящая Политика разработана в соответствии с Федеральным законом №152-ФЗ «О персональных данных».</p>
                  <h3 className="text-white font-semibold text-[15px] pt-2">1. Какие данные собираются</h3>
                  <ul className="list-none space-y-1 pl-0">
                    {["ФИО", "Email", "Телефон", "Информация, указанная в форме обратной связи", "Технические данные (IP-адрес, cookies)"].map((i) => (
                      <li key={i} className="flex gap-2"><span className="text-[#00d492] shrink-0">—</span>{i}</li>
                    ))}
                  </ul>
                  <h3 className="text-white font-semibold text-[15px] pt-2">2. Цели обработки данных</h3>
                  <ul className="list-none space-y-1">
                    {["Запись на консультацию", "Обратная связь", "Исполнение обязательств", "Информирование об услугах", "Улучшение работы сайта"].map((i) => (
                      <li key={i} className="flex gap-2"><span className="text-[#00d492] shrink-0">—</span>{i}</li>
                    ))}
                  </ul>
                  <h3 className="text-white font-semibold text-[15px] pt-2">3. Хранение и защита данных</h3>
                  <p>Данные хранятся на серверах на территории РФ. Оператор принимает необходимые меры для защиты персональных данных.</p>
                  <h3 className="text-white font-semibold text-[15px] pt-2">4. Права пользователя</h3>
                  <p>Пользователь вправе запросить доступ, изменение или удаление своих персональных данных.</p>
                  <h3 className="text-white font-semibold text-[15px] pt-2">5. Контакты</h3>
                  <p>Email: elena@ozer.ru<br/>Телефон: +7 (999) 123-45-67<br/>Адрес: Москва, Россия</p>
                </>
              ) : (
                <>
                  <p className="text-[rgba(255,255,255,0.35)] text-[12px] tracking-[0.5px]">г. Москва · Дата публикации: 01.01.2026 г.</p>
                  <p>Настоящий документ является официальным предложением (публичной офертой) заключить договор на условиях, изложенных ниже.</p>
                  <h3 className="text-white font-semibold text-[15px] pt-2">1. Общие положения</h3>
                  <p>1.1. Настоящий документ является публичной офертой в соответствии со ст. 437 Гражданского кодекса РФ.<br/>1.2. Акцептом оферты считается запись на консультацию, оплата услуг либо отправка формы заявки на сайте.<br/>1.3. С момента акцепта договор считается заключённым.</p>
                  <h3 className="text-white font-semibold text-[15px] pt-2">2. Предмет договора</h3>
                  <p>Исполнитель оказывает консультационные услуги в сфере нутрициологии:</p>
                  <ul className="list-none space-y-1">
                    {["Первичные консультации", "Разработка индивидуальных программ питания", "Сопровождение", "Рекомендации по образу жизни"].map((i) => (
                      <li key={i} className="flex gap-2"><span className="text-[#00d492] shrink-0">—</span>{i}</li>
                    ))}
                  </ul>
                  <p>Услуги носят информационно-консультационный характер и не являются медицинскими.</p>
                  <h3 className="text-white font-semibold text-[15px] pt-2">3. Стоимость и порядок оплаты</h3>
                  <p>Стоимость услуг определяется в соответствии с актуальным прайсом. Оплата производится безналичным способом.</p>
                  <h3 className="text-white font-semibold text-[15px] pt-2">4. Ответственность сторон</h3>
                  <p>Исполнитель не несёт ответственности за несоблюдение рекомендаций и индивидуальные особенности организма клиента.</p>
                  <h3 className="text-white font-semibold text-[15px] pt-2">5. Персональные данные</h3>
                  <p>Клиент даёт согласие на обработку персональных данных в соответствии с Политикой конфиденциальности.</p>
                  <h3 className="text-white font-semibold text-[15px] pt-2">6. Реквизиты</h3>
                  <p>Email: elena@ozer.ru<br/>Телефон: +7 (999) 123-45-67</p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
      <style>{`
=======
      <style>{`
        /* Logo subtitle Glass effect */
        .logo-glass {
          position: relative;
          display: inline-block;
          backdrop-filter: blur(3px) brightness(1.9) saturate(1.9) contrast(10);
          -webkit-backdrop-filter: blur(3px) brightness(1.4) saturate(1.5) contrast(1.3);
        }

>>>>>>> d19f48c2027632490b3220c479497c3892c669a9
        /* Hero orbit animation */
        @keyframes hero-orbit-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes hero-orbit-counter {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .hero-orbit-ring {
          animation: hero-orbit-spin var(--orbit-duration) linear infinite;
          animation-delay: var(--orbit-delay, 0s);
          border: 0.8px solid rgba(255,255,255,0.04);
        }
        .hero-orbit-img {
          animation: hero-orbit-counter var(--orbit-duration) linear infinite;
          animation-delay: var(--orbit-delay, 0s);
        }

<<<<<<< HEAD
        /* Light theme base */
        html, body { background-color: #f7f4ed; }

        /* Fix SVG icon stroke colors (were white, now dark) */
        [data-name="Contacts"] svg path,
        [data-name="Header"] [data-name="Link"] svg path,
        [data-name="Header"] button svg path,
        [data-name="Form"] [data-name="Button"] svg path {
          stroke: rgba(0,0,0,0.65) !important;
          stroke-opacity: 1 !important;
        }
        /* Keep green accent strokes */
        [data-name="Container49"] svg path,
        [data-name="Container52"] svg path,
        [data-name="Container55"] svg path { stroke: #00d492 !important; }

=======
>>>>>>> d19f48c2027632490b3220c479497c3892c669a9
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
<<<<<<< HEAD
          color: #111111 !important;
=======
          color: white !important;
>>>>>>> d19f48c2027632490b3220c479497c3892c669a9
        }

        [data-name="Text Input"] input::placeholder,
        [data-name="Email Input"] input::placeholder,
        [data-name="Phone Input"] input::placeholder,
        [data-name="Text Area"] textarea::placeholder {
<<<<<<< HEAD
          color: rgba(0, 0, 0, 0.35);
=======
          color: rgba(255, 255, 255, 0.3);
>>>>>>> d19f48c2027632490b3220c479497c3892c669a9
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

<<<<<<< HEAD
        /* Header */
        [data-name="Header"] {
          position: sticky;
          top: 0;
          z-index: 1000;
=======
        /* Header animation */
        [data-name="Header"] {
          animation: slideDown 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          backdrop-filter: blur(10px);
          position: sticky;
          top: 0;
          z-index: 1000;
          background: rgba(10, 10, 10, 0.8);
>>>>>>> d19f48c2027632490b3220c479497c3892c669a9
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
