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
  useMediaQuery,
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
  Close as CloseIcon,
} from '@mui/icons-material';
import { AnimatePresence } from 'framer-motion';

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

const Navigation = (props: Props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems: NavItem[] = [
    { text: 'Home', path: '/', icon: <HomeIcon /> },
    { text: 'About', path: '/about', icon: <InfoIcon /> },
    { text: 'Services', path: '/services', icon: <ServicesIcon /> },
    { text: 'Resources', path: '/resources', icon: <ResourcesIcon /> },
    { text: 'Consultation', path: '/consultation', icon: <ConsultationIcon /> },
    { text: 'Contact', path: '/contact', icon: <ContactIcon /> },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const drawer = (
    <Box
      sx={{
        height: '100%',
        backgroundColor: 'background.paper',
        py: 2,
      }}
    >
      <Box sx={{ textAlign: 'right', px: 2, mb: 2 }}>
        <IconButton onClick={handleDrawerToggle} sx={{ color: 'text.primary' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.text}
            component={Link}
            to={item.path}
            onClick={handleDrawerToggle}
            sx={{
              color: isActive(item.path) ? 'primary.main' : 'text.primary',
              backgroundColor: isActive(item.path) ? 'action.selected' : 'transparent',
              '&:hover': {
                backgroundColor: 'action.hover',
              },
              borderRadius: 1,
              mx: 1,
              mb: 1,
            }}
          >
            <ListItemIcon
              sx={{
                color: isActive(item.path) ? 'primary.main' : 'text.primary',
                minWidth: 40,
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              primaryTypographyProps={{
                fontWeight: isActive(item.path) ? 600 : 400,
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <HideOnScroll {...props}>
        <AppBar position="fixed" elevation={0} 
          sx={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)', // For Safari
            borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            color: theme.palette.text.primary,
            '& .MuiToolbar-root': {
              minHeight: { xs: '64px', md: '80px' },
            },
          }}>
          <Container maxWidth="lg">
            <Toolbar disableGutters>
              {/* Logo Text */}
              <Typography
                variant="h6"
                component={Link}
                to="/"
                sx={{
                  textDecoration: 'none',
                  color: theme.palette.primary.main,
                  fontWeight: 600,
                  background: 'linear-gradient(45deg, #9c27b0, #673ab7)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  letterSpacing: 1,
                  fontSize: { xs: '1.2rem', md: '1.5rem' },
                  '&:hover': {
                    opacity: 0.9,
                  },
                }}
              >
                Element's Insights
              </Typography>

              {/* Mobile Menu Button */}
              {isMobile ? (
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ ml: 'auto' }}
                >
                  {mobileOpen ? <CloseIcon /> : <MenuIcon />}
                </IconButton>
              ) : (
                <Box sx={{ ml: 'auto', display: 'flex', gap: 2 }}>
                  {navItems.map((item) => (
                    <Button
                      key={item.text}
                      component={Link}
                      to={item.path}
                      sx={{
                        color: theme.palette.text.primary,
                        position: 'relative',
                        px: 2,
                        py: 1,
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          width: '100%',
                          height: '2px',
                          bottom: 0,
                          left: 0,
                          background: 'linear-gradient(45deg, #9c27b0, #673ab7)',
                          transform: location.pathname === item.path ? 'scaleX(1)' : 'scaleX(0)',
                          transition: 'transform 0.3s ease-in-out',
                        },
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        },
                        '&:hover::after': {
                          transform: 'scaleX(1)',
                        },
                      }}
                    >
                      {item.text}
                    </Button>
                  ))}
                </Box>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>

      <Toolbar /> {/* Spacer */}

      <AnimatePresence>
        {isMobile && (
          <Drawer
            variant="temporary"
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile
            }}
            sx={{
              display: { xs: 'block', md: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: 280,
              },
            }}
          >
            {drawer}
          </Drawer>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default Navigation;
