import { createTheme } from '@mui/material/styles';

// Elements-inspired purple gradient palette
// Earth - Deep royal purple
// Air - Lavender mist
// Fire - Vibrant magenta
// Water - Cool purple-blue

declare module '@mui/material/styles' {
  interface TypeBackground {
    gradient: string;
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: '#8E44AD', // Rich purple (Earth)
      light: '#9B59B6',
      dark: '#6C3483',
    },
    secondary: {
      main: '#B39DDB', // Soft lavender (Air)
      light: '#D1C4E9',
      dark: '#7E57C2',
    },
    background: {
      default: '#ffffff',
      paper: '#F8F5FD', // Very light purple tint
      gradient: 'linear-gradient(135deg, #8E44AD 0%, #9B59B6 25%, #B39DDB 50%, #7E57C2 75%, #6C3483 100%)',
    },
    error: {
      main: '#C2185B', // Deep magenta (Fire)
    },
    info: {
      main: '#7986CB', // Purple-blue (Water)
    },
  },
  typography: {
    fontFamily: '"Public Sans", "Noto Sans", "Afacad", sans-serif',
    h1: {
      fontFamily: '"Afacad", "Public Sans", sans-serif',
      fontWeight: 600,
      fontSize: '2.5rem',
      letterSpacing: '0.02em',
      background: 'linear-gradient(135deg, #8E44AD 0%, #B39DDB 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    h2: {
      fontFamily: '"Afacad", "Public Sans", sans-serif',
      fontWeight: 500,
      fontSize: '2rem',
      letterSpacing: '0.01em',
    },
    h3: {
      fontFamily: '"Afacad", "Public Sans", sans-serif',
      fontWeight: 500,
      fontSize: '1.75rem',
      letterSpacing: '0.01em',
    },
    h4: {
      fontFamily: '"Afacad", "Public Sans", sans-serif',
      fontWeight: 500,
      fontSize: '1.5rem',
    },
    h5: {
      fontFamily: '"Public Sans", "Noto Sans", sans-serif',
      fontWeight: 500,
      fontSize: '1.25rem',
    },
    h6: {
      fontFamily: '"Public Sans", "Noto Sans", sans-serif',
      fontWeight: 500,
      fontSize: '1.1rem',
    },
    subtitle1: {
      fontFamily: '"Noto Sans", "Public Sans", sans-serif',
      fontSize: '1.1rem',
      letterSpacing: '0.01em',
      lineHeight: 1.6,
    },
    subtitle2: {
      fontFamily: '"Noto Sans", "Public Sans", sans-serif',
      fontSize: '1rem',
      letterSpacing: '0.01em',
      lineHeight: 1.6,
    },
    body1: {
      fontFamily: '"Public Sans", "Noto Sans", sans-serif',
      fontSize: '1rem',
      letterSpacing: '0.01em',
      lineHeight: 1.7,
    },
    body2: {
      fontFamily: '"Public Sans", "Noto Sans", sans-serif',
      fontSize: '0.95rem',
      letterSpacing: '0.01em',
      lineHeight: 1.7,
    },
    button: {
      fontFamily: '"Afacad", "Public Sans", sans-serif',
      fontWeight: 500,
      letterSpacing: '0.02em',
      textTransform: 'none',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 25,
          textTransform: 'none',
          fontWeight: 500,
          padding: '8px 24px',
          background: 'linear-gradient(135deg, #8E44AD 0%, #9B59B6 100%)',
          color: 'white',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            background: 'linear-gradient(135deg, #6C3483 0%, #8E44AD 100%)',
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 20px rgba(142, 68, 173, 0.2)',
          },
        },
        outlined: {
          background: 'transparent',
          borderColor: '#8E44AD',
          color: '#8E44AD',
          '&:hover': {
            borderColor: '#6C3483',
            color: '#6C3483',
            background: 'transparent',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 20px rgba(142, 68, 173, 0.1)',
          '&:hover': {
            boxShadow: '0 8px 30px rgba(142, 68, 173, 0.15)',
            transform: 'translateY(-3px)',
            transition: 'all 0.3s ease-in-out',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(135deg, #8E44AD 0%, #9B59B6 100%)',
          boxShadow: '0 2px 10px rgba(142, 68, 173, 0.1)',
        },
      },
    },
  },
});
