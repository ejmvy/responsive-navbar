import { Flex } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/nav/Navbar';
import Calendar from './pages/calendar';
import Dashboard from './pages/dashboard';
import Settings from './pages/settings';
import User from './pages/user';

function App() {
  return (
    <BrowserRouter>
    {/* <Flex> */}
      <Navbar />
      <Routes>
        <Route path='/' element={<Dashboard />} /> 
        <Route path='/calendar' element={<Calendar />} /> 
        <Route path='/user' element={<User />} /> 
        <Route path='/settings' element={<Settings />} /> 
      
      </Routes>
    {/* </Flex> */}
    </BrowserRouter>
  );
}

export default App;
