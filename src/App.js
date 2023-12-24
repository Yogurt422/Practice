import './App.css';
import Login from './Pages/Login';
import { useEffect } from 'react';
import {Routes, Route} from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import InfoCenter from './Pages/InfoCenter';
import Image from 'react-bootstrap/Image';
import News from './Pages/News';
import Notifications from './Pages/Notifications';
import FAQ from './Pages/FAQ';
import Voting from './Pages/Voting';
import Main from './Pages/Main';

function App() {
  
  const [showInfoCenterLink, setShowInfoCenterLink] = useState(false);
  const [name, setName] = useState("")
  const handleSuccessfulLogin = (name) => {
    setShowInfoCenterLink(true);
    localStorage.setItem('name', name); 
    setName(name); 
  };

  useEffect(() => {
    const storedName = localStorage.getItem('name');
    if (storedName) {
      setName(storedName);
    }
  }, []);
  const handleLogout = () => {
    setName("");
    localStorage.removeItem('name');
  };

  return (
    <div className='App'  >
      <Navbar expand="lg" style={{ backgroundColor: '#0563B4', position: 'relative' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginLeft: '5%'  }}>
        <Image style={{ width: '50px' }} src="https://www.atomexp.ru/source/pic/logo-white.svg" />
        <h2 style={{ marginLeft: '10px', color:'white' }}>{name}</h2>
        
      </div>
      <a href="/Main" style={{color:"white", textDecoration:'none', marginLeft:'31.5%'}}><h4>Главная страница </h4></a>
      </Navbar>
      <Routes>
        <Route index element={<Login onShowPage={handleSuccessfulLogin}></Login>} />
        <Route path='/Main' element={<Main  />} />
        <Route path='/InfoCenter' element={<InfoCenter  />} />
        <Route path='/News'         element={<News></News>} />
        <Route path='/Notifications' element={<Notifications></Notifications>} />
        <Route path='/FAQ' element={<FAQ></FAQ>} />
        <Route path='/Voting' element={<Voting></Voting>} />
      </Routes>
    </div>
  );
}
export default App;
