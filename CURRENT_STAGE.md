# Текущее состояние проекта

> Обновлено: 2026-02-23

## Статус: Инфраструктура настроена, готовы к адаптиву

Проект собирается и запускается. Настроена система дизайн-токенов, брейкпоинтов и React-хелпер для адаптива. Modern-компоненты подготовлены, но приложение пока рендерит Figma-экспорт через `InteractiveSite`.

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

## Известные проблемы

- `App.tsx` рендерит `InteractiveSite` (Figma-обёртка), а не Modern-компоненты
- Legacy-компоненты (About.tsx, Contact.tsx и др.) не удалены
- В `InteractiveSite.tsx` и `Site.tsx` по-прежнему хардкод-цвета (вне scope текущей задачи)

## Последняя сессия

**Дата:** 2026-02-23
**Что сделано:**
- Обновлены Cursor rules: добавлено чтение/обновление `doc/` в workflow и project
- Добавлены явные брейкпоинт-токены в `theme.css` (sm/md/lg/xl/2xl)
- Создан хук `useBreakpoint` в `src/app/hooks/useBreakpoint.ts` (isMobile, isTablet, isDesktop, isWidescreen, breakpoint, width)

**Следующий шаг:** Подключить Modern-компоненты в `App.tsx`, реализовать адаптивную вёрстку.
