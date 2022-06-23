import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Page/Home';
import Countries from './Components/Page/Countries';
import Menu from './Components/Menu';
import { CountryData } from './CountryData';
import { AiOutlineMenu, AiFillHome } from 'react-icons/ai';
import { VscChromeClose } from 'react-icons/vsc';
import { FaListUl } from 'react-icons/fa'
import './App.css';


function App() {
  const [data, setData] = useState(CountryData)
  const [menu, setMenu] = useState(false);
  const handleClickMenu = () => {
    setMenu(!menu)
  }
  const handleDelete = (code) => {
    let newData = data.filter((item) => item.code !== code);
    setData(newData);
  }

  return (
    <div className="App">
      <header className='header'>
        <div className='logoHeader' onClick={handleClickMenu}>
          {menu && <AiOutlineMenu className='menu-icon' />}
          {!menu && <VscChromeClose className='menu-icon' />}
        </div>
      </header>
      <div className='flex'>
        <div className={menu ? 'hide' : 'menuRight'}>
          <Link to="/">
            <Menu name="Home" icon={<AiFillHome />} />
          </Link>
          <Link to="/countries">
            <Menu name="Countries" icon={<FaListUl />} />
          </Link>
        </div>
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/countries' element={<Countries data={data} setData={setData} handleDelete={handleDelete} />} />
          </Routes>
        </div>
      </div>

    </div>
  );
}

export default App;
