import { config, collection, fields } from '@keystatic/core';

export default config({
  storage: {
    // Switch to { kind: 'github', repo: 'YOUR_USERNAME/azatisrail' } for production
    kind: 'github',
    repo: 'AIsrail/azatisrail.org'
  },

  ui: {
    brand: { name: 'azatisrail.org' },
  },

  collections: {

    // ── ПОСТЫ / СТАТЬИ ──────────────────────────────────────────────
    posts: collection({
      label: 'Посты и статьи',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'body' },
      schema: {
        title: fields.slug({ name: { label: 'Заголовок' } }),
        date: fields.date({ label: 'Дата публикации', validation: { isRequired: true } }),
        tag: fields.select({
          label: 'Тема',
          options: [
            { label: 'Фандрайзинг', value: 'fundraising' },
            { label: 'НКО', value: 'ngo' },
            { label: 'Бизнес', value: 'business' },
            { label: 'Акселерация', value: 'acceleration' },
            { label: 'Управление', value: 'management' },
            { label: 'Разное', value: 'other' },
          ],
          defaultValue: 'fundraising',
        }),
        excerpt: fields.text({ label: 'Краткое описание', multiline: true }),
        body: fields.markdoc({ label: 'Содержание' }),
      },
    }),

    // ── ПУБЛИКАЦИИ ───────────────────────────────────────────────────
    publications: collection({
      label: 'Публикации',
      slugField: 'title',
      path: 'src/content/publications/*',
      format: { contentField: 'body' },
      schema: {
        title: fields.slug({ name: { label: 'Название' } }),
        type: fields.select({
          label: 'Тип',
          options: [
            { label: 'Руководство (PDF)', value: 'guide' },
            { label: 'Статья', value: 'article' },
            { label: 'Гайд (PDF)', value: 'pdf' },
            { label: 'Инструмент', value: 'tool' },
          ],
          defaultValue: 'guide',
        }),
        icon: fields.text({ label: 'Эмодзи-иконка', description: 'Например: 📖 или 📊' }),
        description: fields.text({ label: 'Краткое описание', multiline: true }),
        cta: fields.text({ label: 'Текст кнопки', description: 'Например: Читать бесплатно →' }),
        link: fields.url({ label: 'Ссылка (внешняя или внутренняя)' }),
        isFree: fields.checkbox({ label: 'Бесплатно', defaultValue: true }),
        body: fields.markdoc({ label: 'Содержание (опционально)' }),
      },
    }),

    // ── ИСТОЧНИКИ ФИНАНСИРОВАНИЯ ─────────────────────────────────────
    funding: collection({
      label: 'Источники финансирования',
      slugField: 'name',
      path: 'src/content/funding/*',
      schema: {
        name: fields.slug({ name: { label: 'Название' } }),
        category: fields.select({
          label: 'Категория',
          options: [
            { label: 'Гранты', value: 'grants' },
            { label: 'Инвестиции', value: 'investors' },
            { label: 'Банки и МФО', value: 'banks' },
          ],
          defaultValue: 'grants',
        }),
        description: fields.text({ label: 'Описание', multiline: true }),
        count: fields.text({ label: 'Количество (н-р: 60+ организаций)' }),
        geography: fields.text({ label: 'География (н-р: КР · КЗ · УЗ)' }),
        updatedAt: fields.text({ label: 'Дата обновления' }),
        link: fields.url({ label: 'Ссылка на каталог' }),
      },
    }),

    // ── ВИДЕО ────────────────────────────────────────────────────────
    videos: collection({
      label: 'Видео с YouTube',
      slugField: 'title',
      path: 'src/content/videos/*',
      schema: {
        title: fields.slug({ name: { label: 'Заголовок' } }),
        youtubeUrl: fields.url({ label: 'Ссылка на YouTube' }),
        youtubeId: fields.text({ label: 'YouTube ID (часть после ?v=)' }),
        date: fields.date({ label: 'Дата публикации' }),
        topic: fields.select({
          label: 'Тема',
          options: [
            { label: 'Фандрайзинг', value: 'fundraising' },
            { label: 'НКО', value: 'ngo' },
            { label: 'Бизнес', value: 'business' },
            { label: 'Управление', value: 'management' },
          ],
          defaultValue: 'fundraising',
        }),
        duration: fields.text({ label: 'Длительность (н-р: 18:42)' }),
        views: fields.text({ label: 'Просмотры (н-р: 4.2K)' }),
      },
    }),

    // ── ТРЕНИНГИ ─────────────────────────────────────────────────────
    trainings: collection({
      label: 'Тренинги',
      slugField: 'title',
      path: 'src/content/trainings/*',
      schema: {
        title: fields.slug({ name: { label: 'Название тренинга' } }),
        topics: fields.multiselect({
          label: 'Темы',
          options: [
            { label: 'Фандрайзинг', value: 'fundraising' },
            { label: 'Проектирование', value: 'project' },
            { label: 'Управление', value: 'management' },
            { label: 'Бизнес', value: 'business' },
          ],
        }),
        description: fields.text({ label: 'Описание', multiline: true }),
        duration: fields.text({ label: 'Длительность (н-р: 2 дня / 16 часов)' }),
        format: fields.select({
          label: 'Формат',
          options: [
            { label: 'Онлайн', value: 'online' },
            { label: 'Офлайн', value: 'offline' },
            { label: 'Оба', value: 'both' },
          ],
          defaultValue: 'both',
        }),
        audience: fields.array(
          fields.text({ label: 'Аудитория' }),
          { label: 'Аудитория', itemLabel: props => props.value }
        ),
        isPartner: fields.checkbox({ label: 'Тренинг партнёра', defaultValue: false }),
        trainerName: fields.text({ label: 'Имя тренера' }),
        trainerRole: fields.text({ label: 'Роль / описание тренера' }),
        trainerInitials: fields.text({ label: 'Инициалы (2 буквы для аватара)' }),
        contactEmail: fields.text({ label: 'Email' }),
        contactPhone: fields.text({ label: 'Телефон' }),
        links: fields.array(
          fields.object({
            label: fields.text({ label: 'Название ссылки' }),
            url: fields.url({ label: 'URL' }),
          }),
          { label: 'Ссылки', itemLabel: props => props.fields.label.value }
        ),
      },
    }),

    // ── КУРСЫ ────────────────────────────────────────────────────────
    courses: collection({
      label: 'Курсы',
      slugField: 'title',
      path: 'src/content/courses/*',
      schema: {
        title: fields.slug({ name: { label: 'Название курса' } }),
        badge: fields.text({ label: 'Бейдж (н-р: Флагман, Новый, Групповой)' }),
        isFeatured: fields.checkbox({ label: 'Выделить как главный', defaultValue: false }),
        description: fields.text({ label: 'Описание', multiline: true }),
        format: fields.text({ label: 'Формат (н-р: Онлайн)' }),
        duration: fields.text({ label: 'Длительность (н-р: 6 модулей)' }),
        price: fields.text({ label: 'Цена (н-р: от $120)' }),
        link: fields.url({ label: 'Ссылка на курс' }),
      },
    }),

  },
});
