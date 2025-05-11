import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Box, Button } from '@mui/material';

const Home = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <Box sx={{ textAlign: 'center', mt: 10 }}>
      <Typography variant="h3" gutterBottom>
        Bienvenido al Sistema de Autenticación
      </Typography>
      
      {!user ? (
        <>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Por favor inicia sesión o regístrate para continuar
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            component={Link} 
            to="/login"
            sx={{ mr: 2 }}
          >
            Login
          </Button>
          <Button 
            variant="outlined" 
            color="primary" 
            component={Link} 
            to="/register"
          >
            Registrarse
          </Button>
        </>
      ) : (
        <>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Hola, {user.username}! Tu rol es: {user.roles?.join(', ')}
          </Typography>
          <Button 
            variant="contained" 
            color="secondary" 
            component={Link} 
            to="/user"
          >
            Ir al Panel de Usuario
          </Button>
        </>
      )}
    </Box>
  );
};

export default Home;