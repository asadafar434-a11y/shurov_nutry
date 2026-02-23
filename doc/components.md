# Компоненты

## Активные компоненты (Modern)

Эти компоненты — рабочие версии секций сайта. Используют дизайн-токены (`brand`, `surface`), анимации Motion и responsive-дизайн.

### Navigation.tsx
Фиксированная навигация с логотипом, меню и соц. иконками.
- Позиционирование: `fixed top-0`, `z-50`
- Фон: `bg-black/90 backdrop-blur-md`

### Hero.tsx
Главный экран с заголовком, текстом и декоративными кругами с изображениями.
- Использует 3 изображения из `@/assets/` + дополнительное foodImage
- Содержит альтернативную реализацию орбитальной анимации (CSS keyframes + `<style>`)
- **Не подключён** к `App.tsx` — орбитальная анимация реализована в Figma-экспорте (Site.tsx + InteractiveSite.tsx)

### AboutModern.tsx
Секция «Философия» — фото Елены + статистика + список принципов.
- Фото с эффектом `grayscale → цвет` при наведении
- Оверлей «10+ лет опыта» с `bg-brand`

### ServicesGrid.tsx
Сетка из 6 услуг + CTA-блок «Первая консультация бесплатно».
- При клике открывается `ServiceModal`
- 6 услуг с ценами и описаниями

### ServiceModal.tsx
Модальное окно с деталями услуги.
- Описание, список включённого, цена
- Кнопка «Оплатить» → открывает `PaymentModal`

### PaymentModal.tsx
Модальное окно оплаты.
- Форматирование номера карты, срока, CVV
- Имитация процесса оплаты с анимацией
- Состояние успеха

### Testimonials.tsx
Три карточки с отзывами клиентов.
- Цитата, результат (бейдж), фото и имя автора

### ContactModern.tsx
Форма обратной связи + контактная информация + фото.
- 4 поля формы: имя, email, телефон, сообщение
- Контакты: email, телефон, локация
- Оверлей гарантии на фото

### FooterModern.tsx
Подвал: логотип, ссылки по категориям, копирайт.

## Figma-экспорт

### imports/Site.tsx
Полная страница, экспортированная из Figma Make. Содержит все секции сайта одним монолитным файлом. Стили захардкожены через inline Tailwind-классы.

### imports/Logo.tsx
SVG-логотип «ELENA».

### imports/Container.tsx
Градиентный SVG-контейнер для секции философии.

### InteractiveSite.tsx
Обёртка вокруг `Site.tsx`: рендерит Figma-код и добавляет интерактивность через `useEffect` + DOM-манипуляции (scroll, hover, формы).
- CSS `@keyframes hero-orbit-spin` / `hero-orbit-counter` — орбитальная анимация Hero
- Классы `.hero-orbit-ring` и `.hero-orbit-img` — управляются через CSS-переменные `--orbit-duration`, `--orbit-delay`
- Logo Glass-эффект: `.logo-glass` с `backdrop-filter`
- `overflow-x-clip` на корневом `motion.div` — предотвращает горизонтальный скролл от `w-screen` элементов

## Legacy-компоненты

Старые версии, **не подключены** к приложению:

| Файл | Заменён на |
|---|---|
| `About.tsx` | `AboutModern.tsx` |
| `Contact.tsx` | `ContactModern.tsx` |
| `Services.tsx` | `ServicesGrid.tsx` |
| `ServicesModern.tsx` | `ServicesGrid.tsx` |
| `TestimonialsModern.tsx` | `Testimonials.tsx` |
| `Footer.tsx` | `FooterModern.tsx` |

## shadcn/ui (ui/)

46 компонентов из shadcn/ui. Построены на Radix UI примитивах. **Не редактировать** без явной необходимости.
