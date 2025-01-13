import React from 'react';
import { Box } from '@mui/material';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

interface MainLayoutProps {
  children?: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = () => {
  return (
    <Box 
      sx={{ 
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Navigation />
      <Box 
        component="main" 
        sx={{ 
          flexGrow: 1,
          width: '100%',
          overflowX: 'hidden'
        }}
      >
        <Outlet />
      </Box>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: theme => 
            theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
        }}
      >
        <Footer />
      </Box>
    </Box>
  );
};

export default MainLayout;
