import axios from 'axios';

const API_URL = 'http://localhost:1337/api';

const strapiService = {
  async getServices() {
    try {
      const response = await axios.get(`${API_URL}/services`);
      console.log('Raw Strapi response:', response.data);
      
      // Ensure we're returning the correct data structure
      if (response.data && Array.isArray(response.data.data)) {
        const services = response.data.data.map((item: any) => ({
          id: item.id,
          ...item.attributes
        }));
        console.log('Processed services:', services);
        return services;
      }
      
      return [];
    } catch (error) {
      console.error('Error fetching services:', error);
      return [];
    }
  },

  async getTestimonials() {
    try {
      const response = await axios.get(`${API_URL}/testimonials`);
      if (response.data && Array.isArray(response.data.data)) {
        return response.data.data.map((item: any) => ({
          id: item.id,
          ...item.attributes
        }));
      }
      return [];
    } catch (error) {
      console.error('Error fetching testimonials:', error);
      return [];
    }
  }
};

export default strapiService;
