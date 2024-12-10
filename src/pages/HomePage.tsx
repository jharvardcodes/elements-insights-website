import React from 'react';
import { Box as MuiBox, Container, Typography, Button, Grid, Card as MuiCard, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: 'Tax Abatements',
      description: 'Expert assistance with filing tax abatements for your property investments.',
    },
    {
      title: 'Permit Services',
      description: 'Comprehensive permit acquisition services, from EZ permits to complex documentation.',
    },
    {
      title: 'Rental Licensing',
      description: 'Streamlined rental license assistance for property managers and landlords.',
    },
    {
      title: 'Legal Support',
      description: 'Professional support for lease evaluations and court processes.',
    },
  ];

  return (
    <MuiBox>
      {/* Hero Section */}
      <MuiBox
        sx={{
          bgcolor: 'background.paper',
          pt: 12,
          pb: 8,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <MuiBox
                component={motion.div}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Typography
                  component="h1"
                  variant="h2"
                  color="primary"
                  gutterBottom
                  sx={{ fontWeight: 700 }}
                >
                  Expert Real Estate Support Services
                </Typography>
                <Typography variant="h5" color="text.secondary" paragraph>
                  Navigating real estate complexities with professional guidance and reliable solutions.
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => navigate('/consultation')}
                  sx={{ mt: 2 }}
                >
                  Book a Consultation
                </Button>
              </MuiBox>
            </Grid>
            <Grid item xs={12} md={6}>
              {/* Add hero image here */}
            </Grid>
          </Grid>
        </Container>
      </MuiBox>

      {/* Services Section */}
      <Container sx={{ py: 8 }} maxWidth="lg">
        <Typography
          component="h2"
          variant="h3"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Our Services
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {services.map((service, index) => (
            <Grid item key={service.title} xs={12} sm={6} md={3}>
              <MuiCard
                component={motion.div}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                sx={{ height: '100%' }}
              >
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h3">
                    {service.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </MuiCard>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Call to Action */}
      <MuiBox sx={{ bgcolor: 'primary.main', color: 'white', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" align="center" gutterBottom>
            Ready to Get Started?
          </Typography>
          <Typography variant="subtitle1" align="center" paragraph>
            Let us help you navigate the complexities of real estate management.
          </Typography>
          <MuiBox sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Button
              variant="outlined"
              color="inherit"
              size="large"
              onClick={() => navigate('/contact')}
              sx={{ mx: 1 }}
            >
              Contact Us
            </Button>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              onClick={() => navigate('/services')}
              sx={{ mx: 1 }}
            >
              View Services
            </Button>
          </MuiBox>
        </Container>
      </MuiBox>
    </MuiBox>
  );
};

export default HomePage;
