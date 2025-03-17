import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Switch,
  FormControlLabel,
} from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { candleService, CandleProduct } from '../../services/candleService';
import { useAdmin } from '../../contexts/AdminContext';

const CandleManager: React.FC = () => {
  const { user } = useAdmin();
  const [candles, setCandles] = useState<CandleProduct[]>([]);
  const [open, setOpen] = useState(false);
  const [editingCandle, setEditingCandle] = useState<Partial<CandleProduct> | null>(null);

  useEffect(() => {
    loadCandles();
  }, []);

  const loadCandles = async () => {
    try {
      const data = await candleService.getAllCandles();
      setCandles(data);
    } catch (error) {
      console.error('Error loading candles:', error);
    }
  };

  const handleOpen = (candle?: CandleProduct) => {
    setEditingCandle(candle || {});
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditingCandle(null);
  };

  const handleSave = async () => {
    try {
      if (editingCandle) {
        if ('id' in editingCandle) {
          await candleService.updateCandle(editingCandle.id!, editingCandle);
        } else {
          await candleService.createCandle(editingCandle as Omit<CandleProduct, 'id'>);
        }
        loadCandles();
        handleClose();
      }
    } catch (error) {
      console.error('Error saving candle:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this candle?')) {
      try {
        await candleService.deleteCandle(id);
        loadCandles();
      } catch (error) {
        console.error('Error deleting candle:', error);
      }
    }
  };

  const handleChange = (field: keyof CandleProduct, value: any) => {
    setEditingCandle(prev => ({
      ...prev,
      [field]: value
    }));
  };

  if (!user) return null;

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ mb: 2 }}>
        <Button variant="contained" color="primary" onClick={() => handleOpen()}>
          Add New Candle
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Size</TableCell>
              <TableCell>Fan Favorite</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {candles.map((candle) => (
              <TableRow key={candle.id}>
                <TableCell>{candle.name}</TableCell>
                <TableCell>{candle.price}</TableCell>
                <TableCell>{candle.size}</TableCell>
                <TableCell>
                  <Switch
                    checked={candle.isFavorite || false}
                    onChange={() => 
                      candleService.updateCandle(candle.id, { 
                        isFavorite: !candle.isFavorite 
                      }).then(loadCandles)
                    }
                  />
                </TableCell>
                <TableCell>
                  <IconButton onClick={() => handleOpen(candle)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(candle.id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>
          {editingCandle && 'id' in editingCandle ? 'Edit Candle' : 'Add New Candle'}
        </DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: 2 }}>
            <TextField
              label="Name"
              value={editingCandle?.name || ''}
              onChange={(e) => handleChange('name', e.target.value)}
              fullWidth
            />
            <TextField
              label="Description"
              value={editingCandle?.description || ''}
              onChange={(e) => handleChange('description', e.target.value)}
              multiline
              rows={4}
              fullWidth
            />
            <TextField
              label="Image URL"
              value={editingCandle?.image || ''}
              onChange={(e) => handleChange('image', e.target.value)}
              fullWidth
            />
            <TextField
              label="Size"
              value={editingCandle?.size || ''}
              onChange={(e) => handleChange('size', e.target.value)}
              fullWidth
            />
            <TextField
              label="Burn Time"
              value={editingCandle?.burnTime || ''}
              onChange={(e) => handleChange('burnTime', e.target.value)}
              fullWidth
            />
            <TextField
              label="Price"
              value={editingCandle?.price || ''}
              onChange={(e) => handleChange('price', e.target.value)}
              fullWidth
            />
            <FormControlLabel
              control={
                <Switch
                  checked={editingCandle?.isFavorite || false}
                  onChange={(e) => handleChange('isFavorite', e.target.checked)}
                />
              }
              label="Fan Favorite"
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave} variant="contained" color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default CandleManager;
