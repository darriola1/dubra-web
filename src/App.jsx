import './styles.css';
import './tailwind.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import RegisterPage from './components/pages/RegisterPage';
import LoginPage from './components/pages/LoginPage';
import DashboardPage from './components/pages/DashboardPage';
import Header from './components/Header';
import Footer from './components/Footer';
import PrivateRoute from './components/auth/route-context/PrivateRoute';
import PublicRoute from './components/auth/route-context/PublicRoute';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/login" element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        } />

        <Route path="/registrarse" element={
          <PublicRoute>
            <RegisterPage />
          </PublicRoute>
        } />

        <Route path="/dashboard" element={
          <PrivateRoute>
            <DashboardPage />
          </PrivateRoute>
        } />
      </Routes>
      <Footer />
    </>
  );
}

export default App;