import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Button } from '@mui/material';
import { jwtDecode } from 'jwt-decode';

export const AdminPage = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  React.useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    const decoded = jwtDecode(user.accessToken);
    if (!decoded.roles?.includes('admin')) {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Panel de Administración
      </Typography>
      <Typography paragraph>
        Bienvenido al área restringida para administradores.
      </Typography>
      <Button 
        variant="contained" 
        color="primary"
        onClick={() => navigate('/admin/users')}
      >
        Gestionar Usuarios
      </Button>
    </Container>
  );
};

export default AdminPage;