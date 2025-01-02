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
  LocalFireDepartment as CandlesIcon,
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
    { text: 'Candles', path: '/candles', icon: <CandlesIcon /> },
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
            background: 'rgba(142, 68, 173, 0.95)', // Matching the primary color with some transparency
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)', // For Safari
            borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            color: '#fff',
            '& .MuiToolbar-root': {
              minHeight: { xs: '64px', md: '80px' },
            },
            '& .MuiButton-root': {
              color: '#fff',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            },
            '& .MuiIconButton-root': {
              color: '#fff',
            },
            '& .active': {
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              fontWeight: 600,
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
                  color: '#fff',
                  fontWeight: 700,
                  letterSpacing: 1.2,
                  fontSize: { xs: '1.3rem', md: '1.6rem' },
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
                  position: 'relative',
                  zIndex: 1,
                  display: 'inline-block',
                  padding: '4px 8px',
                  borderRadius: 1,
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': {
                    textShadow: '2px 2px 6px rgba(0, 0, 0, 0.3)',
                    transform: 'scale(1.02)',
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
                <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center', gap: 2 }}>
                  {navItems.map((item) => (
                    <Button
                      key={item.text}
                      component={Link}
                      to={item.path}
                      className={isActive(item.path) ? 'active' : ''}
                      startIcon={item.icon}
                      sx={{
                        px: 2,
                        py: 1,
                        borderRadius: 1,
                        fontWeight: isActive(item.path) ? 600 : 400,
                        transition: 'all 0.2s ease-in-out',
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
