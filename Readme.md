Книга контактов - React приложение
Простое приложение для управления контактами с возможностью добавления, редактирования, удаления и поиска.
Функционал

✅ Добавление контактов (имя и телефон)
✅ Просмотр списка контактов
✅ Редактирование контактов
✅ Удаление контактов
✅ Поиск по контактам
✅ Сохранение в localStorage
<img width="822" height="745" alt="image" src="https://github.com/user-attachments/assets/3fd62a1d-7f57-4323-8001-1195bba78298" />
<img width="1002" height="911" alt="image" src="https://github.com/user-attachments/assets/d49c4d6e-1b3f-47b5-a5a0-06d7e4a54222" />
<img width="826" height="251" alt="image" src="https://github.com/user-attachments/assets/4f36a3e9-62f8-45b7-b468-5efd2f13f8e1" />

Быстрый запуск
Просто открой index-simple.html в браузере - всё работает!
Использование

Добавить контакт: заполни имя и телефон, нажми "Добавить"
Найти контакт: введи имя или номер в поле поиска
Изменить контакт: нажми "Изменить", измени данные, нажми "Сохранить"
Удалить контакт: нажми "Удалить", подтверди удаление

Технологии

React (useState, useEffect)
localStorage для хранения данных
CSS для стилей

Структура кода
javascript// Состояния
const [contacts, setContacts] = useState([]);     // список контактов
const [name, setName] = useState('');             // имя для формы
const [phone, setPhone] = useState('');           // телефон для формы
const [searchQuery, setSearchQuery] = useState(''); // поисковый запрос
const [editId, setEditId] = useState(null);       // ID редактируемого контакта

// Эффекты
useEffect(() => { /* загрузка из localStorage */ }, []);
useEffect(() => { /* сохранение в localStorage */ }, [contacts]);

// Обработчики
handleSubmit()  - добавление/обновление контакта
handleEdit()    - начало редактирования
handleDelete()  - удаление контакта
handleCancel()  - отмена редактирования
Требования к проекту
Требование
Выполнено
Список контактов✅Добавление (имя + телефон)✅Работа с компонентами✅Управление состоянием (useState)✅Обработка событий✅Хранение данных (localStorage)✅Архитектура приложения✅
Автор
Елисеев Юрий ЭФБО-17-24
Дата сдачи
30 ноября 2025
