import './styles.css'
import './tailwind.css'
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './components/pages/HomePage'
import RegisterPage from './components/pages/RegisterPage'
import LoginPage from './components/pages/LoginPage'
import DashboardPage from './components/pages/DashboardPage'
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const location = useLocation();

  const hideFooterRoutes = ["/dashboard"];
  const showFooter = !hideFooterRoutes.includes(location.pathname);

  return (
    <>
      <Header/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registrarse" element={<RegisterPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      {showFooter && <Footer />}
    </>
  )
}

export default App
