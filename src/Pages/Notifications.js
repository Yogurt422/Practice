import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function Notifications() {
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
      fetchNotifications(storedToken);
    }
  }, []);

  const fetchNotifications = async (token) => {
    try {
      const response = await axios.get('http://176.106.132.3:9090/api/notify/', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log('Ответ с сервера:', response.data);
      setNotifications(response.data);
    } catch (error) {
      console.error('Ошибка при загрузке уведомлений:', error);
    }
  };

  return (
    <div>
      <h1 className="text-center mt-5 mb-4">Уведомления</h1>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {notifications.map((item) => (
         <li
          key={item.id}
          style={{
            boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
            padding: '1rem',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: '2rem',
              width:'99%',
              textAlign: 'center',
              backgroundColor: '#E2E6EC'
          }}
        >
            <h3>{item.title}</h3>
            <p>Дата публикации: {new Date(item.dateTime).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notifications;
