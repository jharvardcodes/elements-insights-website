import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
  TextField,
  Checkbox,
  FormGroup,
  Slider,
  Rating,
  Snackbar,
  Alert,
  CircularProgress,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBuilding, FaHome, FaStore, FaWarehouse } from 'react-icons/fa';
import { useConsultationForm } from '../services/formService';

interface FormData {
  propertyType: string;
  propertyCount: number;
  location: string;
  challenges: string[];
  timeline: string;
  budget: number;
  experience: number;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  additionalInfo: string;
}

const initialFormData: FormData = {
  propertyType: '',
  propertyCount: 1,
  location: '',
  challenges: [],
  timeline: '',
  budget: 5000,
  experience: 0,
  contactName: '',
  contactEmail: '',
  contactPhone: '',
  additionalInfo: '',
};

const ConsultationPage: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const { state, handleSubmit } = useConsultationForm();
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error'
  });

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const formDataObj = {
        ...formData,
        challenges: formData.challenges.join(', '),
        budget: `$${formData.budget.toLocaleString()}`
      } as { [key: string]: any };

      await handleSubmit(formDataObj);
      if (state.succeeded) {
        setSnackbar({
          open: true,
          message: 'Thank you! Your consultation request has been sent successfully.',
          severity: 'success'
        });
        setFormData(initialFormData);
        setActiveStep(0);
      }
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'Sorry, there was an error sending your request. Please try again.',
        severity: 'error'
      });
    }
  };

  const propertyTypes = [
    { icon: <FaHome />, label: 'Residential', value: 'residential' },
    { icon: <FaBuilding />, label: 'Commercial', value: 'commercial' },
    { icon: <FaStore />, label: 'Retail', value: 'retail' },
    { icon: <FaWarehouse />, label: 'Industrial', value: 'industrial' },
  ];

  const challengeOptions = [
    { label: 'Tax Assessment Issues', value: 'tax' },
    { label: 'Permit Compliance', value: 'permits' },
    { label: 'Rental Licensing', value: 'rental' },
    { label: 'Property Violations', value: 'violations' },
    { label: 'Legal Disputes', value: 'legal' },
    { label: 'Property Management', value: 'management' },
  ];

  const timelineOptions = [
    { label: 'Immediate (within 1 month)', value: 'immediate' },
    { label: 'Short-term (1-3 months)', value: 'short' },
    { label: 'Medium-term (3-6 months)', value: 'medium' },
    { label: 'Long-term (6+ months)', value: 'long' },
  ];

  const steps = [
    {
      label: 'Property Details',
      content: (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
        >
          <Typography variant="h6" gutterBottom>
            What type of property do you own or manage?
          </Typography>
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { 
              xs: 'repeat(1, 1fr)', // Single column on mobile
              sm: 'repeat(2, 1fr)', // Two columns on tablet
              md: 'repeat(4, 1fr)'  // Four columns on desktop
            }, 
            gap: 2, 
            my: 3 
          }}>
            {propertyTypes.map((type) => (
              <Paper
                key={type.value}
                sx={{
                  p: 2,
                  cursor: 'pointer',
                  textAlign: 'center',
                  border: formData.propertyType === type.value ? 2 : 1,
                  borderColor: formData.propertyType === type.value ? 'primary.main' : 'divider',
                  '&:hover': { borderColor: 'primary.main' },
                }}
                onClick={() => setFormData({ ...formData, propertyType: type.value })}
              >
                <Box sx={{ fontSize: '2rem', mb: 1 }}>{type.icon}</Box>
                <Typography>{type.label}</Typography>
              </Paper>
            ))}
          </Box>
          
          <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
            How many properties are you looking to get help with?
          </Typography>
          <Box sx={{ px: { xs: 3, sm: 5 }, mt: 4, mb: 2 }}>
            <Slider
              value={formData.propertyCount}
              onChange={(_, value) => setFormData({ ...formData, propertyCount: value as number })}
              min={1}
              max={20}
              marks={[
                { value: 1, label: '1' },
                { value: 5, label: '5' },
                { value: 10, label: '10' },
                { value: 20, label: '20' },
              ]}
              sx={{
                '& .MuiSlider-markLabel': {
                  fontSize: '1rem',
                  fontWeight: 500,
                },
                '& .MuiSlider-mark': {
                  backgroundColor: '#fff',
                  height: 8,
                  width: 1,
                  '&.MuiSlider-markActive': {
                    opacity: 1,
                    backgroundColor: 'currentColor',
                  },
                },
              }}
            />
          </Box>
        </motion.div>
      ),
    },
    {
      label: 'Challenges',
      content: (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
        >
          <Typography variant="h6" gutterBottom>
            What challenges are you currently facing?
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            Select all that apply
          </Typography>
          <FormGroup>
            {challengeOptions.map((option) => (
              <FormControlLabel
                key={option.value}
                control={
                  <Checkbox
                    checked={formData.challenges.includes(option.value)}
                    onChange={(e) => {
                      const newChallenges = e.target.checked
                        ? [...formData.challenges, option.value]
                        : formData.challenges.filter((c) => c !== option.value);
                      setFormData({ ...formData, challenges: newChallenges });
                    }}
                  />
                }
                label={option.label}
              />
            ))}
          </FormGroup>

          <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
            What's your desired timeline for resolving these challenges?
          </Typography>
          <RadioGroup
            value={formData.timeline}
            onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
          >
            {timelineOptions.map((option) => (
              <FormControlLabel
                key={option.value}
                value={option.value}
                control={<Radio />}
                label={option.label}
              />
            ))}
          </RadioGroup>
        </motion.div>
      ),
    },
    {
      label: 'Experience & Budget',
      content: (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
        >
          <Typography variant="h6" gutterBottom>
            How would you rate your experience with property management?
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
            <Rating
              value={formData.experience}
              onChange={(_, value) => setFormData({ ...formData, experience: value || 0 })}
              max={5}
              size="large"
            />
            <Typography sx={{ ml: 2 }} color="text.secondary">
              {[
                'No experience',
                'Beginner',
                'Some experience',
                'Experienced',
                'Very experienced',
              ][formData.experience - 1] || 'Select your experience level'}
            </Typography>
          </Box>

          <Typography variant="h6" gutterBottom>
            What's your estimated budget for professional services?
          </Typography>
          <Slider
            value={formData.budget}
            onChange={(_, value) => setFormData({ ...formData, budget: value as number })}
            min={1000}
            max={50000}
            step={1000}
            marks={[
              { value: 1000, label: '$1k' },
              { value: 25000, label: '$25k' },
              { value: 50000, label: '$50k+' },
            ]}
            valueLabelDisplay="auto"
            valueLabelFormat={(value) => `$${value.toLocaleString()}`}
          />
        </motion.div>
      ),
    },
    {
      label: 'Contact Information',
      content: (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
        >
          <Typography variant="h6" gutterBottom>
            How can we reach you?
          </Typography>
          <Box component="form" sx={{ mt: 3 }}>
            <TextField
              fullWidth
              label="Name"
              value={formData.contactName}
              onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Email"
              type="email"
              value={formData.contactEmail}
              onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Phone"
              value={formData.contactPhone}
              onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Additional Information"
              multiline
              rows={4}
              value={formData.additionalInfo}
              onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
              margin="normal"
              placeholder="Tell us anything else that might help us prepare for our consultation..."
            />
          </Box>
        </motion.div>
      ),
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper component="form" onSubmit={onSubmit} elevation={3} sx={{ p: { xs: 2, md: 4 } }}>
        <Typography 
          variant="h4" 
          component="h1" 
          gutterBottom 
          align="center"
          sx={{
            fontSize: { xs: '1.75rem', sm: '2rem', md: '2.125rem' }
          }}
        >
          Book a Consultation
        </Typography>
        <Typography 
          variant="body1" 
          color="text.secondary" 
          paragraph 
          align="center"
          sx={{ px: { xs: 0, sm: 2 } }}
        >
          Let's understand your needs better to provide the most effective solutions for your property management challenges.
        </Typography>

        <Stepper 
          activeStep={activeStep} 
          sx={{ 
            my: { xs: 2, sm: 3, md: 4 },
            '& .MuiStepLabel-label': {
              fontSize: { xs: '0.75rem', sm: '0.875rem' }
            },
            '& .MuiSvgIcon-root': {
              width: { xs: 24, sm: 32 },
              height: { xs: 24, sm: 32 }
            }
          }}
          alternativeLabel // Better for mobile
        >
          {steps.map((step) => (
            <Step key={step.label}>
              <StepLabel>{step.label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <Box sx={{ mt: 4, minHeight: '300px', overflowX: 'hidden' }}>
          <AnimatePresence mode="wait">
            {steps[activeStep].content}
          </AnimatePresence>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3, gap: 2 }}>
          {activeStep > 0 && (
            <Button onClick={handleBack} sx={{ mr: 1 }}>
              Back
            </Button>
          )}
          {activeStep === steps.length - 1 ? (
            <Button
              variant="contained"
              type="submit"
              disabled={state.submitting}
              startIcon={state.submitting ? <CircularProgress size={20} /> : undefined}
            >
              {state.submitting ? 'Submitting...' : 'Submit'}
            </Button>
          ) : (
            <Button variant="contained" onClick={handleNext}>
              Next
            </Button>
          )}
        </Box>
      </Paper>
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

export default ConsultationPage;
