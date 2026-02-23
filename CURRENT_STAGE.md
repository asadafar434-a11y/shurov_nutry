# Текущее состояние проекта

> Обновлено: 2026-02-23

## Статус: Орбитальная анимация в Hero, layout 1200px

Проект собирается и запускается. Layout ограничен до `max-width: 1200px` с центрированием. В Hero-блоке реализована орбитальная анимация кружков-сателлитов (CSS @keyframes, подход как Solar System из CodePen). Modern-компоненты подготовлены, но приложение рендерит Figma-экспорт через `InteractiveSite`.

## Что уже сделано

- [x] Экспорт кода из Figma Make (начальная кодовая база)
- [x] Настройка Git (ветки `main` и `develop`)
- [x] Настройка Cursor rules и рабочего процесса
- [x] Установка зависимостей (`pnpm install`)
- [x] Исправление `figma:asset/` импортов → реальные пути `@/assets/`
- [x] Добавление дизайн-токенов в `@theme inline` (brand, surface, шрифты)
- [x] Исправление `fonts.css`: Manrope вместо Playfair Display
- [x] Замена хардкод-цветов в 9 Modern-компонентах (`emerald-*` → `brand`, `#0a0a0a` → `surface`)
- [x] Создание документации (`doc/`)
- [x] Обновление Cursor rules: чтение/обновление `doc/` в workflow
- [x] Добавление брейкпоинт-токенов в `@theme inline` (sm/md/lg/xl/2xl)
- [x] Создание React-хука `useBreakpoint` (`src/app/hooks/useBreakpoint.ts`)
- [x] Ограничение layout до `max-width: 1200px` (Site.tsx, theme.css)
- [x] Переработка компонента Logo (`src/imports/Logo.tsx`)
- [x] Орбитальная анимация кружков-сателлитов в Hero (Site.tsx, InteractiveSite.tsx)

## Текущие задачи

- [ ] Подключить Modern-компоненты вместо InteractiveSite в `App.tsx`
- [ ] Удалить legacy-компоненты (About.tsx, Contact.tsx, Services.tsx, Footer.tsx и др.)
- [ ] Сверить Modern-компоненты с макетом Figma
- [ ] Реализовать адаптивную вёрстку в Modern-компонентах (используя `useBreakpoint` и Tailwind responsive)

## Архитектура (ключевые файлы)

| Файл | Назначение |
|------|-----------|
| `src/main.tsx` | Точка входа приложения |
| `src/app/App.tsx` | Корневой компонент, сейчас рендерит `InteractiveSite` |
| `src/app/hooks/useBreakpoint.ts` | Хук адаптива: isMobile, isTablet, isDesktop, isWidescreen |
| `src/app/components/Navigation.tsx` | Навигация |
| `src/app/components/Hero.tsx` | Главный экран (Modern, не подключён) |
| `src/app/components/AboutModern.tsx` | Секция «Философия» |
| `src/app/components/ServicesGrid.tsx` | Услуги (6 карточек + CTA) |
| `src/app/components/Testimonials.tsx` | Отзывы |
| `src/app/components/ContactModern.tsx` | Контакты (форма + фото) |
| `src/app/components/FooterModern.tsx` | Подвал |
| `src/app/components/ServiceModal.tsx` | Модалка деталей услуги |
| `src/app/components/PaymentModal.tsx` | Модалка оплаты |
| `src/styles/theme.css` | Дизайн-токены, брейкпоинты, shadcn/ui переменные |
| `vite.config.ts` | Конфигурация Vite + алиас `@` |

## Дизайн-токены

Определены в `src/styles/theme.css`, подробная документация в `doc/design-tokens.md`.

| Токен | Класс | Значение |
|-------|-------|----------|
| `--color-brand` | `text-brand`, `bg-brand` | `#00d492` |
| `--color-brand-dark` | `bg-brand-dark` | `#006e4c` |
| `--color-surface` | `bg-surface` | `#0a0a0a` |
| `--font-heading` | `font-heading` | Manrope |
| `--font-body` | `font-body` | Inter |

## Брейкпоинты

Определены в `theme.css` (`--breakpoint-*`) и дублированы в `src/app/hooks/useBreakpoint.ts`.

| Брейкпоинт | CSS-префикс | Значение | useBreakpoint |
|---|---|---|---|
| xs | (по умолчанию) | < 640px | `isMobile` |
| sm | `sm:` | >= 640px | `isTablet` (640–1023) |
| md | `md:` | >= 768px | — |
| lg | `lg:` | >= 1024px | `isDesktop` |
| xl | `xl:` | >= 1280px | `isWidescreen` |
| 2xl | `2xl:` | >= 1536px | — |

## Ссылки

- [Макет Figma](https://www.figma.com/design/FOUwqwJBkR5sOuAdGMpVOb/)
- `doc/architecture.md` — архитектура проекта
- `doc/design-tokens.md` — система дизайн-токенов
- `doc/components.md` — описание компонентов
- `PHILOSOPHY.md` — подход к работе
- `.cursor/rules/project.mdc` — правила проекта

## Layout

- Максимальная ширина макета: **1200px** (`max-w-[1200px] mx-auto` на корневом `Site` div)
- Body background: `bg-surface` (`#0a0a0a`) — обеспечивает единый тёмный фон за пределами контейнера
- Все секции используют `w-full` вместо фиксированных ширин
- Убраны `px-[120px]` из Header, Frame7 (Философия), Footer — они были рассчитаны на 1440px layout

## Орбитальная анимация Hero

Три кружка-сателлита с изображениями вращаются вокруг центральной картинки (подход из [CodePen Solar System](https://codepen.io/AliceRez/pen/LYpwOzK)):

### Архитектура анимации

- Каждая орбита — круглый `div` (`.hero-orbit-ring`), центрированный в контейнере 432x432px
- Орбита вращается через CSS `@keyframes hero-orbit-spin` (0° → 360°)
- Сателлит расположен на левом краю орбиты (`top: 50% - size/2, left: -size/2`)
- Изображение внутри контр-вращается (`.hero-orbit-img`, `hero-orbit-counter`) чтобы фото оставалось ровным
- CSS-переменные `--orbit-duration` и `--orbit-delay` на каждом orbit ring управляют скоростью и стартовой позицией

### Параметры орбит

| Орбита | Диаметр | Сателлит | Скорость | Старт |
|--------|---------|----------|----------|-------|
| 1 | 390px | 96px (Container4) | 28s | ~90° (`-7s`) |
| 2 | 440px | 128px (Container5) | 35s | ~237° (`-23s`) |
| 3 | 436px | 112px (Container6) | 42s | ~120° (`-14s`) |

### Изменённые компоненты

- `Container` в `Site.tsx` — обёрнуты Container4/5/6 в orbit ring divs
- `Container4/5/6` — убрано статичное позиционирование, заменено на orbit-edge позиционирование
- `Container3` — добавлен `z-10` (центральное фото всегда впереди сателлитов)
- Сателлиты: убрана Figma-обёртка с `overflow-clip p-[1.6px] flex-col`, заменена на `overflow-hidden` с прямым `<img>`
- `InteractiveSite.tsx` — добавлены CSS `@keyframes` и классы `.hero-orbit-ring`, `.hero-orbit-img`

## Известные проблемы

- `App.tsx` рендерит `InteractiveSite` (Figma-обёртка), а не Modern-компоненты
- Legacy-компоненты (About.tsx, Contact.tsx и др.) не удалены
- В `InteractiveSite.tsx` и `Site.tsx` по-прежнему хардкод-цвета (вне scope текущей задачи)
- `Hero.tsx` (Modern-компонент) содержит альтернативную реализацию с orbit animation на Framer Motion, но не подключён

## Последняя сессия

**Дата:** 2026-02-23
**Что сделано:**
- Реализована орбитальная анимация кружков-сателлитов в Hero-блоке:
  - Container4/5/6 обёрнуты в вращающиеся orbit ring divs
  - CSS `@keyframes hero-orbit-spin` / `hero-orbit-counter` в InteractiveSite.tsx
  - CSS-переменные `--orbit-duration` и `--orbit-delay` для управления скоростью и стартом
  - Разные стартовые позиции через отрицательный `animation-delay` (`-7s`, `-23s`, `-14s`)
- Исправлено обрезание кружков:
  - `overflow-clip` → `overflow-hidden` + прямой `<img>` в Container4/5/6
  - Убрана Figma-обёртка `flex-col items-start p-[1.6px]` — изображения теперь заполняют весь круг
  - Центральная картинка (Container3): убран `p-[4px]`, `<img>` заполняет весь круг 304px
- Центральная картинка (Container3) всегда впереди: добавлен `z-10`
- App.tsx: временно добавлен и убран `<Hero />` при тестировании

**Изменённые файлы:**
- `src/imports/Site.tsx` — Container, Container3, Container4, Container5, Container6
- `src/app/components/InteractiveSite.tsx` — CSS keyframes и orbit классы
- `src/app/App.tsx` — откачен к `<InteractiveSite />`
- `src/app/components/Hero.tsx` — добавлена альтернативная реализация с orbit (не подключена)

**Следующий шаг:** Подключить Modern-компоненты в `App.tsx`, реализовать адаптивную вёрстку.
