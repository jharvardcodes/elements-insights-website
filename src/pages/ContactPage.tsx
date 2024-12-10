import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  useTheme,
  Card,
  CardContent,
  Snackbar,
  Alert,
  CircularProgress,
} from '@mui/material';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useContactForm } from '../services/formService';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactPage = () => {
  const theme = useTheme();
  const { state, handleSubmit } = useContactForm();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await handleSubmit(formData as { [key: string]: any });
      if (state.succeeded) {
        setSnackbar({
          open: true,
          message: 'Thank you! Your message has been sent successfully.',
          severity: 'success'
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      }
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'Sorry, there was an error sending your message. Please try again.',
        severity: 'error'
      });
    }
  };

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: 'Phone',
      content: '(215) 123-4567',
      link: 'tel:+12151234567',
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      content: 'info@elementsinsights.com',
      link: 'mailto:info@elementsinsights.com',
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Office',
      content: 'Philadelphia, PA',
      link: 'https://maps.google.com/?q=Philadelphia,PA',
    },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      link: 'https://linkedin.com/company/elements-insights',
      label: 'LinkedIn',
    },
    {
      icon: <FaFacebook />,
      link: 'https://facebook.com/elementsinsights',
      label: 'Facebook',
    },
    {
      icon: <FaInstagram />,
      link: 'https://instagram.com/elementsinsights',
      label: 'Instagram',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper
            component="form"
            onSubmit={onSubmit}
            elevation={3}
            sx={{
              p: { xs: 2, md: 4 },
              height: '100%',
            }}
          >
            <Typography variant="h5" component="h2" gutterBottom>
              Send us a Message
            </Typography>
            <Box sx={{ mt: 2 }}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                margin="normal"
              />
              <TextField
                fullWidth
                label="Message"
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                margin="normal"
                required
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                size="large"
                disabled={state.submitting}
                sx={{ mt: 3 }}
                startIcon={state.submitting ? <CircularProgress size={20} /> : undefined}
              >
                {state.submitting ? 'Sending...' : 'Send Message'}
              </Button>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Box sx={{ height: '100%' }}>
              {/* Contact Cards */}
              {contactInfo.map((info, index) => (
                <Card
                  key={info.title}
                  sx={{
                    mb: 2,
                    transition: '0.3s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: theme.shadows[4],
                    },
                  }}
                >
                  <CardContent>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        color: 'primary.main',
                      }}
                    >
                      {React.cloneElement(info.icon as React.ReactElement, {
                        style: { fontSize: '1.5rem', marginRight: '1rem' },
                      })}
                      <Box>
                        <Typography variant="h6" gutterBottom>
                          {info.title}
                        </Typography>
                        <Typography
                          component="a"
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            color: 'text.secondary',
                            textDecoration: 'none',
                            '&:hover': { color: 'primary.main' },
                          }}
                        >
                          {info.content}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              ))}

              {/* Social Links */}
              <Box sx={{ mt: 4 }}>
                <Typography variant="h6" gutterBottom>
                  Follow Us
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  {socialLinks.map((social) => (
                    <Button
                      key={social.label}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outlined"
                      sx={{
                        minWidth: 'auto',
                        p: 1,
                        borderRadius: '50%',
                        '&:hover': {
                          backgroundColor: 'primary.main',
                          color: 'white',
                        },
                      }}
                    >
                      {social.icon}
                    </Button>
                  ))}
                </Box>
              </Box>
            </Box>
          </motion.div>
        </Grid>
      </Grid>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert severity={snackbar.severity} onClose={() => setSnackbar({ ...snackbar, open: false })}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ContactPage;
