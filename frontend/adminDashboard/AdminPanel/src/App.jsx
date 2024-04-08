import { useState } from 'react'
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'
import { BrowserRouter,Routes,Route,} from 'react-router-dom'
import Add from './pages/add_users'
import View from './pages/view_users'
import Profile from './pages/profile'
import Update from './pages/update_users'

function App() {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false); // Clearer variable name

  const toggleSidebar = () => {
    setIsOpenSidebar(!isOpenSidebar);
  };
  return (
    <BrowserRouter>
      <div className='grid-container'>
      
        <Header toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={isOpenSidebar} toggleSidebar={toggleSidebar} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/view" element={<View />} />
          <Route path="/update" element={<Update />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      
        
    
      </div>
    </BrowserRouter>
  )
}

export default App