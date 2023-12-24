import axios from 'axios';
import { useEffect, useState } from 'react';

function News() {
  const [news, setNews] = useState([]);
  const [searchId, setSearchId] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://176.106.132.3:9090/api/news/');
      setNews(response.data);
      console.log("Ответ с сервера с запросы Новости: " , response.data)
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSearch = () => {
    const result = news.find((item) => item.id === parseInt(searchId));
    setSearchResult(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="mt-5">
      <h1 style={{ textAlign: 'center' }}>Новости</h1>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {news.map((item) => (
          <li
            key={item.id}
            style={{
              boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
              padding: '1rem',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: '2rem',
              width:'80%',
              textAlign: 'center',
              backgroundColor: '#E2E6EC'
            }}
          >
            <h4>{item.title}</h4>
            <p>{new Date(item.dateTime).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default News;
