import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [editId, setEditId] = useState(null);

  // Загрузка контактов из localStorage
  useEffect(() => {
    const saved = localStorage.getItem('contacts');
    if (saved) {
      setContacts(JSON.parse(saved));
    }
  }, []);

  // Сохранение контактов в localStorage
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // Добавление контакта
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!name || !phone) {
      alert('Заполните все поля!');
      return;
    }

    if (editId) {
      // Редактирование
      setContacts(contacts.map(c => 
        c.id === editId ? { ...c, name, phone } : c
      ));
      setEditId(null);
    } else {
      // Добавление нового
      const newContact = {
        id: Date.now(),
        name: name,
        phone: phone
      };
      setContacts([...contacts, newContact]);
    }

    setName('');
    setPhone('');
  };

  // Редактирование
  const handleEdit = (contact) => {
    setName(contact.name);
    setPhone(contact.phone);
    setEditId(contact.id);
  };

  // Удаление
  const handleDelete = (id) => {
    if (window.confirm('Удалить контакт?')) {
      setContacts(contacts.filter(c => c.id !== id));
    }
  };

  // Отмена редактирования
  const handleCancel = () => {
    setName('');
    setPhone('');
    setEditId(null);
  };

  // Фильтрация контактов
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.phone.includes(searchQuery)
  );

  return (
    <div className="App">
      <div className="container">
        <h1>Книга контактов</h1>
        
        {/* Форма добавления/редактирования */}
        <div className="form-section">
          <h2>{editId ? 'Редактирование контакта' : 'Добавить контакт'}</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Имя:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Введите имя"
              />
            </div>
            
            <div className="form-group">
              <label>Телефон:</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Введите телефон"
              />
            </div>
            
            <div className="button-group">
              <button type="submit" className="btn-primary">
                {editId ? 'Сохранить' : 'Добавить'}
              </button>
              {editId && (
                <button type="button" onClick={handleCancel} className="btn-secondary">
                  Отмена
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Поиск */}
        <div className="search-section">
          <input
            type="text"
            placeholder="Поиск по имени или телефону..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>

        {/* Список контактов */}
        <div className="contacts-section">
          <h2>Список контактов ({filteredContacts.length})</h2>
          
          {filteredContacts.length === 0 ? (
            <p className="empty-message">
              {contacts.length === 0 ? 'Контактов пока нет' : 'Ничего не найдено'}
            </p>
          ) : (
            <div className="contacts-list">
              {filteredContacts.map(contact => (
                <div key={contact.id} className="contact-card">
                  <div className="contact-info">
                    <h3>{contact.name}</h3>
                    <p>{contact.phone}</p>
                  </div>
                  <div className="contact-actions">
                    <button onClick={() => handleEdit(contact)} className="btn-edit">
                      Изменить
                    </button>
                    <button onClick={() => handleDelete(contact.id)} className="btn-delete">
                      Удалить
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
