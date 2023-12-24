import React, { useState, useEffect } from 'react';
import GetDataReport from "../components/GetDataReport";
import { useLocation } from 'react-router-dom';
import './InfoCenter.css'

function InfoCenter(){
  const location = useLocation();
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [selectedDate, setSelectedDate] = useState('');

  useEffect(() => {
      const storedToken = localStorage.getItem('token');
      if (storedToken) {
          setToken(storedToken);
      }

      if (location.state && location.state.selectedDate) {
          setSelectedDate(location.state.selectedDate);
      }
  }, [location.state]);

  const handleDateChange = (event) => {
      setSelectedDate(event.target.value);
  };
    return (
        <div className='ms-5 mt-3'>
          <div className='d-flex'>
            <h3>Дата: </h3>
            <input
              className='ms-2'
              type="month"
              value={selectedDate}
              onChange={handleDateChange}
            />
          </div>
          <GetDataReport token={token} datePeriod={selectedDate} />
        </div>
    );
}
export default InfoCenter;
