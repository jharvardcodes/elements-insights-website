import React from 'react';
import {
  Box as MuiBox,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
  Avatar,
} from '@mui/material';
import { motion } from 'framer-motion';
import { FaBuilding, FaHandshake, FaChartLine, FaUsers } from 'react-icons/fa';

const AboutPage = () => {
  const theme = useTheme();

  const stats = [
    {
      icon: <FaBuilding size="2em" />,
      value: '500+',
      label: 'Properties Served',
    },
    {
      icon: <FaHandshake size="2em" />,
      value: '95%',
      label: 'Client Satisfaction',
    },
    {
      icon: <FaChartLine size="2em" />,
      value: '$2M+',
      label: 'Tax Savings',
    },
    {
      icon: <FaUsers size="2em" />,
      value: '1000+',
      label: 'Happy Clients',
    },
  ];

  const leadership = {
    name: 'Crystal Element',
    role: 'Founder & CEO',
    image: '/images/team/crystal.jpg',
    bio: 'Experienced leader in real estate management and property tax consulting, dedicated to delivering exceptional value to clients in the Philadelphia area.',
  };

  const values = [
    {
      title: 'Integrity',
      description: 'We maintain the highest standards of professional ethics and transparency in all our dealings.',
    },
    {
      title: 'Excellence',
      description: 'We strive for excellence in every service we provide, ensuring the best outcomes for our clients.',
    },
    {
      title: 'Innovation',
      description: 'We continuously adapt and improve our processes to better serve our clients\' needs.',
    },
    {
      title: 'Client-Centric',
      description: 'Our clients\' success is our primary focus, driving every decision we make.',
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
          background: theme.palette.background.gradient,
          color: 'white',
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
            sx={{ 
              fontWeight: 700,
              textShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            About Elements Insights
          </Typography>
          <Typography
            variant="h5"
            align="center"
            paragraph
            sx={{ 
              maxWidth: '800px', 
              mx: 'auto', 
              mb: 4,
              textShadow: '0 1px 2px rgba(0,0,0,0.1)'
            }}
          >
            Your trusted partner in Philadelphia real estate management, providing expert guidance
            and solutions since 2015.
          </Typography>
        </Container>
      </MuiBox>

      {/* Mission Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography variant="h3" gutterBottom color="primary">
                Our Mission
              </Typography>
              <Typography variant="body1" paragraph>
                At Elements Insights, we're dedicated to simplifying the complexities of real estate
                management for property owners in Philadelphia. Our mission is to provide expert
                guidance and innovative solutions that help our clients maximize their property
                investments while ensuring full compliance with local regulations.
              </Typography>
              <Typography variant="body1">
                We combine deep local knowledge with cutting-edge technology to deliver exceptional
                results, whether you're seeking tax abatements, permit assistance, or comprehensive
                property management solutions.
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="/images/about/office.jpg"
                alt="Elements Insights Office"
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: theme.shape.borderRadius,
                  boxShadow: theme.shadows[3],
                }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Stats Section */}
      <MuiBox sx={{ bgcolor: 'background.paper', py: 8, mb: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {stats.map((stat, index) => (
              <Grid item key={stat.label} xs={6} md={3}>
                <Card
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    bgcolor: 'transparent',
                    boxShadow: 'none',
                  }}
                >
                  <CardContent>
                    <MuiBox sx={{ color: 'primary.main', mb: 2 }}>{stat.icon}</MuiBox>
                    <Typography variant="h3" component="div" gutterBottom>
                      {stat.value}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      {stat.label}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </MuiBox>

      {/* Values Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{ mb: 6 }}
          color="primary"
        >
          Our Values
        </Typography>
        <Grid container spacing={4}>
          {values.map((value, index) => (
            <Grid item key={value.title} xs={12} sm={6} md={3}>
              <Card
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                sx={{ height: '100%' }}
              >
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom color="primary">
                    {value.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {value.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Leadership Section */}
      <Container maxWidth="sm" sx={{ mb: 8, textAlign: 'center' }}>
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{ mb: 6 }}
          color="primary"
        >
          Leadership
        </Typography>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Avatar
            src={leadership.image}
            alt={leadership.name}
            sx={{
              width: 200,
              height: 200,
              mx: 'auto',
              mb: 3,
              boxShadow: theme.shadows[3],
            }}
          />
          <Typography variant="h4" gutterBottom>
            {leadership.name}
          </Typography>
          <Typography variant="subtitle1" color="primary" gutterBottom>
            {leadership.role}
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            {leadership.bio}
          </Typography>
        </motion.div>
      </Container>
    </MuiBox>
  );
};

export default AboutPage;
