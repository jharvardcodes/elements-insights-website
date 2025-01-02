import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  MenuItem,
  Grid,
  Paper,
  Snackbar,
  Alert,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useCandleOrderForm } from '../services/formService';

interface OrderItem {
  name: string;
  quantity: number;
}

const CandleOrderForm: React.FC = () => {
  const theme = useTheme();
  const { state, handleSubmit } = useCandleOrderForm();
  const [orderItems, setOrderItems] = useState<OrderItem[]>([
    { name: '', quantity: 1 },
  ]);
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    notes: '',
  });

  const candleOptions = [
    'Vanilla Bean & Amber',
    'Lavender Fields',
    'Sea Salt & Jasmine',
    'Autumn Spice',
    'Fresh Linen',
    'Eucalyptus Mint',
  ];

  const handleAddItem = () => {
    setOrderItems([...orderItems, { name: '', quantity: 1 }]);
  };

  const handleRemoveItem = (index: number) => {
    const newItems = orderItems.filter((_, i) => i !== index);
    setOrderItems(newItems);
  };

  const handleItemChange = (index: number, field: keyof OrderItem, value: string | number) => {
    const newItems = [...orderItems];
    newItems[index] = { ...newItems[index], [field]: value };
    setOrderItems(newItems);
  };

  const handleContactChange = (field: string, value: string) => {
    setContactInfo({ ...contactInfo, [field]: value });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Format order details
    const orderDetails = orderItems
      .map((item) => `${item.quantity}x ${item.name}`)
      .join('\n');

    // Submit to Formspree
    handleSubmit({
      orderDetails,
      ...contactInfo,
    });
  };

  // Reset form after successful submission
  React.useEffect(() => {
    if (state.succeeded) {
      setOrderItems([{ name: '', quantity: 1 }]);
      setContactInfo({
        name: '',
        email: '',
        phone: '',
        address: '',
        notes: '',
      });
    }
  }, [state.succeeded]);

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 800, mx: 'auto', my: 4 }}>
      <Typography variant="h4" gutterBottom color="primary" align="center">
        Place Your Order
      </Typography>
      
      <form onSubmit={onSubmit}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Order Items
          </Typography>
          {orderItems.map((item, index) => (
            <Grid container spacing={2} key={index} sx={{ mb: 2 }}>
              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  fullWidth
                  label="Candle"
                  value={item.name}
                  onChange={(e) => handleItemChange(index, 'name', e.target.value)}
                  required
                >
                  {candleOptions.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={8} sm={4}>
                <TextField
                  type="number"
                  fullWidth
                  label="Quantity"
                  value={item.quantity}
                  onChange={(e) => handleItemChange(index, 'quantity', parseInt(e.target.value))}
                  InputProps={{ inputProps: { min: 1 } }}
                  required
                />
              </Grid>
              <Grid item xs={4} sm={2}>
                {orderItems.length > 1 && (
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => handleRemoveItem(index)}
                    fullWidth
                    sx={{ height: '100%' }}
                  >
                    Remove
                  </Button>
                )}
              </Grid>
            </Grid>
          ))}
          <Button
            variant="outlined"
            onClick={handleAddItem}
            sx={{ mt: 1 }}
          >
            Add Another Item
          </Button>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Contact Information
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Name"
                value={contactInfo.name}
                onChange={(e) => handleContactChange('name', e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                value={contactInfo.email}
                onChange={(e) => handleContactChange('email', e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Phone"
                value={contactInfo.phone}
                onChange={(e) => handleContactChange('phone', e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Shipping Address"
                multiline
                rows={2}
                value={contactInfo.address}
                onChange={(e) => handleContactChange('address', e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Additional Notes"
                multiline
                rows={3}
                value={contactInfo.notes}
                onChange={(e) => handleContactChange('notes', e.target.value)}
              />
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ textAlign: 'center' }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            disabled={state.submitting}
            sx={{
              px: 6,
              py: 1.5,
              fontSize: '1.1rem',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: theme.shadows[4],
              },
            }}
          >
            {state.submitting ? 'Submitting...' : 'Submit Order'}
          </Button>
        </Box>
      </form>

      <Snackbar
        open={state.succeeded}
        autoHideDuration={6000}
        onClose={() => null}
      >
        <Alert
          severity="success"
          sx={{ width: '100%' }}
        >
          Order submitted successfully! We will contact you soon.
        </Alert>
      </Snackbar>
    </Paper>
  );
};

export default CandleOrderForm;
