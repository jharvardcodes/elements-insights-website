import React, { useEffect } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Card, 
  CardContent,
  useTheme,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button
} from '@mui/material';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

interface ServiceDetail {
  title: string;
  icon: React.ReactElement;
  description: string;
  benefits: string[];
  features: string[];
}

const services: ServiceDetail[] = [
  {
    title: "Tax Abatements",
    icon: <AccountBalanceIcon sx={{ fontSize: 40 }} />,
    description: "Comprehensive tax abatement services to help reduce your property tax burden and maximize savings through expert guidance and strategic planning.",
    benefits: [
      "Significant reduction in property tax expenses",
      "Professional handling of complex documentation",
      "Expert representation in tax proceedings",
      "Maximized savings potential",
      "Stress-free application process"
    ],
    features: [
      "OPA filing assistance",
      "Tax & city burden navigation",
      "Application compliance support",
      "Permit completion processing",
      "Final paperwork submission",
      "Appeals management",
      "Deadline tracking",
      "Documentation review"
    ]
  },
  {
    title: "Permits & Licensing",
    icon: <BusinessCenterIcon sx={{ fontSize: 40 }} />,
    description: "Streamlined permit and licensing services to ensure your business operates legally and efficiently while maintaining compliance with local regulations.",
    benefits: [
      "Faster permit approvals",
      "Reduced administrative burden",
      "Ensured compliance with regulations",
      "Prevention of costly delays",
      "Professional documentation handling"
    ],
    features: [
      "EZ Permit processing",
      "Documentation review",
      "Business compliance & insurance",
      "License renewal services",
      "Rental & contractor licensing",
      "Permit tracking",
      "Compliance monitoring",
      "Renewal reminders"
    ]
  },
  {
    title: "Office Management",
    icon: <ManageAccountsIcon sx={{ fontSize: 40 }} />,
    description: "Comprehensive office management solutions to streamline your operations and enhance productivity through efficient administrative support.",
    benefits: [
      "Improved operational efficiency",
      "Reduced administrative costs",
      "Enhanced organization",
      "Better time management",
      "Streamlined processes"
    ],
    features: [
      "Email & schedule monitoring",
      "Task & lease management",
      "Customer relationship management",
      "Invoice & proposal handling",
      "Insurance & mortgage support",
      "Document organization",
      "Meeting coordination",
      "Vendor management"
    ]
  }
];

const ServicesPage: React.FC = () => {
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Handle anchor link scrolling
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography 
          variant="h2" 
          align="center" 
          gutterBottom
          sx={{ 
            fontWeight: 800,
            background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 2,
          }}
        >
          Our Services
        </Typography>
        <Typography 
          variant="h5" 
          align="center" 
          color="text.secondary"
          sx={{ 
            mb: 8,
            maxWidth: '800px',
            mx: 'auto',
            px: 2
          }}
        >
          Comprehensive business solutions tailored to your needs
        </Typography>
      </motion.div>

      <Grid container spacing={6}>
        {services.map((service, index) => (
          <Grid item xs={12} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card
                id={service.title.toLowerCase().replace(/\s+/g, '-')}
                sx={{
                  background: `linear-gradient(135deg, 
                    ${theme.palette.background.paper} 0%,
                    ${theme.palette.background.paper}95 100%)`,
                  backdropFilter: 'blur(10px)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: `0 8px 32px -8px ${theme.palette.primary.main}20`,
                  scrollMarginTop: '100px',
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 2,
                          mb: 3
                        }}
                      >
                        <Box
                          sx={{
                            width: 60,
                            height: 60,
                            borderRadius: '16px',
                            bgcolor: theme.palette.primary.main,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            boxShadow: `0 4px 20px -8px ${theme.palette.primary.main}60`,
                          }}
                        >
                          {service.icon}
                        </Box>
                        <Typography
                          variant="h4"
                          sx={{
                            fontWeight: 700,
                            color: theme.palette.primary.main
                          }}
                        >
                          {service.title}
                        </Typography>
                      </Box>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ mb: 3 }}
                      >
                        {service.description}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Typography
                        variant="h6"
                        sx={{ 
                          mb: 2,
                          fontWeight: 600,
                          color: theme.palette.primary.main
                        }}
                      >
                        Key Benefits
                      </Typography>
                      <List>
                        {service.benefits.map((benefit, i) => (
                          <ListItem key={i} sx={{ py: 0.5 }}>
                            <ListItemIcon sx={{ minWidth: 36 }}>
                              <CheckCircleOutlineIcon 
                                color="primary"
                                sx={{ fontSize: 20 }}
                              />
                            </ListItemIcon>
                            <ListItemText 
                              primary={benefit}
                              primaryTypographyProps={{
                                variant: 'body2',
                                color: 'text.secondary'
                              }}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Typography
                        variant="h6"
                        sx={{ 
                          mb: 2,
                          fontWeight: 600,
                          color: theme.palette.primary.main
                        }}
                      >
                        Features
                      </Typography>
                      <List>
                        {service.features.map((feature, i) => (
                          <ListItem key={i} sx={{ py: 0.5 }}>
                            <ListItemIcon sx={{ minWidth: 36 }}>
                              <CheckCircleOutlineIcon 
                                color="primary"
                                sx={{ fontSize: 20 }}
                              />
                            </ListItemIcon>
                            <ListItemText 
                              primary={feature}
                              primaryTypographyProps={{
                                variant: 'body2',
                                color: 'text.secondary'
                              }}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </Grid>
                  </Grid>
                  <Box 
                    sx={{ 
                      mt: 4, 
                      display: 'flex', 
                      justifyContent: 'center' 
                    }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        variant="contained"
                        size="large"
                        onClick={() => navigate('/consultation', { state: { service: service.title } })}
                        sx={{
                          borderRadius: '50px',
                          px: 6,
                          py: 1.5,
                          fontSize: '1.1rem',
                          fontWeight: 600,
                          textTransform: 'none',
                          background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                          boxShadow: `0 8px 20px -8px ${theme.palette.primary.main}40`,
                          '&:hover': {
                            background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
                          }
                        }}
                      >
                        Book Consultation
                      </Button>
                    </motion.div>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ServicesPage;
