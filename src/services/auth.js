import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const API_URL = 'https://backend07.onrender.com/api/auth';

axios.defaults.withCredentials = true;

export const getCurrentUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

export const getRoles = () => {
    const user = getCurrentUser();
    if (!user) return [];
    
    if (user.roles && user.roles.length > 0) {
      return user.roles;
    }
    
    if (user.accessToken) {
      try {
        const decoded = jwtDecode(user.accessToken);
        return decoded.roles || [];
      } catch (error) {
        console.error("Error decoding token:", error);
        return [];
      }
    }
    
    return [];
};

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/signin`, { username, password });
    localStorage.setItem('user', JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    console.error("Login error:", error.response?.data);
    throw new Error(error.response?.data?.message || 'Error al iniciar sesión');
  }
};

export const logout = () => {
  localStorage.removeItem('user');
};

export const register = async (username, email, password) => {
    try {
        const response = await axios.post(`${API_URL}/signup`, {
            username,
            email,
            password
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        return response.data;
    } catch (error) {
        console.error("Registration error details:", {
            status: error.response?.status,
            data: error.response?.data,
            message: error.message
        });
        
        throw new Error(
            error.response?.data?.message || 
            'Error al registrar. Por favor intente nuevamente.'
        );
    }
};