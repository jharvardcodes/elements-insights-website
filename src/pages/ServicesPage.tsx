import React from 'react';
import {
  Box as MuiBox,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';

const ServicesPage: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const services = [
    {
      title: 'Tax Abatements',
      description: 'Reduce your property tax burden through expert abatement services.',
      features: [
        'Property value assessment review',
        'Documentation preparation',
        'Filing assistance',
        'Appeal representation',
        'Post-decision support',
      ],
      price: 'Starting at $500',
    },
    {
      title: 'Permit Services',
      description: 'Streamline your permit acquisition process with our comprehensive services.',
      features: [
        'EZ permit processing',
        'Complex permit applications',
        'Documentation review',
        'Compliance verification',
        'Expedited processing available',
      ],
      price: 'Starting at $300',
    },
    {
      title: 'Rental Licensing',
      description: 'Ensure your rental properties are fully compliant with local regulations.',
      features: [
        'License application assistance',
        'Property inspection preparation',
        'Documentation management',
        'Renewal services',
        'Compliance monitoring',
      ],
      price: 'Starting at $400',
    },
    {
      title: 'Legal Support',
      description: 'Professional legal assistance for your real estate needs.',
      features: [
        'Lease review and drafting',
        'Contract evaluation',
        'Legal documentation',
        'Court representation',
        'Legal consultation',
      ],
      price: 'Starting at $200/hour',
    },
  ];

  return (
    <MuiBox>
      {/* Hero Section */}
      <MuiBox
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        sx={{
          bgcolor: 'primary.main',
          color: 'primary.contrastText',
          py: 8,
          mb: 6,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            gutterBottom
            sx={{ fontWeight: 700 }}
          >
            Our Services
          </Typography>
          <Typography
            variant="h5"
            align="center"
            paragraph
            sx={{ maxWidth: '800px', mx: 'auto', mb: 4 }}
          >
            Comprehensive real estate support services designed to streamline your property management
            experience and maximize your investment potential.
          </Typography>
        </Container>
      </MuiBox>

      {/* Services Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item key={service.title} xs={12} md={6}>
              <Card
                component={motion.div}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    boxShadow: theme.shadows[10],
                    transform: 'translateY(-4px)',
                    transition: 'all 0.3s ease-in-out',
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
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
                    sx={{ mb: 3 }}
                  >
                    {service.description}
                  </Typography>
                  <List>
                    {service.features.map((feature) => (
                      <ListItem key={feature} sx={{ py: 1 }}>
                        <ListItemIcon>
                          <FaCheck color={theme.palette.primary.main} />
                        </ListItemIcon>
                        <ListItemText primary={feature} />
                      </ListItem>
                    ))}
                  </List>
                  <Divider sx={{ my: 2 }} />
                  <Typography
                    variant="h6"
                    color="primary"
                    sx={{ mb: 2 }}
                  >
                    {service.price}
                  </Typography>
                  <Button
                    variant="contained"
                    size="large"
                    fullWidth
                    onClick={() => navigate('/consultation')}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Call to Action Section */}
      <MuiBox
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        sx={{
          bgcolor: 'secondary.main',
          color: 'secondary.contrastText',
          py: 8,
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" align="center" gutterBottom>
            Ready to Transform Your Real Estate Experience?
          </Typography>
          <Typography variant="h6" align="center" paragraph sx={{ mb: 4 }}>
            Schedule a consultation with our experts and discover how we can help you achieve your real estate goals.
          </Typography>
          <MuiBox sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => navigate('/consultation')}
            >
              Book a Consultation
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              size="large"
              onClick={() => navigate('/contact')}
            >
              Contact Us
            </Button>
          </MuiBox>
        </Container>
      </MuiBox>
    </MuiBox>
  );
};

export default ServicesPage;
