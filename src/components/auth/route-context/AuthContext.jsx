import React, { createContext, useState, useEffect, useContext } from 'react';
import { API_BASE_URL } from '../../../lib/constants';

// contexto que se usa para compartir la autenticación en toda la app
const AuthContext = createContext();

export function AuthProvider({ children }) {
  // user va a tener la info del usuario logueado (o null si no hay sesión)
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Esta función pregunta al backend si hay un usuario logueado (verifica usando la cookie)
  const checkAuth = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/users/me`, {
        method: 'GET',
        credentials: 'include', // se envian las cookies al backend
      });

      if (res.ok) {
        const data = await res.json();
        setUser(data.user); // Si el backend responde bien, actualizamos el estado con el usuario
      } else {
        setUser(null); // Si no hay sesión activa, dejamos el usuario en null
      }
    } catch (err) {
      // Por si falla la conexión u otra cosa, se podria hacer diferente el manejo de errores
      setUser(null);
    }
  };

  // Chequea si hay sesión activa
  useEffect(() => {
    const initAuth = async () => {
      await checkAuth();
      setLoading(false); // Ya terminó de chequear, se puede renderizar
    };

    initAuth();
  }, []);

  // Esta función se llama después del login exitoso en el backend
  const login = async () => {
    setLoading(true);
    await checkAuth(); // Actualiza el usuario desde el backend
    setLoading(false);
  };

  // Cierra sesión: le avisa al backend que borre la cookie, y limpia el estado local
  const logout = async () => {
    await fetch(`${API_BASE_URL}/auth/logout`, {
      method: 'POST',
      credentials: 'include',
    });
    setUser(null);
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

// Este es el custom hook que se va a usar en cualquier componente para acceder al contexto
export const useAuth = () => useContext(AuthContext);
