import React, { useState } from 'react';
import {
  Box as MuiBox,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Link,
} from '@mui/material';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const ResourcesPage: React.FC = () => {
  const cityResources = [
    {
      title: 'Eclipse Login',
      description: 'Access the Philadelphia Licensing and Inspections Management System.',
      link: 'https://eclipse.phila.gov/phillylmsprod/pub/lms/Login.aspx',
    },
    {
      title: 'Permit Information',
      description: 'Building and repair permit information from the City of Philadelphia.',
      link: 'https://www.phila.gov/services/permits-violations-licenses/apply-for-a-permit/building-and-repair-permits/',
    },
    {
      title: 'Licensing Information',
      description: 'Trade, rental, and other licensing requirements and applications.',
      link: 'https://www.phila.gov/services/permits-violations-licenses/get-a-license/',
    },
    {
      title: 'City Bill Payments',
      description: 'Pay your Philadelphia city bills online.',
      link: 'https://epay.phila.gov/paymentcenter/accountlookup/',
    },
    {
      title: 'Tax Services',
      description: 'Philadelphia tax services, payments, and assistance.',
      link: 'https://www.phila.gov/services/payments-assistance-taxes/taxes/',
    },
    {
      title: 'PHA Portal',
      description: 'Philadelphia Housing Authority online portal.',
      link: 'https://pha.hcvportal.org/Account/Login?ReturnUrl=%2F',
    },
  ];

  const financialResources = [
    {
      title: 'Line of Credit Guide',
      description: 'Understanding business lines of credit for cash flow management.',
      link: 'https://www.investopedia.com/terms/l/lineofcredit.asp',
    },
    {
      title: 'HELOC Explained',
      description: 'Complete guide to Home Equity Lines of Credit.',
      link: 'https://www.investopedia.com/home-equity-line-of-credit-heloc-definition-5217473',
    },
    {
      title: 'Smart Funding Tips',
      description: 'Creative strategies for managing credit and accessing funds.',
      link: 'https://financebuzz.com/clever-credit-card-debt-payoff-heloc-g?keyword=e8607f36-cdea-42a5-993c-222a1c6746f1&campaignid=13ff2635-4c08-4625-b6f8-18397f1cceff&adgroupid=87df68fd-74ca-4cfa-bd45-22a9cd2f9fb8',
    },
  ];

  const recommendedBooks = [
    {
      title: 'Question Behind the Question',
      author: 'John C Miller',
      description: 'Personal accountability in business and life.',
    },
    {
      title: 'The Dip',
      author: 'Seth Godin',
      description: 'Strategic quitting and perseverance in business.',
    },
    {
      title: 'Linchpin',
      author: 'Seth Godin',
      description: 'Becoming indispensable in your organization.',
    },
    {
      title: 'E-Myth Revisited',
      author: 'Michael Gerber',
      description: 'Why most small businesses don\'t work and what to do about it.',
    },
    {
      title: 'Attitude 101',
      author: 'Maxwell',
      description: 'Understanding and developing a positive attitude.',
    },
    {
      title: 'The Lean StartUp',
      author: 'Eric Ries',
      description: 'Building a sustainable business through continuous innovation.',
    },
    {
      title: 'Rework',
      author: 'Jason Fried and David Heinemeier Hansson',
      description: 'A different way to think about business and work.',
    },
    {
      title: 'Getting Things Done',
      author: 'David Allen',
      description: 'The art of stress-free productivity.',
    },
    {
      title: 'Delivering Happiness',
      author: 'Tony Hsieh',
      description: 'A path to profits, passion, and purpose.',
    },
    {
      title: 'Good to Great',
      author: 'Jim Collins',
      description: 'Why some companies make the leap and others don\'t.',
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
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="primary"
            gutterBottom
          >
            Resources
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            Access essential tools, guides, and recommendations to help your business thrive.
          </Typography>
        </Container>
      </MuiBox>

      {/* City Resources Section */}
      <Container maxWidth="lg" sx={{ mt: 8, mb: 6 }}>
        <Typography variant="h3" gutterBottom color="primary">
          City Resources
        </Typography>
        <Grid container spacing={4}>
          {cityResources.map((resource, index) => (
            <Grid item key={resource.title} xs={12} sm={6} md={4}>
              <Card
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {resource.title}
                  </Typography>
                  <Typography color="text.secondary" paragraph>
                    {resource.description}
                  </Typography>
                  <Button
                    endIcon={<FaExternalLinkAlt />}
                    component={Link}
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Access Resource
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Financial Resources Section */}
      <Container maxWidth="lg" sx={{ mb: 6 }}>
        <Typography variant="h3" gutterBottom color="primary">
          Financial Resources
        </Typography>
        <Grid container spacing={4}>
          {financialResources.map((resource, index) => (
            <Grid item key={resource.title} xs={12} sm={6} md={4}>
              <Card
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {resource.title}
                  </Typography>
                  <Typography color="text.secondary" paragraph>
                    {resource.description}
                  </Typography>
                  <Button
                    endIcon={<FaExternalLinkAlt />}
                    component={Link}
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Book Recommendations Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Typography variant="h3" gutterBottom color="primary">
          Recommended Reading
        </Typography>
        <Grid container spacing={4}>
          {recommendedBooks.map((book, index) => (
            <Grid item key={book.title} xs={12} sm={6} md={4}>
              <Card
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {book.title}
                  </Typography>
                  <Typography variant="subtitle1" color="primary" gutterBottom>
                    by {book.author}
                  </Typography>
                  <Typography color="text.secondary">
                    {book.description}
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

export default ResourcesPage;
