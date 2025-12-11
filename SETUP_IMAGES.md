# 📸 Инструкция по добавлению изображений

Для правильного отображения логотипа и фотографий на сайте, выполните следующие шаги:

## Шаг 1: Скачайте изображения из Google Drive

1. **Логотип** (logo.png)
   - Откройте: https://drive.google.com/file/d/1v82E5jnhc6EfsrfThbXeEtlHIexmnqN7/view?usp=sharing
   - Нажмите "Скачать" (Download)
   - Сохраните файл как `logo.png`

2. **Aerial Arts фото** (aerial-arts.jpg)
   - Откройте: https://drive.google.com/file/d/172UF-lalzVVbYdoYoKUoBg6k_6U9uYD3/view?usp=sharing
   - Нажмите "Скачать" (Download)
   - Сохраните файл как `aerial-arts.jpg`

3. **Professional Photoshoots фото** (photoshoot.jpg)
   - Откройте: https://drive.google.com/file/d/1Y7vCFQSJTWabCkpGcbHNwRCJAFYFM7lU/view?usp=sharing
   - Нажмите "Скачать" (Download)
   - Сохраните файл как `photoshoot.jpg`

## Шаг 2: Разместите файлы в проекте

Поместите все скачанные файлы в папку:
```
/public/images/
```

Структура должна выглядеть так:
```
circus.castle/
├── public/
│   ├── images/
│   │   ├── logo.png          ← логотип
│   │   ├── aerial-arts.jpg   ← фото Aerial Arts
│   │   └── photoshoot.jpg    ← фото Photoshoot
│   ├── favicon.svg
│   └── robots.txt
├── app/
├── components/
└── ...
```

## Шаг 3: Проверьте результат

После размещения файлов:

1. Перезапустите dev-сервер (если он запущен):
   ```bash
   npm run dev
   ```

2. Откройте сайт в браузере и проверьте:
   - ✅ Логотип в Hero секции (верх страницы)
   - ✅ Фото в карточке "Aerial Arts"
   - ✅ Фото в карточке "Professional Photoshoots"
   - ✅ Логотип в Footer (2 места)

## Где используются изображения:

| Изображение | Места использования |
|-------------|---------------------|
| logo.png | • Hero (верх страницы)<br>• Footer (начало)<br>• Footer (copyright) |
| aerial-arts.jpg | • Disciplines > Aerial Arts (фон карточки) |
| photoshoot.jpg | • Retreats > Professional Photoshoots (фон карточки) |

## Альтернативный способ (если файлы уже загружены локально):

Если у вас есть файлы на компьютере, просто скопируйте их в папку `public/images/` с правильными именами:
- `logo.png` - логотип
- `aerial-arts.jpg` - фото для Aerial Arts
- `photoshoot.jpg` - фото для Photoshoots

## Проблемы?

Если изображения не отображаются:
1. Проверьте, что файлы находятся в правильной папке (`/public/images/`)
2. Проверьте, что имена файлов точно совпадают (включая расширения)
3. Перезапустите dev-сервер
4. Очистите кеш браузера (Ctrl+Shift+R или Cmd+Shift+R)

---

После выполнения этих шагов все изображения будут корректно отображаться на сайте! 🎪✨
