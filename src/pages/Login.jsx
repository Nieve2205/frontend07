import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography, Box, Alert } from '@mui/material';
import { login } from '../services/auth';

export const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(formData.username, formData.password);
      navigate('/');
    } catch (err) {
      setError(err.message || 'Error al iniciar sesión');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Typography variant="h4" gutterBottom>Iniciar Sesión</Typography>
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          label="Nombre de usuario"
          value={formData.username}
          onChange={(e) => setFormData({...formData, username: e.target.value})}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          label="Contraseña"
          type="password"
          value={formData.password}
          onChange={(e) => setFormData({...formData, password: e.target.value})}
          required
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Ingresar
        </Button>
      </Box>
    </Container>
  );
};

export default Login;