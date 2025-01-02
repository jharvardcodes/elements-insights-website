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
      value: '200+',
      label: 'Units Managed',
    },
    {
      icon: <FaHandshake size="2em" />,
      value: '10+',
      label: 'Years Experience',
    },
    {
      icon: <FaChartLine size="2em" />,
      value: '100%',
      label: 'Client Focus',
    },
    {
      icon: <FaUsers size="2em" />,
      value: '24/7',
      label: 'Support',
    },
  ];

  const leadership = {
    name: 'Crystal Element',
    role: 'Solutions Architect | Entrepreneur | Advocate for Efficiency & Growth',
    image: '/images/headshots/crystal-element-headshots.jpg',
    bio: 'Crystal Element is a seasoned business operations leader with over a decade of management experience, excelling in driving organizational success through strategic planning, financial oversight, and team leadership. With a proven record of optimizing operations and delivering measurable results, she embodies the qualities of a dynamic and solution-focused professional.',
    professionalJourney: `Crystal's career spans a diverse range of leadership roles where she has honed her expertise in property management, financial compliance, business development, and operational efficiency. As the current Founder & CEO of Element's Insights LLC, she collaborates with business and property owners, streamlining processes to enhance their success in business development and tenant-landlord relations. Her efforts in training, compliance, and process improvement empower her clients to achieve sustainable growth.

In her previous role, Crystal managed a team and oversaw a portfolio of 200+ rental and renovation units. Her initiatives, such as transitioning to electronic payments, resourcing insurance and mortgages for cost savings and implementing fire safety protocols, have significantly improved operational efficiency and reduced costs.

Crystal had also served as Property Manager, where she led efforts to minimize tenant delinquencies, refine lease agreements, and develop employee training programs. Earlier in her career, she applied her skills to continuous improvement roles, inventory management, and entrepreneurial ventures, such as Chasin' Business LLC, which provided business support services.`,
    keySkills: [
      'Business Operations & Development',
      'Financial Management & Tax Compliance',
      'Vendor & Client Relationship Management',
      'Staff Development & Leadership',
      'Property Management & Compliance',
      'QuickBooks, Appfolio, Microsoft Office Suite'
    ],
    education: 'Bachelor\'s degree in Business Administration with a Management Concentration from the University of Missouri.',
    personal: 'A true multitasker, Crystal is also a notary, candlemaker, and advocate for animal welfare. She has fostered and rescued dogs, demonstrating her compassion and dedication beyond her professional pursuits. A lover of travel, history, and beach towns, Crystal\'s personal interests reflect her dynamic personality and love for adventure.'
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
            About Element's Insights
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
            Your trusted partner in business operations and development, providing expert guidance
            and innovative solutions for sustainable growth.
          </Typography>
        </Container>
      </MuiBox>

      {/* About Crystal Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Grid container spacing={6} alignItems="flex-start">
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Avatar
                src={leadership.image}
                alt={leadership.name}
                sx={{
                  width: '300px',
                  height: '300px',
                  mx: 'auto',
                  display: 'block',
                  mb: 3,
                  boxShadow: theme.shadows[3],
                  border: `4px solid ${theme.palette.primary.main}`,
                  borderRadius: '50%',
                }}
              />
              <Typography variant="h4" gutterBottom color="primary">
                {leadership.name}
              </Typography>
              <Typography variant="subtitle1" gutterBottom color="text.secondary" sx={{ mb: 3 }}>
                {leadership.role}
              </Typography>
              <Typography variant="body1" paragraph>
                {leadership.bio}
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={8}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography variant="h5" gutterBottom color="primary" sx={{ mb: 3 }}>
                Professional Journey
              </Typography>
              <Typography variant="body1" paragraph sx={{ whiteSpace: 'pre-line' }}>
                {leadership.professionalJourney}
              </Typography>
              
              <Typography variant="h5" gutterBottom color="primary" sx={{ mt: 4, mb: 2 }}>
                Key Skills
              </Typography>
              <Grid container spacing={2} sx={{ mb: 4 }}>
                {leadership.keySkills.map((skill, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Typography variant="body1">• {skill}</Typography>
                  </Grid>
                ))}
              </Grid>

              <Typography variant="h5" gutterBottom color="primary" sx={{ mb: 2 }}>
                Education
              </Typography>
              <Typography variant="body1" paragraph>
                {leadership.education}
              </Typography>

              <Typography variant="h5" gutterBottom color="primary" sx={{ mb: 2 }}>
                Beyond the Office
              </Typography>
              <Typography variant="body1" paragraph>
                {leadership.personal}
              </Typography>
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
    </MuiBox>
  );
};

export default AboutPage;
