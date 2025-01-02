import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Navigation from '../components/Navigation';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navigation />
      <Box component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Box>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Typography variant="body2" color="text.secondary" align="center">
              {new Date().getFullYear()} Element's Insights LLC. All rights reserved.
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              Developed with <Box component="span" sx={{ color: '#e91e63' }}>❤️</Box> by{' '}
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
