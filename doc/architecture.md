# Архитектура проекта

> Сайт нутрициолога Елены Озер

## Стек

| Технология | Версия | Назначение |
|---|---|---|
| React | 18.3 | UI-фреймворк |
| TypeScript | ES modules | Типизация |
| Vite | 6.3 | Сборка и dev-сервер |
| Tailwind CSS | 4.1 | Стилизация (через `@tailwindcss/vite` плагин) |
| shadcn/ui | — | UI-примитивы (Radix UI) |
| Motion (Framer Motion) | 12.x | Анимации |
| pnpm | 10.x | Пакетный менеджер |

## Структура файлов

```
src/
├── main.tsx                          # Точка входа React
├── app/
│   ├── App.tsx                       # Корневой компонент → InteractiveSite
│   └── components/
│       ├── ui/                       # shadcn/ui компоненты (46 шт., НЕ РЕДАКТИРОВАТЬ)
│       ├── figma/                    # Утилиты из Figma (ImageWithFallback)
│       │
│       ├── Navigation.tsx            # Навигация (fixed top)
│       ├── Hero.tsx                  # Главный экран
│       ├── AboutModern.tsx           # Секция «Философия»
│       ├── ServicesGrid.tsx          # Услуги (6 карточек + CTA)
│       ├── Testimonials.tsx          # Отзывы (3 карточки)
│       ├── ContactModern.tsx         # Контакты (форма + фото)
│       ├── FooterModern.tsx          # Подвал
│       │
│       ├── ServiceModal.tsx          # Модалка деталей услуги
│       ├── PaymentModal.tsx          # Модалка оплаты
│       │
│       ├── InteractiveSite.tsx       # Обёртка: рендерит Figma Site + интерактивность
│       ├── AnimatedSite.tsx          # Альтернативная обёртка с анимациями
│       │
│       ├── About.tsx                 # [legacy] Старая версия About
│       ├── Contact.tsx               # [legacy] Старая версия Contact
│       ├── Services.tsx              # [legacy] Старая версия Services
│       ├── ServicesModern.tsx         # [legacy] Промежуточная версия Services
│       ├── TestimonialsModern.tsx     # [legacy] Промежуточная версия Testimonials
│       └── Footer.tsx                # [legacy] Старая версия Footer
│
├── hooks/
│   └── useBreakpoint.ts              # Хук адаптива (isMobile, isTablet, isDesktop, isWidescreen)
│
├── imports/                          # Код из Figma Make (сырой экспорт)
│   ├── Site.tsx                      # Полная страница из Figma
│   ├── Logo.tsx                      # SVG-логотип
│   ├── Container.tsx                 # Градиентный контейнер
│   └── svg-rbnoezal0z.ts            # SVG path data
│
├── assets/                           # Изображения (экспорт из Figma)
│   ├── c6321bc6...png                # Healthy food (hero)
│   ├── a8eea920...png                # Елена Озер (about)
│   ├── 9a32dbb6...png                # Елена Озер (contact)
│   ├── e5294f75...png                # Food circle (hero декор)
│   ├── e271bf93...png                # Анна Соколова (testimonial)
│   ├── ca27e31e...png                # Дмитрий Петров (testimonial)
│   └── a033bced...png                # Мария Иванова (testimonial)
│
└── styles/
    ├── index.css                     # Точка входа: импортирует остальные
    ├── fonts.css                     # Google Fonts: Manrope + Inter
    ├── tailwind.css                  # Tailwind CSS v4 импорт + source
    └── theme.css                     # Дизайн-токены + shadcn/ui переменные
```

## Layout

- Максимальная ширина макета: **1200px**
- Корневой `Site` div: `max-w-[1200px] mx-auto` — ограничивает и центрирует контент
- Body background: `bg-surface` (`#0a0a0a`) — обеспечивает единый тёмный фон на широких экранах
- Все секции внутри используют `w-full`, ширина определяется контейнером

## Поток данных

```
main.tsx → App.tsx → InteractiveSite.tsx → Site.tsx (Figma)
                                         ↑
                              добавляет интерактивность:
                              - scroll к секциям
                              - hover-эффекты
                              - форма контактов
```

Приложение в текущем виде рендерит `InteractiveSite`, который оборачивает сырой Figma-экспорт (`Site.tsx`) и добавляет к нему обработчики событий через DOM-манипуляции.

Modern-компоненты (`Hero.tsx`, `AboutModern.tsx`, и т.д.) подготовлены как замена Figma-коду, но пока **не подключены** к `App.tsx`.

## Конфигурация

### Vite (`vite.config.ts`)

- Плагины: `react()`, `tailwindcss()`
- Алиас: `@` → `./src`

### Tailwind CSS v4

Конфигурация через CSS (не `tailwind.config.ts`):
- `tailwind.css` — импорт Tailwind + `tw-animate-css`
- `theme.css` — `@theme inline` блок с дизайн-токенами и shadcn/ui переменными

### Алиасы путей

- `@` → `./src` (настроен в `vite.config.ts`)
- Импорт изображений: `@/assets/filename.png`

## Слои компонентов

| Слой | Описание | Пример |
|---|---|---|
| **UI-примитивы** | shadcn/ui, не редактировать | `ui/button.tsx`, `ui/dialog.tsx` |
| **Figma-экспорт** | Сырой код, постепенно заменяется | `imports/Site.tsx` |
| **Modern-компоненты** | Рабочие компоненты проекта | `Hero.tsx`, `ServicesGrid.tsx` |
| **Legacy-компоненты** | Старые версии, не используются | `About.tsx`, `Contact.tsx` |
