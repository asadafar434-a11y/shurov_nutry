# Текущее состояние проекта

> Обновлено: 2026-02-23

## Статус: Инфраструктура настроена, Modern-компоненты готовы

Проект собирается и запускается. Настроена система дизайн-токенов. Modern-компоненты подготовлены, но приложение пока рендерит Figma-экспорт через `InteractiveSite`.

## Что уже сделано

- [x] Экспорт кода из Figma Make (начальная кодовая база)
- [x] Настройка Git (ветки `main` и `develop`)
- [x] Настройка Cursor rules и рабочего процесса
- [x] Установка зависимостей (`pnpm install`)
- [x] Исправление `figma:asset/` импортов → реальные пути `@/assets/`
- [x] Добавление дизайн-токенов в `@theme inline` (brand, surface, шрифты)
- [x] Исправление `fonts.css`: Manrope вместо Playfair Display
- [x] Замена хардкод-цветов в 9 Modern-компонентах (`emerald-*` → `brand`, `#0a0a0a` → `surface`)
- [x] Проверка сборки — `pnpm build` проходит успешно
- [x] Создание документации (`doc/`)

## Текущие задачи

- [ ] Подключить Modern-компоненты вместо InteractiveSite в `App.tsx`
- [ ] Удалить legacy-компоненты (About.tsx, Contact.tsx, Services.tsx, Footer.tsx и др.)
- [ ] Сверить Modern-компоненты с макетом Figma
- [ ] Определить, нужен ли `InteractiveSite.tsx` после перехода на Modern-компоненты

## Архитектура (ключевые файлы)

| Файл | Назначение |
|------|-----------|
| `src/main.tsx` | Точка входа приложения |
| `src/app/App.tsx` | Корневой компонент, сейчас рендерит `InteractiveSite` |
| `src/app/components/Navigation.tsx` | Навигация |
| `src/app/components/Hero.tsx` | Главный экран |
| `src/app/components/AboutModern.tsx` | Секция «Философия» |
| `src/app/components/ServicesGrid.tsx` | Услуги (6 карточек + CTA) |
| `src/app/components/Testimonials.tsx` | Отзывы |
| `src/app/components/ContactModern.tsx` | Контакты (форма + фото) |
| `src/app/components/FooterModern.tsx` | Подвал |
| `src/app/components/ServiceModal.tsx` | Модалка деталей услуги |
| `src/app/components/PaymentModal.tsx` | Модалка оплаты |
| `src/styles/theme.css` | Дизайн-токены + shadcn/ui переменные |
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
- Исправлены `figma:asset/` импорты → `@/assets/` (реальные пути к PNG)
- Добавлена система дизайн-токенов Tailwind v4 (`brand`, `surface`, шрифты)
- Обновлены fonts.css (Manrope + Inter)
- Заменены хардкод-цвета в 9 компонентах на токены
- Создана документация: `doc/architecture.md`, `doc/design-tokens.md`, `doc/components.md`

**Следующий шаг:** Подключить Modern-компоненты в `App.tsx` вместо `InteractiveSite`, сверить с макетом Figma.
