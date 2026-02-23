# Текущее состояние проекта

> Обновлено: 2026-02-23

## Статус: Layout ограничен 1200px, готовы к адаптиву

Проект собирается и запускается. Layout ограничен до `max-width: 1200px` с центрированием. Настроена система дизайн-токенов, брейкпоинтов и React-хелпер для адаптива. Modern-компоненты подготовлены, но приложение пока рендерит Figma-экспорт через `InteractiveSite`.

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
| `src/app/components/Hero.tsx` | Главный экран |
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

## Известные проблемы

- `App.tsx` рендерит `InteractiveSite` (Figma-обёртка), а не Modern-компоненты
- Legacy-компоненты (About.tsx, Contact.tsx и др.) не удалены
- В `InteractiveSite.tsx` и `Site.tsx` по-прежнему хардкод-цвета (вне scope текущей задачи)

## Последняя сессия

**Дата:** 2026-02-23
**Что сделано:**
- Ограничен layout до `max-width: 1200px` с центрированием (`mx-auto`)
- Исправлен `Site.tsx`: `size-full` → `w-full max-w-[1200px] mx-auto`
- Убрана жёсткая ширина `w-[1440px]` из `Frame2` (hero-обёртка)
- Заменены `w-[1200px]` → `w-full` в секциях Frame1, Consultation, Frame10 (отзывы), Frame12 (контакты)
- Убраны `px-[120px]` из Header, Frame7 (Философия), Footer (были рассчитаны на 1440px)
- Исправлен фон body: `bg-background` → `bg-surface` для единого тёмного фона
- Исправлено центрирование текста "Специальное предложение": `left-[600px]` → `left-1/2`
- Переработан Logo (`src/imports/Logo.tsx`):
  - Верхняя часть: SVG-path "ELENA OZER" (белый) + декоративные кружки (PNG `circle.png`, абсолютное позиционирование)
  - Нижняя часть: SVG-path "ART OF NUTRITION" (`#00BA80`, fillOpacity 0.53)
  - Отступ 16px между частями (`mt-[16px]`)
  - Glass-эффект на subtitle: `backdrop-filter: blur(3px) brightness(1.4) saturate(1.5) contrast(1.3)`
  - Убрана анимация pulse с кружков
- Добавлен ассет `src/assets/circle.png` (декоративный кружок для логотипа)

**Изменённые файлы:** `src/imports/Site.tsx`, `src/styles/theme.css`, `src/imports/Logo.tsx`, `src/app/components/InteractiveSite.tsx`

**Следующий шаг:** Подключить Modern-компоненты в `App.tsx`, реализовать адаптивную вёрстку.
