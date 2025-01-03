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
      main: '#6B2F89', // Darker purple for better contrast (WCAG AA compliant)
      light: '#9B59B6',
      dark: '#4A1D61',
    },
    secondary: {
      main: '#7E57C2', // Darker lavender for better contrast
      light: '#D1C4E9',
      dark: '#4527A0',
    },
    background: {
      default: '#ffffff',
      paper: '#F8F5FD', // Very light purple tint
      gradient: 'linear-gradient(135deg, #6B2F89 0%, #9B59B6 25%, #7E57C2 50%, #4527A0 75%, #4A1D61 100%)',
    },
    error: {
      main: '#C2185B', // Deep magenta (Fire)
    },
    info: {
      main: '#5C6BC0', // Darker purple-blue for better contrast (Water)
    },
  },
  typography: {
    fontFamily: '"Public Sans", "Noto Sans", "Afacad", -apple-system, BlinkMacSystemFont, sans-serif',
    h1: {
      fontFamily: '"Afacad", "Public Sans", sans-serif',
      fontWeight: 600,
      fontSize: 'clamp(2rem, 5vw, 2.5rem)', // Responsive font size
      letterSpacing: '0.02em',
      background: 'linear-gradient(135deg, #6B2F89 0%, #7E57C2 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      '@media (max-width:600px)': {
        fontSize: '1.8rem',
      },
    },
    h2: {
      fontFamily: '"Afacad", "Public Sans", sans-serif',
      fontWeight: 500,
      fontSize: 'clamp(1.75rem, 4vw, 2rem)', // Responsive font size
      letterSpacing: '0.01em',
    },
    h3: {
      fontFamily: '"Afacad", "Public Sans", sans-serif',
      fontWeight: 500,
      fontSize: 'clamp(1.5rem, 3.5vw, 1.75rem)', // Responsive font size
      letterSpacing: '0.01em',
    },
    h4: {
      fontFamily: '"Afacad", "Public Sans", sans-serif',
      fontWeight: 500,
      fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', // Responsive font size
    },
    h5: {
      fontFamily: '"Public Sans", "Noto Sans", sans-serif',
      fontWeight: 500,
      fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)', // Responsive font size
    },
    h6: {
      fontFamily: '"Public Sans", "Noto Sans", sans-serif',
      fontWeight: 500,
      fontSize: 'clamp(1rem, 2vw, 1.1rem)', // Responsive font size
    },
    subtitle1: {
      fontFamily: '"Noto Sans", "Public Sans", sans-serif',
      fontSize: 'clamp(1rem, 2vw, 1.1rem)', // Responsive font size
      letterSpacing: '0.01em',
      lineHeight: 1.6,
    },
    subtitle2: {
      fontFamily: '"Noto Sans", "Public Sans", sans-serif',
      fontSize: 'clamp(0.95rem, 1.9vw, 1rem)', // Responsive font size
      letterSpacing: '0.01em',
      lineHeight: 1.6,
    },
    body1: {
      fontFamily: '"Public Sans", "Noto Sans", sans-serif',
      fontSize: 'clamp(0.95rem, 1.9vw, 1rem)', // Responsive font size
      letterSpacing: '0.01em',
      lineHeight: 1.7,
    },
    body2: {
      fontFamily: '"Public Sans", "Noto Sans", sans-serif',
      fontSize: 'clamp(0.85rem, 1.7vw, 0.95rem)', // Responsive font size
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
          background: 'linear-gradient(135deg, #6B2F89 0%, #9B59B6 100%)',
          color: 'white',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            background: 'linear-gradient(135deg, #4A1D61 0%, #6B2F89 100%)',
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 20px rgba(107, 47, 137, 0.2)',
          },
        },
        outlined: {
          background: 'transparent',
          borderColor: '#6B2F89',
          color: '#6B2F89',
          '&:hover': {
            borderColor: '#4A1D61',
            color: '#4A1D61',
            background: 'transparent',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 20px rgba(107, 47, 137, 0.1)',
          '&:hover': {
            boxShadow: '0 8px 30px rgba(107, 47, 137, 0.15)',
            transform: 'translateY(-3px)',
            transition: 'all 0.3s ease-in-out',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(135deg, #6B2F89 0%, #9B59B6 100%)',
          boxShadow: '0 2px 10px rgba(107, 47, 137, 0.1)',
        },
      },
    },
  },
});
