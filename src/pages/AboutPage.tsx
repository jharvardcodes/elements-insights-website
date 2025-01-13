import React from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { EditableContent } from '../components/EditableContent';
import { EditableButton } from '../components/EditableButton';
import {
  Box as MuiBox,
  Card,
  CardContent,
  useTheme,
  Avatar,
} from '@mui/material';
import { FaBuilding, FaHandshake, FaChartLine, FaUsers } from 'react-icons/fa';
import Image from '../components/Image';

const AboutPage: React.FC = () => {
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
      title: 'Efficiency',
      description: 'We value the power of streamlined processes that drive operational excellence and reduce costs, creating sustainable solutions that benefit our clients and communities.',
    },
    {
      title: 'Growth',
      description: 'We are committed to fostering growth through continuous improvement, innovation, and strategic planning, ensuring that every client can achieve their full potential.',
    },
    {
      title: 'Integrity',
      description: 'We hold ourselves to the highest ethical standards, promoting transparency, honesty, and accountability in every decision and action we take.',
    },
    {
      title: 'Collaboration',
      description: 'We believe in the strength of partnerships. By working closely with clients, vendors, and teams, we create mutually beneficial relationships that lead to success.',
    },
    {
      title: 'Compassion',
      description: 'We prioritize people in everything we do, advocating for both the welfare of your business and the professional development within the business for your team and client organizations.',
    },
    {
      title: 'Empowerment',
      description: 'We are dedicated to educating and equipping our clients and teams with the tools and knowledge they need to thrive in a dynamic business environment.',
    },
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        {/* Hero Section */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <EditableContent
            pageName="about"
            contentKey="hero_title"
            defaultValue="About Element's Insights"
            variant="h1"
          />
          <EditableContent
            pageName="about"
            contentKey="hero_subtitle"
            defaultValue="Your trusted partner in business operations and development, providing expert guidance and innovative solutions for sustainable growth."
            variant="subtitle1"
          />
        </Box>

        {/* About Crystal Section */}
        <Grid container spacing={6} sx={{ mb: 6 }}>
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <MuiBox
                sx={{
                  width: '300px',
                  height: '300px',
                  mx: 'auto',
                  position: 'relative',
                  mb: 3,
                }}
              >
                <Image
                  src={leadership.image}
                  alt={leadership.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '50%',
                    border: `4px solid ${theme.palette.primary.main}`,
                    boxShadow: theme.shadows[3],
                  }}
                />
              </MuiBox>
              <Typography variant="h2" gutterBottom color="primary">
                <EditableContent
                  pageName="about"
                  contentKey="leadership_name"
                  defaultValue={leadership.name}
                  variant="h2"
                />
              </Typography>
              <Typography variant="body1" gutterBottom color="text.secondary" sx={{ mb: 3 }}>
                <EditableContent
                  pageName="about"
                  contentKey="leadership_role"
                  defaultValue={leadership.role}
                  variant="body1"
                />
              </Typography>
              <Typography variant="body1" paragraph>
                <EditableContent
                  pageName="about"
                  contentKey="leadership_bio"
                  defaultValue={leadership.bio}
                  multiline={true}
                />
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={8}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography variant="h3" gutterBottom color="primary" sx={{ mb: 3 }}>
                <EditableContent
                  pageName="about"
                  contentKey="leadership_professional_journey_title"
                  defaultValue="Professional Journey"
                  variant="h3"
                />
              </Typography>
              <Typography variant="body1" paragraph sx={{ whiteSpace: 'pre-line' }}>
                <EditableContent
                  pageName="about"
                  contentKey="leadership_professional_journey"
                  defaultValue={leadership.professionalJourney}
                  multiline={true}
                />
              </Typography>
              
              <Typography variant="h3" gutterBottom color="primary" sx={{ mt: 4, mb: 2 }}>
                <EditableContent
                  pageName="about"
                  contentKey="leadership_key_skills_title"
                  defaultValue="Key Skills"
                  variant="h3"
                />
              </Typography>
              <Grid container spacing={2} sx={{ mb: 4 }}>
                {leadership.keySkills.map((skill, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Typography variant="body1"> <EditableContent
                      pageName="about"
                      contentKey={`leadership_key_skill_${index}`}
                      defaultValue={skill}
                      variant="body1"
                    /></Typography>
                  </Grid>
                ))}
              </Grid>

              <Typography variant="h3" gutterBottom color="primary" sx={{ mb: 2 }}>
                <EditableContent
                  pageName="about"
                  contentKey="leadership_education_title"
                  defaultValue="Education"
                  variant="h3"
                />
              </Typography>
              <Typography variant="body1" paragraph>
                <EditableContent
                  pageName="about"
                  contentKey="leadership_education"
                  defaultValue={leadership.education}
                  multiline={true}
                />
              </Typography>

              <Typography variant="h3" gutterBottom color="primary" sx={{ mb: 2 }}>
                <EditableContent
                  pageName="about"
                  contentKey="leadership_personal_title"
                  defaultValue="Beyond the Office"
                  variant="h3"
                />
              </Typography>
              <Typography variant="body1" paragraph>
                <EditableContent
                  pageName="about"
                  contentKey="leadership_personal"
                  defaultValue={leadership.personal}
                  multiline={true}
                />
              </Typography>
            </motion.div>
          </Grid>
        </Grid>

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
                      <Typography variant="h2" component="div" gutterBottom>
                        <EditableContent
                          pageName="about"
                          contentKey={`stat_${index}_value`}
                          defaultValue={stat.value}
                          variant="h2"
                        />
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        <EditableContent
                          pageName="about"
                          contentKey={`stat_${index}_label`}
                          defaultValue={stat.label}
                          variant="body1"
                        />
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
            variant="h2"
            align="center"
            gutterBottom
            sx={{ mb: 6 }}
            color="primary"
          >
            <EditableContent
              pageName="about"
              contentKey="values_title"
              defaultValue="Our Values"
              variant="h2"
            />
          </Typography>
          <Grid container spacing={4}>
            {values.map((value, index) => (
              <Grid item key={value.title} xs={12} sm={6} md={4}>
                <Card
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      transition: 'transform 0.3s ease-in-out',
                      boxShadow: (theme) => theme.shadows[4]
                    }
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography variant="h4" component="h3" gutterBottom color="primary" sx={{ mb: 2 }}>
                      <EditableContent
                        pageName="about"
                        contentKey={`value_${index}_title`}
                        defaultValue={value.title}
                        variant="h4"
                      />
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                      <EditableContent
                        pageName="about"
                        contentKey={`value_${index}_description`}
                        defaultValue={value.description}
                        multiline={true}
                      />
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Container>
  );
};

export default AboutPage;
