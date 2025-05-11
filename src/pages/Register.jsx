import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography, Box, Alert } from '@mui/material';
import { register } from '../services/auth';

const Register = () => {
    const [formData, setFormData] = useState({ 
        username: '', 
        email: '', 
        password: '' 
    });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);
        
        try {
            await register(formData.username, formData.email, formData.password);
            navigate('/login', { 
                state: { 
                    successMessage: 'Registro exitoso! Por favor inicie sesión.' 
                } 
            });
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 8 }}>
            <Typography variant="h4" gutterBottom align="center">
                Registro
            </Typography>
            
            {error && (
                <Alert severity="error" sx={{ mb: 3 }}>
                    {error}
                </Alert>
            )}
            
            <Box component="form" onSubmit={handleSubmit} noValidate>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Nombre de usuario"
                    autoComplete="username"
                    value={formData.username}
                    onChange={(e) => setFormData({...formData, username: e.target.value})}
                />
                
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Email"
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
                
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Contraseña"
                    type="password"
                    autoComplete="new-password"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
                
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    disabled={isLoading}
                >
                    {isLoading ? 'Registrando...' : 'Registrarse'}
                </Button>
            </Box>
        </Container>
    );
};

export default Register;