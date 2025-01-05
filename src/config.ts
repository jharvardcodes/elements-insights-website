// Configuration for base URL handling
const config = {
  // Use the homepage from package.json in production, empty string in development
  baseUrl: process.env.NODE_ENV === 'production' 
    ? '/elements-insights-website'
    : '',
};

export default config;
