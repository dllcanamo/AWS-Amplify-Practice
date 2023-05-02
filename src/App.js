import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import LandingPage from './pages/LandingPage';
import ReportsPage from './pages/ReportsPage';
import SurveillancePage from './pages/SurveillancePage';
import UserConfigPage from './pages/UserConfigPage';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/surveillance' element={<SurveillancePage />} />
      <Route path='/reports' element={<ReportsPage />} />
      <Route path='/user-config' element={<UserConfigPage />} />
    </Routes>
  );
}

export default App;
