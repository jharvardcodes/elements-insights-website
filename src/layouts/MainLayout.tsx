import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Navigation from '../components/Navigation';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh',
        overflow: 'hidden' // Prevent horizontal scroll on mobile
      }}
    >
      <Navigation />
      <Box 
        component="main" 
        sx={{ 
          flexGrow: 1,
          width: '100%',
          px: { xs: 2, sm: 3 }, // Responsive padding
          py: { xs: 3, sm: 4 }, // Responsive padding
          overflowX: 'hidden' // Prevent horizontal scroll on mobile
        }}
      >
        {children}
      </Box>
      <Box
        component="footer"
        sx={{
          py: { xs: 2, sm: 3 },
          px: { xs: 2, sm: 3 },
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="lg">
          <Box 
            sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              gap: { xs: 1, sm: 2 }
            }}
          >
            <Typography 
              variant="body2" 
              color="text.secondary" 
              align="center"
              sx={{ fontSize: { xs: '0.8rem', sm: '0.875rem' } }}
            >
              {new Date().getFullYear()} Element's Insights LLC. All rights reserved.
            </Typography>
            <Typography 
              variant="body2" 
              color="text.secondary" 
              align="center"
              sx={{ fontSize: { xs: '0.8rem', sm: '0.875rem' } }}
            >
              Developed with <Box component="span" sx={{ color: '#e91e63' }} aria-label="love">❤️</Box> by{' '}
              <Box
                component="a"
                href="https://intelleadgen.webflow.io/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'primary.main',
                  textDecoration: 'none',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                  '&:focus': {
                    outline: '2px solid',
                    outlineOffset: 2,
                  },
                }}
              >
                IntelLeadGen Studio
              </Box>
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default MainLayout;
