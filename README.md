# azatisrail.org — Сайт на Astro + Keystatic

## Стек
- **Astro 4** — фреймворк (статичная генерация)
- **Keystatic** — CMS с браузерным редактором
- **GitHub** — хранилище кода и контента
- **Cloudflare Pages** — хостинг и CDN (бесплатно)

---

## Первый запуск (разработка)

### 1. Установи зависимости
```bash
npm install
```

### 2. Запусти локально
```bash
npm run dev
```

Сайт откроется на `http://localhost:4321`  
Редактор Keystatic — на `http://localhost:4321/keystatic`

---

## Структура контента

Весь контент хранится в `src/content/` и редактируется через Keystatic:

| Папка | Что там |
|---|---|
| `posts/` | Статьи и посты (Markdown) |
| `publications/` | Руководства и материалы |
| `funding/` | Источники финансирования (JSON) |
| `videos/` | Видео с YouTube (JSON) |
| `trainings/` | Тренинги (JSON) |
| `courses/` | Курсы (JSON) |

---

## Как добавить контент

### Через браузер (Keystatic UI)
1. `npm run dev`
2. Открой `http://localhost:4321/keystatic`
3. Выбери раздел → создай запись → заполни поля → сохрани
4. Keystatic создаёт файл в нужной папке автоматически
5. Сделай коммит в GitHub → Cloudflare Pages задеплоит автоматически

### Вручную (для опытных)
Создай файл `.md` (для постов/публикаций) или `.json` (для остального) по образцу существующих файлов.

---

## Деплой на Cloudflare Pages

### 1. Загрузи проект на GitHub
```bash
git init
git add .
git commit -m "init"
git remote add origin https://github.com/ВАШ_ЛОГИН/azatisrail.git
git push -u origin main
```

### 2. Подключи Cloudflare Pages
1. Зайди на [pages.cloudflare.com](https://pages.cloudflare.com)
2. Create a project → Connect to Git → выбери репозиторий
3. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Сохрани → Cloudflare сам задеплоит

### 3. Подключи домен azatisrail.org
В Cloudflare Pages → Custom domains → добавь `azatisrail.org`

---

## Страницы сайта

| URL | Страница |
|---|---|
| `/` | Главная |
| `/posts` | Все посты |
| `/posts/[slug]` | Пост детально |
| `/publications` | Публикации |
| `/funding` | Источники финансирования |
| `/trainings` | Тренинги (с фильтрами) |
| `/videos` | Видео с YouTube |
| `/courses` | Курсы |
| `/about` | Обо мне |
| `/contact` | Контакты |
| `/keystatic` | CMS редактор (только dev) |

---

## Добавление тренинга (пример JSON)

```json
{
  "title": "Название тренинга",
  "topics": ["fundraising"],
  "description": "Описание тренинга",
  "duration": "2 дня / 16 часов",
  "format": "both",
  "audience": ["НКО", "Руководители"],
  "isPartner": false,
  "trainerName": "Азат Исраилов",
  "trainerRole": "Консультант",
  "trainerInitials": "АИ",
  "contactEmail": "azat@azatisrail.org",
  "contactPhone": "+996 702 27 18 27",
  "links": [
    { "label": "Подробнее", "url": "https://..." }
  ]
}
```

Для тренинга партнёра — установи `"isPartner": true` и заполни данные партнёра.

---

## Будущие доработки
- [ ] Мультиязычность (KY / EN) — добавить через Astro i18n
- [ ] ИИ-помощник по финансированию — отдельная разработка
- [ ] Поиск по сайту — добавить Pagefind после наполнения контентом
- [ ] Форма обратной связи — подключить через Cloudflare Email Workers или Formspree
 
