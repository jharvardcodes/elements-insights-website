import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Box as MuiBox,
  Card,
  CardContent,
  useTheme,
  Chip,
  Box
} from '@mui/material';
import { motion } from 'framer-motion';
import CandleOrderForm from '../components/CandleOrderForm';
import Image from '../components/Image';

// Fan favorite blends
const fanFavorites = [
  {
    id: 'blend-1',
    name: 'Bamboo Vanilla Blend',
    description: 'Our #1 fan favorite! A perfect harmony of fresh bamboo and warm vanilla creates a soothing, luxurious atmosphere perfect for any room.',
    image: '/images/candles/New/Candle- Green Jar (No Background).png',
    size: '8 oz',
    burnTime: '40-50 hours',
    price: '$22.00',
    isFavorite: true
  },
  {
    id: 'blend-2',
    name: 'Orange Cedar Fusion',
    description: 'A beloved blend of citrusy orange and woody cedar notes, creating an invigorating yet cozy ambiance that brings the outdoors in.',
    image: '/images/candles/New/Candle- Black Jar (No Background).png',
    size: '8 oz',
    burnTime: '40-50 hours',
    price: '$22.00',
    isFavorite: true
  },
  {
    id: 'blend-3',
    name: 'Lavender Bamboo Dream',
    description: 'Fan favorite! Calming lavender meets fresh bamboo for the perfect relaxation blend, ideal for bedrooms and spa-like spaces.',
    image: '/images/candles/New/Candle- orange jar (clear Background).png',
    size: '8 oz',
    burnTime: '40-50 hours',
    price: '$22.00',
    isFavorite: true
  }
];

// Individual scent candles
const candleProducts = [
  {
    id: 'scent-1',
    name: 'Lavender Serenity',
    description: 'Classic and calming, our lavender candle brings the soothing essence of French lavender fields to your space.',
    image: '/images/candles/New/Candle- pink jar (clear Background).png',
    size: '8 oz',
    burnTime: '40-50 hours',
    price: '$22.00'
  },
  {
    id: 'scent-2',
    name: 'Pure Vanilla',
    description: 'Rich and comforting, this warm vanilla scent creates an inviting atmosphere with its sweet, creamy notes.',
    image: '/images/candles/New/Candle- Green Jar (No Background).png',
    size: '8 oz',
    burnTime: '40-50 hours',
    price: '$22.00'
  },
  {
    id: 'scent-3',
    name: 'Fresh Bamboo',
    description: 'Clean and refreshing, our bamboo scent brings a zen-like tranquility with its green, natural aroma.',
    image: '/images/candles/New/Candle- Black Jar (No Background).png',
    size: '8 oz',
    burnTime: '40-50 hours',
    price: '$22.00'
  },
  {
    id: 'scent-4',
    name: 'Cedar Wood',
    description: 'Earthy and grounding, this woody scent evokes the feeling of a peaceful forest retreat.',
    image: '/images/candles/New/Candle- orange jar (clear Background).png',
    size: '8 oz',
    burnTime: '40-50 hours',
    price: '$22.00'
  },
  {
    id: 'scent-5',
    name: 'Black Pepper',
    description: 'Spicy and sophisticated, our black pepper candle adds warmth and intrigue to any space.',
    image: '/images/candles/New/Candle- pink jar (clear Background).png',
    size: '8 oz',
    burnTime: '40-50 hours',
    price: '$22.00'
  },
  {
    id: 'scent-6',
    name: 'Sweet Orange',
    description: 'Bright and uplifting, this citrus scent brings energy and cheerfulness to your home.',
    image: '/images/candles/New/Candle- Green Jar (No Background).png',
    size: '8 oz',
    burnTime: '40-50 hours',
    price: '$22.00'
  },
  {
    id: 'scent-7',
    name: 'Crisp Apple',
    description: 'Fresh and fruity, our apple candle captures the essence of a crisp autumn day.',
    image: '/images/candles/New/Candle- Black Jar (No Background).png',
    size: '8 oz',
    burnTime: '40-50 hours',
    price: '$22.00'
  },
  {
    id: 'scent-8',
    name: 'Sweet Pear',
    description: 'Delicate and sweet, this pear scent offers a light, fresh fragrance perfect for any season.',
    image: '/images/candles/New/Candle- orange jar (clear Background).png',
    size: '8 oz',
    burnTime: '40-50 hours',
    price: '$22.00'
  },
  {
    id: 'scent-9',
    name: 'Warm Cinnamon',
    description: 'Cozy and inviting, our cinnamon candle creates a warm, spicy atmosphere reminiscent of fresh-baked treats.',
    image: '/images/candles/New/Candle- pink jar (clear Background).png',
    size: '8 oz',
    burnTime: '40-50 hours',
    price: '$22.00'
  },
  {
    id: 'scent-10',
    name: 'Fresh Eucalyptus',
    description: 'Invigorating and clean, this eucalyptus scent brings a spa-like freshness to your space.',
    image: '/images/candles/New/Candle- Green Jar (No Background).png',
    size: '8 oz',
    burnTime: '40-50 hours',
    price: '$22.00'
  },
  {
    id: 'scent-11',
    name: 'Desert Sage',
    description: 'Earthy and herbaceous, our sage candle creates a grounding atmosphere perfect for meditation and relaxation.',
    image: '/images/candles/New/Candle- Black Jar (No Background).png',
    size: '8 oz',
    burnTime: '40-50 hours',
    price: '$22.00'
  },
  {
    id: 'scent-12',
    name: 'Citronella Fresh',
    description: 'Fresh and natural, this outdoor-friendly scent helps create a pleasant environment on your patio or deck.',
    image: '/images/candles/New/Candle- orange jar (clear Background).png',
    size: '8 oz',
    burnTime: '40-50 hours',
    price: '$22.00'
  },
  {
    id: 'scent-13',
    name: 'Cool Peppermint',
    description: 'Refreshing and energizing, our peppermint candle brings a cool, invigorating burst of freshness to any room.',
    image: '/images/candles/New/Candle- pink jar (clear Background).png',
    size: '8 oz',
    burnTime: '40-50 hours',
    price: '$22.00'
  }
];

const singleScents = [
  'Lavender',
  'Vanilla',
  'Bamboo',
  'Cedar',
  'Pepper',
  'Orange',
  'Apple',
  'Pear',
  'Cinnamon',
  'Eucalyptus',
  'Sage',
  'Citronella',
  'Peppermint'
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

      {/* Fan Favorites Section */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" color="primary" gutterBottom align="center">
          Fan Favorites
        </Typography>
        <Typography variant="body1" color="text.secondary" align="center" sx={{ mb: 4 }}>
          Our most loved signature blends
        </Typography>
        <Grid container spacing={4}>
          {fanFavorites.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <Card
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    transition: 'transform 0.3s ease-in-out',
                    boxShadow: (theme) => theme.shadows[4]
                  }
                }}
              >
                {product.isFavorite && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      bgcolor: 'primary.main',
                      color: 'white',
                      px: 2,
                      py: 0.5,
                      borderRadius: '16px',
                      zIndex: 1,
                    }}
                  >
                    <Typography variant="caption">Fan Favorite</Typography>
                  </Box>
                )}
                <Box
                  sx={{
                    pt: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </Box>
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {product.description}
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="body2" color="text.secondary">
                      Size: {product.size}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Burn Time: {product.burnTime}
                    </Typography>
                    <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
                      {product.price}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* All Scents Section */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" color="primary" gutterBottom align="center">
          Single Scents
        </Typography>
        <Typography variant="body1" color="text.secondary" align="center" sx={{ mb: 4 }}>
          Explore our collection of premium individual fragrances
        </Typography>
        <Grid container spacing={4}>
          {candleProducts.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Card
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    transition: 'transform 0.3s ease-in-out',
                    boxShadow: (theme) => theme.shadows[4]
                  }
                }}
              >
                <Box
                  sx={{
                    pt: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </Box>
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {product.description}
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="body2" color="text.secondary">
                      Size: {product.size}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Burn Time: {product.burnTime}
                    </Typography>
                    <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
                      {product.price}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

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

        {/* Available Scents Section */}
        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" color="primary" gutterBottom>
            Available Scents
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            Choose from our collection of premium fragrances or create your own custom blend
          </Typography>
          
          <Grid container spacing={2} justifyContent="center" sx={{ mb: 6 }}>
            {singleScents.map((scent, index) => (
              <Grid item key={index}>
                <Chip
                  label={scent}
                  color="primary"
                  variant="outlined"
                  sx={{
                    fontSize: '1rem',
                    py: 2.5,
                    borderRadius: '16px'
                  }}
                />
              </Grid>
            ))}
          </Grid>

          <Typography variant="h6" color="text.secondary" gutterBottom>
            Pricing & Options
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            Standard 8 oz jar: $22.00
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
            Custom jar options available upon request - pricing to be determined based on selection
          </Typography>

          <Typography variant="h6" color="text.secondary" gutterBottom>
            Custom Blends
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            Create your perfect scent by combining 2-3 fragrances
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
            Please allow 2-3 weeks notice for custom scent orders
          </Typography>
        </Box>
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
    </MuiBox>
  );
};

export default CandlesPage;
