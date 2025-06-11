import './styles.css'
import './tailwind.css'
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './components/pages/HomePage'
import RegisterPage from './components/pages/RegisterPage'
import LoginPage from './components/pages/LoginPage'
import DashboardPage from './components/pages/DashboardPage'
import Header from './components/Header';
import Footer from './components/Footer';
import AdminDashboardPage from './components/pages/AdminDashboardPage';
import Dashboard from './components/dashboard/AdminDashboard';
import LeafletMap from './components/map/LeafletMap';
import AdminMapPage from './components/pages/AdminMapPage';
import PlaceOrderPage from './components/pages/PlaceOrderPage';

function App() {
  const location = useLocation(); 
  const hideFooterPrefixes = ["/dashboard", "/admin"];
  const showFooter = !hideFooterPrefixes.some(prefix => location.pathname.startsWith(prefix));

  return (
    <>
      <Header/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registrarse" element={<RegisterPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path='/admin' element={<AdminDashboardPage/>}>
            <Route path='dashboard' element={<Dashboard/>}/>
            <Route path='map' element={<AdminMapPage/>}/>
            <Route path='orderManager' element={<PlaceOrderPage/>}/>
          </Route>
        </Routes>
      {showFooter && <Footer />}
    </>
  )
}

export default App
