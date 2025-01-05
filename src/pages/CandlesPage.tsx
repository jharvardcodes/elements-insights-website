import React from 'react';
import {
  Box as MuiBox,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import CandleOrderForm from '../components/CandleOrderForm';
import Image from '../components/Image';

// Candle product data with realistic scents and descriptions
const candleProducts = [
  {
    id: 1,
    name: 'Vanilla Bean & Amber',
    description: 'A warm, inviting blend of Madagascar vanilla bean and rich amber, creating a cozy atmosphere perfect for relaxation.',
    image: '/images/candles/vanilla-amber.jpg',
    price: '$28.99',
    burnTime: '45-50 hours',
    size: '9 oz',
  },
  {
    id: 2,
    name: 'Lavender Fields',
    description: 'Transport yourself to the rolling lavender fields of Provence with this calming blend of fresh lavender and sweet herbs.',
    image: '/images/candles/lavender-fields.jpg',
    price: '$28.99',
    burnTime: '45-50 hours',
    size: '9 oz',
  },
  {
    id: 3,
    name: 'Sea Salt & Jasmine',
    description: 'A fresh, floral combination of ocean breeze, sea salt, and delicate jasmine blooms. Perfect for creating a spa-like atmosphere.',
    image: '/images/candles/sea-salt-jasmine.jpg',
    price: '$28.99',
    burnTime: '45-50 hours',
    size: '9 oz',
  },
  {
    id: 4,
    name: 'Autumn Spice',
    description: 'Warm cinnamon, nutmeg, and clove blend with vanilla to create the perfect cozy fall atmosphere.',
    image: '/images/candles/autumn-spice.jpg',
    price: '$28.99',
    burnTime: '45-50 hours',
    size: '9 oz',
  },
  {
    id: 5,
    name: 'Fresh Linen',
    description: 'Clean and crisp notes of fresh cotton, warm sunshine, and gentle breeze. Like freshly dried linens on a spring day.',
    image: '/images/candles/fresh-linen.jpg',
    price: '$28.99',
    burnTime: '45-50 hours',
    size: '9 oz',
  },
  {
    id: 6,
    name: 'Eucalyptus Mint',
    description: 'Refreshing blend of eucalyptus and spearmint, perfect for creating an invigorating and uplifting atmosphere.',
    image: '/images/candles/eucalyptus-mint.jpg',
    price: '$28.99',
    burnTime: '45-50 hours',
    size: '9 oz',
  },
];

const CandlesPage: React.FC = () => {
  const theme = useTheme();

  return (
    <MuiBox>
      {/* Hero Section */}
      <MuiBox
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
          background: `linear-gradient(to bottom, ${theme.palette.primary.main}20, ${theme.palette.background.default})`,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="primary"
            gutterBottom
            sx={{
              fontWeight: 600,
              textShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            Luxury Handcrafted Candles
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
            sx={{ mb: 4, maxWidth: '800px', mx: 'auto' }}
          >
            Experience the perfect blend of aromatherapy and ambiance with our premium soy wax candles.
            Each candle is hand-poured with care to create a long-lasting, clean burn.
          </Typography>
        </Container>
      </MuiBox>

      {/* Products Grid */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {candleProducts.map((product, index) => (
            <Grid
              item
              key={product.id}
              xs={12}
              sm={6}
              md={4}
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.02)',
                  },
                }}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: '100%',
                    height: '300px',
                    objectFit: 'cover',
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {product.description}
                  </Typography>
                  <MuiBox sx={{ mt: 2 }}>
                    <Typography variant="body2" color="text.secondary">
                      Size: {product.size}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Burn Time: {product.burnTime}
                    </Typography>
                    <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
                      {product.price}
                    </Typography>
                  </MuiBox>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Product Information */}
        <MuiBox sx={{ mt: 8, mb: 6, textAlign: 'center' }}>
          <Typography variant="h4" color="primary" gutterBottom>
            About Our Candles
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Premium Soy Wax
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Made with 100% natural soy wax for a clean, long-lasting burn
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Hand-Poured
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Each candle is carefully crafted by hand in small batches
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Premium Fragrances
              </Typography>
              <Typography variant="body2" color="text.secondary">
                High-quality fragrance oils for the perfect scent throw
              </Typography>
            </Grid>
          </Grid>
        </MuiBox>

        {/* Call to Action */}
        <MuiBox 
          sx={{ 
            mt: 8, 
            textAlign: 'center',
            p: 6,
            borderRadius: 2,
            bgcolor: 'background.paper',
            boxShadow: 1,
          }}
        >
          <Typography variant="h4" color="primary" gutterBottom>
            Ready to Order?
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 4, maxWidth: '600px', mx: 'auto' }}>
            Fill out the order form below and we'll get back to you with confirmation and payment details.
          </Typography>
          <CandleOrderForm />
        </MuiBox>
      </Container>
    </MuiBox>
  );
};

export default CandlesPage;
