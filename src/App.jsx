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
import AdminDashboard from './components/dashboard/AdminDashboard';
import AdminMapPage from './components/pages/AdminMapPage';
import Dashboard from './components/dashboard/Dashboard';
import AdminPlaceOrderPage from './components/pages/AdminPlaceOrderPage';
import UserPlaceOrderPage from './components/pages/UserPlaceOrderPage'
import AdminAdministrationPanel from './components/pages/AdminAdministrationPanel';
import UserAdministrationPanel from './components/pages/UserAdministrationPanel';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import ProfilePage from './components/pages/ProfilePage';
import NewOrderPage from './components/pages/NewOrderPage';
import AboutUsPage from './components/pages/AboutUsPage';
import ContactUsForm from './components/ContactUsForm';
import { ToastContainer } from 'react-toastify';

function App() {
  const location = useLocation(); 
  const hideFooterPrefixes = ["/user", "/admin"];
  const showFooter = !hideFooterPrefixes.some(prefix => location.pathname.startsWith(prefix));

  return (
    <>
      <AuthProvider>
        <Header/>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/aboutUs" element={<AboutUsPage />} />
            <Route path="/user"
              element={<ProtectedRoute>
              <DashboardPage />
              </ProtectedRoute>}> 
                <Route path='dashboard' element={<Dashboard/>}/>
                <Route path='placeOrder' element={<UserPlaceOrderPage/>}/>
                <Route path='administrationPanel' element={<UserAdministrationPanel/>}/>
                <Route path='profile' element={<ProfilePage/>}/>
                <Route path='newOrder' element={<NewOrderPage/>}/>
                <Route path='contact' element={<ContactUsForm/>}/>
              </Route>
            <Route path='/admin'
              element={<ProtectedRoute>
              <AdminDashboardPage/>
              </ProtectedRoute>}>
                <Route path='dashboard' element={<AdminDashboard/>}/>
                <Route path='administrationPanel' element={<AdminAdministrationPanel/>}/>
                <Route path='placeOrder' element={<AdminPlaceOrderPage/>}/>
                <Route path='map' element={<AdminMapPage/>}/>
            </Route>
          </Routes>
        {showFooter && <Footer />}
      </AuthProvider>
      <ToastContainer/>
    </>
  )
}

export default App