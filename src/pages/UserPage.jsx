import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const UserPage = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [navigate, user]); // Añadí las dependencias aquí

  return <h1>Contenido para usuarios autenticados</h1>;
};

export default UserPage;