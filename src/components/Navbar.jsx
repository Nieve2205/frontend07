import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { getRoles } from '../services/auth';

const Navbar = () => {
  const navigate = useNavigate();
  const roles = getRoles();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          JWT Auth App
        </Typography>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit" component={Link} to="/">
            Inicio
          </Button>

          {user ? (
            <>

              {roles.includes('moderator') && (
                <Button color="inherit" component={Link} to="/moderator">
                  Moderador
                </Button>
              )}

              {roles.includes('admin') && (
                <Button color="inherit" component={Link} to="/admin">
                  Admin
                </Button>
              )}

              <Button color="inherit" onClick={handleLogout}>
                Cerrar Sesión
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>
              <Button color="inherit" component={Link} to="/register">
                Registro
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;