import React, { useState } from 'react';
import {
  Box as MuiBox,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
  Link,
} from '@mui/material';
import { motion } from 'framer-motion';
import { FaDownload, FaChevronDown, FaExternalLinkAlt } from 'react-icons/fa';

const ResourcesPage: React.FC = () => {
  const theme = useTheme();
  const [expandedFaq, setExpandedFaq] = useState<string | false>(false);

  const handleFaqChange = (panel: string) => (
    _event: React.SyntheticEvent,
    isExpanded: boolean
  ) => {
    setExpandedFaq(isExpanded ? panel : false);
  };

  const resources = [
    {
      title: 'Property Tax Guide',
      description: 'Comprehensive guide to understanding property taxes and abatement processes.',
      image: '/images/tax-guide.jpg',
      downloadLink: '/resources/property-tax-guide.pdf',
    },
    {
      title: 'Permit Application Templates',
      description: 'Ready-to-use templates for common permit applications.',
      image: '/images/permit-templates.jpg',
      downloadLink: '/resources/permit-templates.zip',
    },
    {
      title: 'Rental License Checklist',
      description: 'Complete checklist for rental property licensing requirements.',
      image: '/images/rental-checklist.jpg',
      downloadLink: '/resources/rental-checklist.pdf',
    },
    {
      title: 'Legal Document Templates',
      description: 'Standard templates for common real estate legal documents.',
      image: '/images/legal-templates.jpg',
      downloadLink: '/resources/legal-templates.pdf',
    },
  ];

  const faqs = [
    {
      question: 'How long does the tax abatement process typically take?',
      answer: 'The tax abatement process typically takes 3-6 months from filing to decision. However, this timeline can vary depending on the jurisdiction and complexity of your case.',
    },
    {
      question: 'What documents do I need for a rental license?',
      answer: 'Required documents typically include property deed, certificate of occupancy, proof of insurance, inspection reports, and completed application forms. Specific requirements may vary by location.',
    },
    {
      question: 'How often do I need to renew my rental license?',
      answer: 'Most rental licenses need to be renewed annually. However, some jurisdictions may require renewal every 2-3 years. We recommend checking your local regulations.',
    },
    {
      question: 'What types of permits can be filed as EZ permits?',
      answer: 'EZ permits typically cover minor alterations, repairs, and replacements. This may include water heater replacements, minor electrical work, and basic plumbing repairs.',
    },
  ];

  const externalResources = [
    {
      title: 'Philadelphia Tax Services',
      description: 'Official Philadelphia website for property tax information, payments, and services.',
      link: 'https://tax-services.phila.gov/_/',
    },
    {
      title: 'Philadelphia L&I Permits',
      description: 'Access Philadelphia permit applications, licenses, and building code information.',
      link: 'https://permits.phila.gov/',
    },
    {
      title: 'Philadelphia Housing Authority',
      description: 'Housing resources, regulations, and assistance programs in Philadelphia.',
      link: 'https://www.pha.phila.gov/housing/',
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
            Resources & Downloads
          </Typography>
          <Typography
            variant="h5"
            align="center"
            paragraph
            sx={{ maxWidth: '800px', mx: 'auto', mb: 4 }}
          >
            Access our collection of guides, templates, and educational materials to help you navigate
            real estate management effectively.
          </Typography>
        </Container>
      </MuiBox>

      {/* Downloadable Resources Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Typography variant="h3" component="h2" gutterBottom>
          Downloadable Resources
        </Typography>
        <Grid container spacing={4}>
          {resources.map((resource, index) => (
            <Grid item key={resource.title} xs={12} sm={6}>
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
                <CardMedia
                  component="img"
                  height="140"
                  image={resource.image}
                  alt={resource.title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h3">
                    {resource.title}
                  </Typography>
                  <Typography color="text.secondary" paragraph>
                    {resource.description}
                  </Typography>
                  <Button
                    variant="contained"
                    startIcon={<FaDownload />}
                    href={resource.downloadLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* FAQ Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Typography variant="h3" component="h2" gutterBottom>
          Frequently Asked Questions
        </Typography>
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            expanded={expandedFaq === `panel${index}`}
            onChange={handleFaqChange(`panel${index}`)}
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            sx={{ mb: 1 }}
          >
            <AccordionSummary
              expandIcon={<FaChevronDown />}
              sx={{ '&:hover': { bgcolor: 'action.hover' } }}
            >
              <Typography variant="h6">{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="text.secondary">{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>

      {/* External Resources Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Typography variant="h3" component="h2" gutterBottom>
          External Resources
        </Typography>
        <Grid container spacing={4}>
          {externalResources.map((resource, index) => (
            <Grid item key={resource.title} xs={12} md={4}>
              <Card
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                sx={{ height: '100%' }}
              >
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h3">
                    {resource.title}
                  </Typography>
                  <Typography color="text.secondary" paragraph>
                    {resource.description}
                  </Typography>
                  <Link
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      color: 'primary.main',
                      textDecoration: 'none',
                      '&:hover': { textDecoration: 'underline' },
                    }}
                  >
                    Visit Website
                    <FaExternalLinkAlt size="0.8em" />
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </MuiBox>
  );
};

export default ResourcesPage;
