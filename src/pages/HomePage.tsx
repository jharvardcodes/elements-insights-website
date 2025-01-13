import React from 'react';
import { 
  Box as MuiBox, 
  Container, 
  Grid, 
  Card as MuiCard, 
  CardContent,
  Typography,
  IconButton,
  Button,
  useTheme
} from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { EditableContent } from '../components/EditableContent';
import { EditableButton } from '../components/EditableButton';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const Box = motion(MuiBox);
  const Card = motion(MuiCard);

  const services = [
    {
      icon: <AccountBalanceIcon sx={{ fontSize: 40 }} />,
      title: "Tax Abatements",
      description: [
        "• OPA filing assistance",
        "• Tax & city burden navigation",
        "• Application compliance support",
        "• Permit completion processing",
        "• Final paperwork submission"
      ]
    },
    {
      icon: <BusinessCenterIcon sx={{ fontSize: 40 }} />,
      title: "Permits & Licensing",
      description: [
        "• EZ Permit processing",
        "• Documentation review",
        "• Business compliance & insurance",
        "• License renewal services",
        "• Rental & contractor licensing"
      ]
    },
    {
      icon: <ManageAccountsIcon sx={{ fontSize: 40 }} />,
      title: "Office Management",
      description: [
        "• Email & schedule monitoring",
        "• Task & lease management",
        "• Customer relationship management",
        "• Invoice & proposal handling",
        "• Insurance & mortgage support"
      ]
    }
  ];

  return (
    <Container maxWidth="lg">
      {/* Hero Section with enhanced styling */}
      <Box
        component="section"
        sx={{
          position: 'relative',
          mt: { xs: 4, sm: 8 },
          mb: { xs: 6, sm: 12 },
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: -100,
            right: -200,
            width: 400,
            height: 400,
            background: `radial-gradient(circle, ${theme.palette.primary.main}20 0%, transparent 70%)`,
            borderRadius: '50%',
            zIndex: -1,
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: -100,
            left: -200,
            width: 300,
            height: 300,
            background: `radial-gradient(circle, ${theme.palette.secondary.main}15 0%, transparent 70%)`,
            borderRadius: '50%',
            zIndex: -1,
          }
        }}
      >
        <Grid 
          container 
          spacing={4} 
          alignItems="center"
          sx={{
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '150%',
              height: '150%',
              background: `linear-gradient(135deg, 
                ${theme.palette.background.paper} 0%,
                ${theme.palette.background.paper}90 50%,
                ${theme.palette.background.paper}50 100%)`,
              zIndex: -1,
              borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
              animation: 'morphing 15s ease-in-out infinite',
            },
            '@keyframes morphing': {
              '0%': {
                borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
              },
              '50%': {
                borderRadius: '70% 30% 30% 70% / 70% 70% 30% 30%',
              },
              '100%': {
                borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
              }
            }
          }}
        >
          <Grid item xs={12} md={6}>
            <Box
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              sx={{
                position: 'relative',
                zIndex: 2,
                p: 4,
                borderRadius: 2,
                background: `linear-gradient(135deg, 
                  ${theme.palette.background.paper}90 0%,
                  ${theme.palette.background.paper}60 100%)`,
                backdropFilter: 'blur(10px)',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <Box
                  sx={{
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    fontWeight: 800,
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    mb: 2,
                    '& .MuiTypography-root': {
                      fontSize: 'inherit',
                      fontWeight: 'inherit',
                      color: 'inherit',
                    }
                  }}
                >
                  <EditableContent
                    pageName="home"
                    contentKey="hero_title"
                    defaultValue="Business Consultant and Expert Business Support Services"
                    variant="h1"
                  />
                </Box>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <Box
                  sx={{
                    color: 'text.secondary',
                    fontSize: { xs: '1.2rem', md: '1.5rem' },
                    lineHeight: 1.4,
                    mb: 4,
                    '& .MuiTypography-root': {
                      fontSize: 'inherit',
                      lineHeight: 'inherit',
                      color: 'inherit',
                    }
                  }}
                >
                  <EditableContent
                    pageName="home"
                    contentKey="hero_subtitle"
                    defaultValue="Navigating business development with professional guidance and reliable solutions."
                    variant="h5"
                  />
                </Box>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <EditableButton
                  pageName="home"
                  contentKey="consultation_button"
                  defaultValue="Schedule a Consultation"
                  variant="contained"
                  size="large"
                  onClick={() => navigate('/consultation')}
                  sx={{
                    py: 2,
                    px: 6,
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    borderRadius: '50px',
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    boxShadow: `0 4px 15px 0 ${theme.palette.primary.main}40`,
                    '&:hover': {
                      background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
                      boxShadow: `0 8px 25px 0 ${theme.palette.primary.main}60`,
                    }
                  }}
                />
              </motion.div>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              sx={{
                position: 'relative',
                height: '100%',
                minHeight: 400,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* Add decorative elements */}
              <Box
                component={motion.div}
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                sx={{
                  position: 'absolute',
                  width: '80%',
                  height: '80%',
                  border: `2px dashed ${theme.palette.primary.main}20`,
                  borderRadius: '50%',
                }}
              />
              <Box
                component={motion.div}
                animate={{
                  rotate: [360, 0],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
                sx={{
                  position: 'absolute',
                  width: '60%',
                  height: '60%',
                  border: `2px dashed ${theme.palette.secondary.main}20`,
                  borderRadius: '50%',
                }}
              />
              {/* You can add an image or illustration here */}
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Services Section */}
      <Box 
        component="section"
        sx={{ 
          mt: { xs: 6, sm: 12 },
          position: 'relative',
          pb: 8,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: -100,
            left: -200,
            width: 400,
            height: 400,
            background: `radial-gradient(circle, ${theme.palette.primary.main}10 0%, transparent 70%)`,
            borderRadius: '50%',
            zIndex: -1,
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: -100,
            right: -200,
            width: 300,
            height: 300,
            background: `radial-gradient(circle, ${theme.palette.secondary.main}10 0%, transparent 70%)`,
            borderRadius: '50%',
            zIndex: -1,
          }
        }}
      >
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
              px: 2,
              fontSize: { xs: '1.1rem', md: '1.3rem' },
              lineHeight: 1.6
            }}
          >
            Comprehensive solutions for your business needs, tailored to drive growth and ensure compliance
          </Typography>
        </motion.div>

        <Grid container spacing={4} sx={{ mb: 4 }}>
          {services.map((service, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    overflow: 'visible',
                    background: `linear-gradient(135deg, 
                      ${theme.palette.background.paper} 0%,
                      ${theme.palette.background.paper}95 100%)`,
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease-in-out',
                    borderRadius: '16px',
                    '&:hover': {
                      boxShadow: `0 8px 32px -8px ${theme.palette.primary.main}40`,
                      '& .service-icon': {
                        transform: 'scale(1.1) translateY(-2px)',
                        boxShadow: `0 8px 20px -8px ${theme.palette.primary.main}80`,
                      },
                      '& .service-title': {
                        background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }
                    }
                  }}
                >
                  <Box
                    className="service-icon"
                    sx={{
                      position: 'absolute',
                      top: -28,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: 70,
                      height: 70,
                      bgcolor: theme.palette.primary.main,
                      borderRadius: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      boxShadow: `0 4px 20px -8px ${theme.palette.primary.main}60`,
                      transition: 'all 0.3s ease-in-out',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        inset: -2,
                        borderRadius: '22px',
                        padding: '2px',
                        background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                        WebkitMask: 
                          'linear-gradient(#fff 0 0) content-box, ' +
                          'linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'xor',
                        maskComposite: 'exclude',
                      }
                    }}
                  >
                    {service.icon}
                  </Box>
                  <CardContent 
                    sx={{ 
                      pt: 6,
                      pb: 3,
                      px: 4,
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%'
                    }}
                  >
                    <Typography 
                      variant="h5" 
                      component="h3" 
                      align="center"
                      className="service-title"
                      gutterBottom
                      sx={{ 
                        mb: 3,
                        fontWeight: 700,
                        transition: 'all 0.3s ease-in-out',
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Box 
                      sx={{ 
                        pl: 2,
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1
                      }}
                    >
                      {service.description.map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.2 + (i * 0.1) }}
                        >
                          <Typography
                            variant="body1"
                            color="text.secondary"
                            sx={{ 
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: 1.5,
                              fontSize: '1rem',
                              lineHeight: 1.6,
                              position: 'relative',
                              pl: 2,
                              '&::before': {
                                content: '""',
                                position: 'absolute',
                                left: 0,
                                top: '0.7em',
                                width: 6,
                                height: 6,
                                bgcolor: theme.palette.primary.main,
                                borderRadius: '50%',
                                opacity: 0.7,
                                transform: 'translateY(-50%)',
                              }
                            }}
                          >
                            {item.replace('• ', '')}
                          </Typography>
                        </motion.div>
                      ))}
                    </Box>
                    <Box
                      sx={{
                        mt: 4,
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                    >
                      <Button
                        variant="outlined"
                        color="primary"
                        size="large"
                        onClick={() => navigate(`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`)}
                        sx={{
                          borderRadius: '50px',
                          px: 4,
                          py: 1,
                          borderWidth: 2,
                          textTransform: 'none',
                          fontSize: '1.05rem',
                          fontWeight: 500,
                          '&:hover': {
                            borderWidth: 2,
                            background: `linear-gradient(135deg, ${theme.palette.primary.main}10, ${theme.palette.secondary.main}10)`,
                            transform: 'translateY(-2px)',
                            transition: 'transform 0.2s ease-in-out',
                          }
                        }}
                      >
                        Learn More
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Call to Action Section */}
      <Box
        sx={{
          mt: { xs: 6, sm: 12 },
          textAlign: 'center',
          py: 8,
          px: 4,
          bgcolor: theme.palette.primary.main + '08',
          borderRadius: 2
        }}
      >
        <EditableContent
          pageName="home"
          contentKey="cta_title"
          defaultValue="Ready to Transform Your Business?"
          variant="h2"
        />
        <EditableContent
          pageName="home"
          contentKey="cta_description"
          defaultValue="Let's work together to achieve your business goals."
          variant="h5"
        />
        <EditableButton
          pageName="home"
          contentKey="cta_button"
          defaultValue="Get Started"
          variant="contained"
          size="large"
          onClick={() => navigate('/contact')}
          sx={{ 
            mt: 3,
            px: 6,
            py: 1.5,
            fontSize: '1.1rem'
          }}
        />
      </Box>
    </Container>
  );
};

export default HomePage;
