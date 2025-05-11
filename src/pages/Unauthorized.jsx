import React from 'react';
import { Typography, Container, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Unauthorized = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', mt: 8 }}>
      <Typography variant="h4" gutterBottom>
        Acceso no autorizado
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        No tienes permisos para acceder a esta página.
      </Typography>
      <Button 
        variant="contained" 
        onClick={() => navigate('/')}
      >
        Volver al inicio
      </Button>
    </Container>
  );
};

export default Unauthorized;