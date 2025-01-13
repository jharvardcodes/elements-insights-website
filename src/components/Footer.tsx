import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';
import { EditableContent } from './EditableContent';
import { useAdmin } from '../contexts/AdminContext';
import { useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
  const { user, signOut } = useAdmin();
  const navigate = useNavigate();

  const handleAdminClick = () => {
    if (user) {
      signOut();
    } else {
      navigate('/admin');
    }
  };

  return (
    <Container maxWidth="lg">
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          gap: { xs: 1, sm: 2 },
          py: 3
        }}
      >
        <EditableContent
          pageName="footer"
          contentKey="copyright"
          defaultValue={`${new Date().getFullYear()} Element's Insights LLC. All rights reserved.`}
          variant="body2"
        />
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography 
            variant="body2" 
            color="text.secondary"
            sx={{ fontSize: { xs: '0.8rem', sm: '0.875rem' } }}
          >
            Developed with <Box component="span" sx={{ color: '#e91e63' }} aria-label="love">❤️</Box> by{' '}
            <Link
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
            </Link>
          </Typography>
          <Box 
            component="span" 
            sx={{ 
              mx: 1, 
              height: '1em', 
              borderLeft: '1px solid', 
              borderColor: 'divider' 
            }} 
          />
          <Link
            component="button"
            onClick={handleAdminClick}
            sx={{
              color: 'text.secondary',
              textDecoration: 'none',
              fontSize: { xs: '0.8rem', sm: '0.875rem' },
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            {user ? 'Sign Out' : 'Admin'}
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default Footer;
