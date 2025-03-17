import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './styles/theme';
import MainLayout from './layouts/MainLayout';
import { AdminProvider } from './contexts/AdminContext';

// Lazy load pages
const HomePage = React.lazy(() => import('./pages/HomePage'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const ResourcesPage = React.lazy(() => import('./pages/ResourcesPage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const ConsultationPage = React.lazy(() => import('./pages/ConsultationPage'));
const CandlesPage = React.lazy(() => import('./pages/CandlesPage'));
const AdminDashboard = React.lazy(() => import('./pages/AdminDashboard'));
const AdminPage = React.lazy(() => import('./pages/AdminPage'));
const ManageCandlesPage = React.lazy(() => import('./pages/admin/ManageCandlesPage'));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AdminProvider>
        <Router>
          <Routes>
            <Route path="/admin" element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <AdminPage />
              </React.Suspense>
            } />
            <Route path="/admin/dashboard" element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <AdminDashboard />
              </React.Suspense>
            } />
            <Route path="/admin/candles" element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <ManageCandlesPage />
              </React.Suspense>
            } />
            <Route element={<MainLayout />}>
              <Route path="/" element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <HomePage />
                </React.Suspense>
              } />
              <Route path="/services" element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <ServicesPage />
                </React.Suspense>
              } />
              <Route path="/resources" element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <ResourcesPage />
                </React.Suspense>
              } />
              <Route path="/about" element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <AboutPage />
                </React.Suspense>
              } />
              <Route path="/contact" element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <ContactPage />
                </React.Suspense>
              } />
              <Route path="/consultation" element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <ConsultationPage />
                </React.Suspense>
              } />
              <Route path="/candles" element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <CandlesPage />
                </React.Suspense>
              } />
            </Route>
          </Routes>
        </Router>
      </AdminProvider>
    </ThemeProvider>
  );
}

export default App;
