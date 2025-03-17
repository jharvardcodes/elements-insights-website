import { supabase } from '../services/supabaseClient';

// Initial candle data from CandlesPage.tsx
const fanFavorites = [
  {
    name: 'Bamboo Vanilla Blend',
    description: 'Our #1 fan favorite! A perfect harmony of fresh bamboo and warm vanilla creates a soothing, luxurious atmosphere perfect for any room.',
    image: '/images/candles/New/Candle- Green Jar (No Background).png',
    size: '8 oz',
    burn_time: '40-50 hours',
    price: '$24.00',
    is_favorite: true
  },
  {
    name: 'Orange Cedar Fusion',
    description: 'A beloved blend of citrusy orange and woody cedar notes, creating an invigorating yet cozy ambiance that brings the outdoors in.',
    image: '/images/candles/New/Candle- Black Jar (No Background).png',
    size: '8 oz',
    burn_time: '40-50 hours',
    price: '$24.00',
    is_favorite: true
  },
  {
    name: 'Lavender Bamboo Dream',
    description: 'Fan favorite! Calming lavender meets fresh bamboo for the perfect relaxation blend, ideal for bedrooms and spa-like spaces.',
    image: '/images/candles/New/Candle- orange jar (clear Background).png',
    size: '8 oz',
    burn_time: '40-50 hours',
    price: '$24.00',
    is_favorite: true
  }
];

const individualScents = [
  {
    name: 'Lavender Serenity',
    description: 'Classic and calming, our lavender candle brings the soothing essence of French lavender fields to your space.',
    image: '/images/candles/New/Candle- pink jar (clear Background).png',
    size: '8 oz',
    burn_time: '40-50 hours',
    price: '$24.00',
    is_favorite: false
  },
  // ... add all other individual scents here
];

const allCandles = [...fanFavorites, ...individualScents];

async function createCandlesTable() {
  const { error } = await supabase.rpc('create_candles_table');

  if (error) {
    console.error('Error creating table:', error);
    return;
  }
  console.log('Candles table created successfully');
}

async function migrateData() {
  try {
    // First create the table
    await createCandlesTable();

    // Then insert the data
    const { error } = await supabase
      .from('candles')
      .insert(allCandles);

    if (error) {
      console.error('Error inserting data:', error);
      return;
    }

    console.log('Data migration completed successfully');
  } catch (error) {
    console.error('Migration failed:', error);
  }
}

// Run the migration
migrateData();
