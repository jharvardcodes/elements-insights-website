import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useTheme,
  Button,
  Container,
  Slide,
  useScrollTrigger,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Info as InfoIcon,
  Build as ServicesIcon,
  Description as ResourcesIcon,
  CalendarToday as ConsultationIcon,
  ContactMail as ContactIcon,
  LocalFireDepartment as CandlesIcon,
  Close as CloseIcon,
} from '@mui/icons-material';

interface Props {
  window?: () => Window;
}

interface HideOnScrollProps extends Props {
  children: React.ReactElement;
}

interface NavItem {
  text: string;
  path: string;
  icon: React.ReactElement;
}

function HideOnScroll(props: HideOnScrollProps) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function Navigation(props: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const location = useLocation();

  const navItems: NavItem[] = [
    { text: 'Home', path: '/', icon: <HomeIcon /> },
    { text: 'About', path: '/about', icon: <InfoIcon /> },
    { text: 'Services', path: '/services', icon: <ServicesIcon /> },
    { text: 'Resources', path: '/resources', icon: <ResourcesIcon /> },
    { text: 'Consultation', path: '/consultation', icon: <ConsultationIcon /> },
    { text: 'Contact', path: '/contact', icon: <ContactIcon /> },
    { text: 'Candles', path: '/candles', icon: <CandlesIcon /> },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: 'center' }}
      role="navigation"
      aria-label="mobile navigation"
    >
      <Typography
        variant="h6"
        component="div"
        sx={{
          my: 2,
          fontFamily: '"Afacad", sans-serif',
          background: theme.palette.background.gradient,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Element's Insights
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.text}
            component={Link}
            to={item.path}
            sx={{
              color: location.pathname === item.path ? 'primary.main' : 'text.primary',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: 40 }}>{item.icon}</ListItemIcon>
            <ListItemText 
              primary={item.text}
              primaryTypographyProps={{
                sx: { fontWeight: location.pathname === item.path ? 600 : 400 }
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar 
          component="nav"
          sx={{ 
            backgroundColor: 'transparent',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
          }}
          role="banner"
        >
          <Container maxWidth="lg">
            <Toolbar sx={{ justifyContent: 'space-between' }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ display: { sm: 'none' } }}
              >
                {mobileOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
              
              <Typography
                variant="h6"
                component={Link}
                to="/"
                sx={{
                  flexGrow: 1,
                  textDecoration: 'none',
                  color: 'inherit',
                  fontFamily: '"Afacad", sans-serif',
                  fontSize: { xs: '1.2rem', sm: '1.5rem' },
                }}
              >
                Element's Insights
              </Typography>

              <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 1 }}>
                {navItems.map((item) => (
                  <Button
                    key={item.text}
                    component={Link}
                    to={item.path}
                    sx={{
                      color: 'white',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      },
                      ...(location.pathname === item.path && {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        fontWeight: 600,
                      }),
                    }}
                    aria-current={location.pathname === item.path ? 'page' : undefined}
                  >
                    {item.text}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      
      <Box component="nav">
        <Drawer
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: 240,
              backgroundColor: theme.palette.background.paper,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      
      <Toolbar /> {/* Spacer */}
    </>
  );
}

export default Navigation;
