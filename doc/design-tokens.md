# Дизайн-токены

Все дизайн-токены определены в `src/styles/theme.css` внутри блока `@theme inline`.

## Цвета

### Бренд

| Токен | Значение | Tailwind-класс | Назначение |
|---|---|---|---|
| `--color-brand` | `#00d492` | `text-brand`, `bg-brand`, `border-brand` | Основной бренд-цвет из Figma |
| `--color-brand-dark` | `#006e4c` | `bg-brand-dark` | Тёмный вариант (градиенты, hover кнопок) |
| `--color-brand-muted` | `rgba(0,186,128,0.53)` | `text-brand-muted` | Приглушённый акцент |

### Поверхности

| Токен | Значение | Tailwind-класс | Назначение |
|---|---|---|---|
| `--color-surface` | `#0a0a0a` | `bg-surface` | Основной фон страницы |
| `--color-surface-elevated` | `rgba(255,255,255,0.05)` | `bg-surface-elevated` | Карточки, приподнятые блоки |

### Использование с прозрачностью

Tailwind v4 поддерживает модификаторы прозрачности:

```html
<p class="text-brand/50">Полупрозрачный бренд-цвет</p>
<div class="border-brand/30">Бордер с 30% прозрачности</div>
```

## Шрифты

| Токен | Значение | Tailwind-класс | Назначение |
|---|---|---|---|
| `--font-heading` | `'Manrope', sans-serif` | `font-heading` | Заголовки, кнопки |
| `--font-body` | `'Inter', sans-serif` | `font-body` | Основной текст |

Шрифты подключены через Google Fonts в `src/styles/fonts.css`.

## Брейкпоинты

Определены в `theme.css` (`--breakpoint-*`) и продублированы в `src/app/hooks/useBreakpoint.ts` (`BREAKPOINTS`).

| Токен | Значение | CSS-префикс | JS (useBreakpoint) |
|---|---|---|---|
| `--breakpoint-sm` | `640px` | `sm:` | `isMobile` = < 640 |
| `--breakpoint-md` | `768px` | `md:` | — |
| `--breakpoint-lg` | `1024px` | `lg:` | `isDesktop` = >= 1024 |
| `--breakpoint-xl` | `1280px` | `xl:` | `isWidescreen` = >= 1280 |
| `--breakpoint-2xl` | `1536px` | `2xl:` | — |

`isTablet` = >= 640 && < 1024.

### Использование в CSS (Tailwind)

```html
<div class="px-4 md:px-8 lg:px-12">Responsive padding</div>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">Grid</div>
```

### Использование в JS (React)

```tsx
import { useBreakpoint } from '@/app/hooks/useBreakpoint';

function MyComponent() {
  const { isMobile, isDesktop, breakpoint } = useBreakpoint();
  return isMobile ? <MobileView /> : <DesktopView />;
}
```

## shadcn/ui токены

Стандартные токены shadcn/ui сохранены для совместимости с компонентами из `ui/`:

- `--color-primary` / `--color-primary-foreground`
- `--color-secondary` / `--color-secondary-foreground`
- `--color-muted` / `--color-muted-foreground`
- `--color-accent` / `--color-accent-foreground`
- `--color-destructive` / `--color-destructive-foreground`
- `--color-border`, `--color-input`, `--color-ring`
- `--radius-sm` / `--radius-md` / `--radius-lg` / `--radius-xl`

Эти токены **не связаны** с дизайном сайта — они нужны только для работы shadcn/ui-компонентов.

## Как менять бренд-цвет

Для смены бренд-цвета всего сайта достаточно изменить переменные в `theme.css`:

```css
@theme inline {
  --color-brand: #00d492;      /* ← изменить здесь */
  --color-brand-dark: #006e4c;  /* ← и здесь */
}
```

Все компоненты, использующие `text-brand`, `bg-brand`, `border-brand`, обновятся автоматически.
