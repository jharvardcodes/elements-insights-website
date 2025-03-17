import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import CandleManager from '../../components/admin/CandleManager';
import { useAdmin } from '../../contexts/AdminContext';
import { Navigate } from 'react-router-dom';

const ManageCandlesPage: React.FC = () => {
  const { user } = useAdmin();

  if (!user) {
    return <Navigate to="/admin/login" replace />;
  }

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Manage Candles
        </Typography>
        <CandleManager />
      </Box>
    </Container>
  );
};

export default ManageCandlesPage;
