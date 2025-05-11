import React from 'react';
import { Typography, Container, Box } from '@mui/material';

export const ModeratorPage = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h3" gutterBottom>
        Panel de Moderación
      </Typography>
      <Box sx={{ p: 3, border: '1px solid #ddd', borderRadius: 2 }}>
        <Typography variant="body1">
          Esta área es para usuarios con rol de moderador.
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Desde aquí puedes moderar contenido y revisar reportes.
        </Typography>
      </Box>
    </Container>
  );
};

export default ModeratorPage;