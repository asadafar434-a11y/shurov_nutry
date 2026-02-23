# Текущее состояние проекта

> Обновлено: 2026-02-23

## Статус: Полноширинные фоны, фиксы карточек, начало адаптива

Проект собирается и запускается. Layout ограничен до `max-width: 1240px` с `px-5` (20px padding) и центрированием. Контентная область остаётся 1200px на десктопе. Полноширинные фоны реализованы через `w-screen` + `overflow-x-clip`. Орбитальная анимация в Hero работает.

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
- [x] Полноширинные фоны: Header, HeroBlock, Footer (w-screen + overflow-x-clip)
- [x] Glass-эффект на Header (backdrop-filter blur)
- [x] Glass-эффект на "3+" элемент (Container10, subtle blur)
- [x] Glass-эффект на "Гарантия" блок (Container60, центрирован)
- [x] Текст "Результат через 2 недели..." в одну строку (whitespace-nowrap)
- [x] "Философия" — заголовок по центру (items-center на Frame7)
- [x] "Философия" — z-[1] на контенте поверх GradientContainer
- [x] "Индивидуальный подход..." — flex-1 min-w-0 whitespace-nowrap (Paragraph1/2/3)
- [x] Карточки "Истории успеха" — плашки кг на одной высоте (Text1 top: 227.2px)
- [x] Карточки "Истории успеха" — исправлено наложение профессии на имя (flex-col)
- [x] Футер — "Услуги" и "О специалисте" закомментированы, контакты на первом столбце
- [x] Адаптивный padding: px-5 (20px) + max-w-[1240px] на корневом Site

## Текущие задачи

- [ ] Продолжить адаптивную вёрстку (медиа-запросы для md/sm)
- [ ] Подключить Modern-компоненты вместо InteractiveSite в `App.tsx`
- [ ] Удалить legacy-компоненты (About.tsx, Contact.tsx, Services.tsx, Footer.tsx и др.)
- [ ] Сверить Modern-компоненты с макетом Figma

## Архитектура (ключевые файлы)

| Файл | Назначение |
|------|-----------|
| `src/main.tsx` | Точка входа приложения |
| `src/app/App.tsx` | Корневой компонент, сейчас рендерит `InteractiveSite` |
| `src/app/hooks/useBreakpoint.ts` | Хук адаптива: isMobile, isTablet, isDesktop, isWidescreen |
| `src/app/components/InteractiveSite.tsx` | Обёртка: Site + интерактивность + CSS анимации |
| `src/imports/Site.tsx` | Figma-экспорт, основной рендер страницы |
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

## Layout

- Максимальная ширина: **1240px** (`max-w-[1240px]`) с `px-5` (20px padding) → контентная область 1200px
- Центрирование: `mx-auto`
- Body background: `bg-surface` (`#0a0a0a`)
- Полноширинные фоны: через абсолютный div `w-screen left-1/2 -translate-x-1/2`
- Overflow: `overflow-x-clip` на `motion.div` в InteractiveSite (предотвращает горизонтальный скролл от `w-screen`)

### Полноширинные секции

| Секция | Фон | Доп. эффекты |
|--------|-----|-------------|
| Header | `rgba(7,7,7,0.5)` | `backdrop-filter: blur(16px)` |
| HeroBlock | `#161616` | — |
| Footer | `black` | Верхний бордер `rgba(255,255,255,0.05)` |

## Орбитальная анимация Hero

Три кружка-сателлита с изображениями вращаются вокруг центральной картинки:

### Параметры орбит

| Орбита | Диаметр | Сателлит | Скорость | Старт |
|--------|---------|----------|----------|-------|
| 1 | 390px | 96px (Container4) | 28s | ~90° (`-7s`) |
| 2 | 440px | 128px (Container5) | 35s | ~237° (`-23s`) |
| 3 | 436px | 112px (Container6) | 42s | ~120° (`-14s`) |

## Стеклянные эффекты (Glass)

| Элемент | Blur | Фон |
|---------|------|-----|
| Header | `blur(16px)` | `rgba(7,7,7,0.5)` |
| "3+" (Container10) | `blur(4px)` | `rgba(0,0,0,0.07)` |
| "Гарантия" (Container60) | `blur(4px)` | `rgba(0,0,0,0.07)` |

## Известные проблемы

- `App.tsx` рендерит `InteractiveSite` (Figma-обёртка), а не Modern-компоненты
- Legacy-компоненты (About.tsx, Contact.tsx и др.) не удалены
- В `InteractiveSite.tsx` и `Site.tsx` по-прежнему хардкод-цвета (вне scope текущей задачи)
- `Hero.tsx` (Modern-компонент) содержит альтернативную реализацию с orbit animation, но не подключён

## Последняя сессия

**Дата:** 2026-02-23
**Что сделано:**
- Полноширинные фоны для Header (`rgba(7,7,7,0.5)` + glass blur), HeroBlock (`#161616`), Footer (`black`)
- Glass-эффект на элементе "3+" (Container10) — `blur(4px)`, `rgba(0,0,0,0.07)`
- Glass-эффект на блоке "Гарантия" (Container60) — центрирован, текст в одну строку
- "Философия" (Frame7) — заголовок по центру, z-[1] на контенте
- "Индивидуальный подход к каждому клиенту" — flex-растяжение, whitespace-nowrap
- Карточки "Истории успеха":
  - Плашки с кг выровнены на одну высоту (`top-[227.2px]`)
  - Наложение профессии на имя исправлено → flex-col без абсолютного позиционирования
- Футер: закомментированы "Услуги" и "О специалисте", контакты на первом столбце
- `overflow-x-clip` на InteractiveSite (предотвращает горизонтальный скролл)
- Адаптивный padding: `px-5` + `max-w-[1240px]` на корневом Site

**Изменённые файлы:**
- `src/imports/Site.tsx` — Header, HeroBlock, Frame7, Container10, Container60, Container61, Paragraph11, Text1, Container32/37/42 (карточки), Container67 (футер контакты), Container63 (закомментированы), Footer, Site
- `src/app/components/InteractiveSite.tsx` — `overflow-x-clip` на motion.div

**Следующий шаг:** Продолжить адаптивную вёрстку (медиа-запросы для средних и малых экранов).
