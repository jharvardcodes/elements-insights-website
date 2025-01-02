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
  needs: string[];
  employeeCount: number;
  projectsPerMonth: number;
  challenges: string[];
  timeline: string;
  currentSoftware: string;
  socialMedia: {
    facebook: string;
    instagram: string;
    linkedin: string;
    twitter: string;
    website: string;
  };
  budget: string;
  availability: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  additionalInfo: string;
}

const initialFormData: FormData = {
  needs: [],
  employeeCount: 1,
  projectsPerMonth: 1,
  challenges: [],
  timeline: '',
  currentSoftware: '',
  socialMedia: {
    facebook: '',
    instagram: '',
    linkedin: '',
    twitter: '',
    website: '',
  },
  budget: '',
  availability: '',
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
        needs: formData.needs.join(', '),
        challenges: formData.challenges.join(', '),
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

  const needsOptions = [
    { label: 'Abatements', value: 'abatements' },
    { label: 'Permits & Licensing', value: 'permits-licensing' },
    { label: 'Office Support', value: 'office-support' },
  ];

  const challengeOptions = [
    { label: 'Abatements', value: 'abatements' },
    { label: 'Permits', value: 'permits' },
    { label: 'Licensing', value: 'licensing' },
    { label: 'Employee Turnover', value: 'employee-turnover' },
    { label: 'Office Support', value: 'office-support' },
    { label: 'Eviction Filing/Court', value: 'eviction' },
    { label: 'Task Management', value: 'task-management' },
  ];

  const timelineOptions = [
    { label: 'Immediate (within 1 month)', value: 'immediate' },
    { label: 'Short-term (1-3 months)', value: 'short' },
    { label: 'Medium-term (3-6 months)', value: 'medium' },
    { label: 'Long-term (6+ months)', value: 'long' },
  ];

  const steps = [
    {
      label: 'Needs',
      content: (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
        >
          <Typography variant="h6" gutterBottom>
            What are your needs?
          </Typography>
          <FormGroup>
            {needsOptions.map((option) => (
              <FormControlLabel
                key={option.value}
                control={
                  <Checkbox
                    checked={formData.needs.includes(option.value)}
                    onChange={(e) => {
                      const newNeeds = e.target.checked
                        ? [...formData.needs, option.value]
                        : formData.needs.filter((c) => c !== option.value);
                      setFormData({ ...formData, needs: newNeeds });
                    }}
                  />
                }
                label={option.label}
              />
            ))}
          </FormGroup>

          <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
            How many employees do you have?
          </Typography>
          <Box sx={{ px: { xs: 3, sm: 5 }, mt: 4, mb: 2 }}>
            <Slider
              value={formData.employeeCount}
              onChange={(_, value) => setFormData({ ...formData, employeeCount: value as number })}
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

          <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
            How many projects do you have per month?
          </Typography>
          <Box sx={{ px: { xs: 3, sm: 5 }, mt: 4, mb: 2 }}>
            <Slider
              value={formData.projectsPerMonth}
              onChange={(_, value) => setFormData({ ...formData, projectsPerMonth: value as number })}
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
      label: 'Software & Social Media',
      content: (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
        >
          <Typography variant="h6" gutterBottom>
            What software are you currently using?
          </Typography>
          <TextField
            fullWidth
            label="Software"
            value={formData.currentSoftware}
            onChange={(e) => setFormData({ ...formData, currentSoftware: e.target.value })}
            margin="normal"
          />

          <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
            What are your social media profiles?
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              fullWidth
              label="Facebook"
              InputProps={{
                startAdornment: (
                  <Typography color="text.secondary" sx={{ mr: 1 }}>
                    facebook.com/
                  </Typography>
                ),
              }}
              value={formData.socialMedia.facebook}
              onChange={(e) => setFormData({
                ...formData,
                socialMedia: { ...formData.socialMedia, facebook: e.target.value }
              })}
              placeholder="your.page.name"
              margin="normal"
            />
            <TextField
              fullWidth
              label="Instagram"
              InputProps={{
                startAdornment: (
                  <Typography color="text.secondary" sx={{ mr: 1 }}>
                    instagram.com/
                  </Typography>
                ),
              }}
              value={formData.socialMedia.instagram}
              onChange={(e) => setFormData({
                ...formData,
                socialMedia: { ...formData.socialMedia, instagram: e.target.value }
              })}
              placeholder="your.handle"
              margin="normal"
            />
            <TextField
              fullWidth
              label="LinkedIn"
              InputProps={{
                startAdornment: (
                  <Typography color="text.secondary" sx={{ mr: 1 }}>
                    linkedin.com/company/
                  </Typography>
                ),
              }}
              value={formData.socialMedia.linkedin}
              onChange={(e) => setFormData({
                ...formData,
                socialMedia: { ...formData.socialMedia, linkedin: e.target.value }
              })}
              placeholder="your-company-name"
              margin="normal"
            />
            <TextField
              fullWidth
              label="Twitter/X"
              InputProps={{
                startAdornment: (
                  <Typography color="text.secondary" sx={{ mr: 1 }}>
                    twitter.com/
                  </Typography>
                ),
              }}
              value={formData.socialMedia.twitter}
              onChange={(e) => setFormData({
                ...formData,
                socialMedia: { ...formData.socialMedia, twitter: e.target.value }
              })}
              placeholder="your_handle"
              margin="normal"
            />
            <TextField
              fullWidth
              label="Website"
              InputProps={{
                startAdornment: (
                  <Typography color="text.secondary" sx={{ mr: 1 }}>
                    https://
                  </Typography>
                ),
              }}
              value={formData.socialMedia.website}
              onChange={(e) => setFormData({
                ...formData,
                socialMedia: { ...formData.socialMedia, website: e.target.value }
              })}
              placeholder="your-website.com"
              margin="normal"
            />
          </Box>
        </motion.div>
      ),
    },
    {
      label: 'Budget & Availability',
      content: (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
        >
          <Typography variant="h6" gutterBottom>
            What's your estimated budget for professional services?
          </Typography>
          <TextField
            fullWidth
            label="Budget"
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            margin="normal"
          />

          <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
            What's your availability for a consultation?
          </Typography>
          <TextField
            fullWidth
            label="Availability"
            value={formData.availability}
            onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
            margin="normal"
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
            Please provide your contact information
          </Typography>
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
            required
          />
          <TextField
            fullWidth
            label="Additional Information"
            multiline
            rows={4}
            value={formData.additionalInfo}
            onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
            margin="normal"
          />
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
