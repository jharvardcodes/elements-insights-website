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
  FormControl,
  InputLabel,
  Select,
  Chip,
  FormHelperText,
  Divider,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useCandleOrderForm } from '../services/formService';

interface OrderItem {
  scents: string[];
  quantity: number;
  isCustomBlend: boolean;
}

const CandleOrderForm: React.FC = () => {
  const theme = useTheme();
  const { state, handleSubmit } = useCandleOrderForm();
  const [orderItems, setOrderItems] = useState<OrderItem[]>([
    { scents: [], quantity: 1, isCustomBlend: false },
  ]);
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    notes: '',
  });

  // Available scents
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

  // Fan favorite blends
  const favoriteBlends = [
    'Bamboo Vanilla',
    'Orange Cedar',
    'Lavender Bamboo'
  ];

  const handleAddItem = () => {
    setOrderItems([...orderItems, { scents: [], quantity: 1, isCustomBlend: false }]);
  };

  const handleRemoveItem = (index: number) => {
    const newItems = orderItems.filter((_, i) => i !== index);
    setOrderItems(newItems);
  };

  const handleItemChange = (index: number, field: keyof OrderItem, value: any) => {
    const newItems = [...orderItems];
    newItems[index] = { ...newItems[index], [field]: value };
    setOrderItems(newItems);
  };

  const handleScentChange = (index: number, scents: string[]) => {
    const newItems = [...orderItems];
    newItems[index] = { ...newItems[index], scents };
    setOrderItems(newItems);
  };

  const handleContactChange = (field: string, value: string) => {
    setContactInfo({ ...contactInfo, [field]: value });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Format order details
    const orderDetails = orderItems
      .map((item) => {
        const scentsStr = item.scents.join(' + ');
        return `${item.quantity}x ${item.isCustomBlend ? 'Custom Blend: ' : ''}${scentsStr}`;
      })
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
      setOrderItems([{ scents: [], quantity: 1, isCustomBlend: false }]);
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
            <Box key={index} sx={{ mb: 4, p: 2, border: '1px solid', borderColor: 'divider', borderRadius: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel>Order Type</InputLabel>
                    <Select
                      value={item.isCustomBlend ? 'custom' : 'single'}
                      onChange={(e) => handleItemChange(index, 'isCustomBlend', e.target.value === 'custom')}
                      label="Order Type"
                    >
                      <MenuItem value="single">Single Scent or Fan Favorite</MenuItem>
                      <MenuItem value="custom">Custom Blend (2-3 scents)</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel>{item.isCustomBlend ? 'Select 2-3 Scents' : 'Select Scent'}</InputLabel>
                    <Select
                      multiple={item.isCustomBlend}
                      value={item.scents}
                      onChange={(e) => {
                        const value = e.target.value as string[];
                        if (item.isCustomBlend && value.length > 3) return;
                        handleScentChange(index, typeof value === 'string' ? [value] : value);
                      }}
                      label={item.isCustomBlend ? 'Select 2-3 Scents' : 'Select Scent'}
                      renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                          {(selected as string[]).map((value) => (
                            <Chip key={value} label={value} />
                          ))}
                        </Box>
                      )}
                    >
                      {!item.isCustomBlend && (
                        <>
                          <Typography variant="subtitle2" sx={{ px: 2, py: 1, color: 'primary.main' }}>
                            Fan Favorites
                          </Typography>
                          {favoriteBlends.map((scent) => (
                            <MenuItem key={scent} value={scent}>
                              {scent}
                            </MenuItem>
                          ))}
                          <Divider />
                          <Typography variant="subtitle2" sx={{ px: 2, py: 1, color: 'primary.main' }}>
                            Single Scents
                          </Typography>
                        </>
                      )}
                      {singleScents.map((scent) => (
                        <MenuItem key={scent} value={scent}>
                          {scent}
                        </MenuItem>
                      ))}
                    </Select>
                    {item.isCustomBlend && (
                      <FormHelperText>
                        Select between 2 and 3 scents for your custom blend
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>

                <Grid item xs={8}>
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

                <Grid item xs={4}>
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
            </Box>
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
                label="Special Instructions or Notes"
                multiline
                rows={3}
                value={contactInfo.notes}
                onChange={(e) => handleContactChange('notes', e.target.value)}
                placeholder="Add any special instructions or notes about your order here..."
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
          >
            {state.submitting ? 'Submitting...' : 'Place Order'}
          </Button>
        </Box>
      </form>

      <Snackbar
        open={state.succeeded}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" sx={{ width: '100%' }}>
          Thank you for your order! We'll contact you soon with confirmation details.
        </Alert>
      </Snackbar>
    </Paper>
  );
};

export default CandleOrderForm;
