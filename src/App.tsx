import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './styles/theme';
import MainLayout from './layouts/MainLayout';

// Lazy load pages
const HomePage = React.lazy(() => import('./pages/HomePage'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const ResourcesPage = React.lazy(() => import('./pages/ResourcesPage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const ConsultationPage = React.lazy(() => import('./pages/ConsultationPage'));
const CandlesPage = React.lazy(() => import('./pages/CandlesPage'));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <MainLayout>
          <React.Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/candles" element={<CandlesPage />} />
              <Route path="/consultation" element={<ConsultationPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </React.Suspense>
        </MainLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
