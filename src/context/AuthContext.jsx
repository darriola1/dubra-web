import { createContext, useContext, useEffect, useState } from "react";
import { API_BASE_URL } from "@/lib/constants";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

const verificarAutenticacion = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/auth/me`, {
      credentials: "include",
    });
    if (res.ok) {
      const data = await res.json();
      setUser(data.user);
      return data.user;
    } else {
      setUser(null);
      return null;
    }
  } catch (err) {
    setUser(null);
    return null;
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
    verificarAutenticacion();
  }, []);

  const logout = async () => {
    try{
      const res = await fetch(`${API_BASE_URL}/auth/logout`, {
        method: 'Post',
        credentials: 'include',
    }).then(response => {
        if (response.status == 401){
          Navigate('/login')
        }
        if(!response.ok){
          throw new Error(response.error || 'Error al enviar');
        }
        if (response.status == 200){
          setUser(null)
          toast.success('Sesión cerrada!')
          navigate('/dashboard');
        }
    })
    } catch (err){
      setLoading(false);
    }
  }

  const setUserNull = async () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, loading, logout, verificarAutenticacion, setUserNull }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => useContext(AuthContext);
