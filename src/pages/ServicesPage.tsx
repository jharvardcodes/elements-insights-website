import React from 'react';
import {
  Box as MuiBox,
  Container,
  Typography,
  Grid,
  Card,
  Button,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface Service {
  id: number;
  title: string;
  description: string;
  isActive: boolean;
}

const ServicesPage: React.FC = () => {
  const navigate = useNavigate();
  const [services] = React.useState<Service[]>([
    {
      id: 1,
      title: 'Tax Abatements',
      description: 'Filing assistance with OPA, navigating any potential tax or city burdens to comply the application, upon approval of application, and completion of permit, to submit final paperwork to finalize abatement',
      isActive: true,
    },
    {
      id: 2,
      title: 'Permits & Licensing',
      description: 'EZ Permit processing (for licensed contractors), documentation review, business compliance & insurance review and verification, license renewal services, compliance monitoring, and obtaining rental licenses, general contractor licenses and rental licenses',
      isActive: true,
    },
    {
      id: 3,
      title: 'Office Management',
      description: 'Monitoring emails and scheduling, organizing, task management, lease review, diversion and eviction assistance, customer relationship management (includes social media), invoicing and proposal management, light bookkeeping (receipts, bank transactions), ongoing support, assistance with insurance & mortgage resourcing',
      isActive: true,
    },
  ]);

  return (
    <MuiBox>
      {/* Hero Section */}
      <MuiBox
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            component="h1"
            variant="h2"
            color="text.primary"
            gutterBottom
          >
            Our Services
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            component="p"
            sx={{ mb: 4 }}
          >
            Professional real estate support services tailored to your needs
          </Typography>
        </Container>
      </MuiBox>

      {/* Services Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Grid container spacing={4}>
          {services.map((service) => (
            <Grid item key={service.id} xs={12} md={6}>
              <Card
                component={motion.div}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  p: 3,
                }}
              >
                <Typography
                  variant="h4"
                  component="h2"
                  color="primary"
                  sx={{ mb: 2 }}
                >
                  {service.title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  sx={{ mb: 3, whiteSpace: 'pre-wrap' }}
                >
                  {service.description}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => navigate('/consultation')}
                  sx={{ 
                    mt: 'auto',
                    '&:hover': {
                      backgroundColor: 'primary.light',
                    },
                  }}
                >
                  Get Started
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </MuiBox>
  );
};

export default ServicesPage;
