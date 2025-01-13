import React, { useState, useEffect } from 'react';
import {
  Box,
  IconButton,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Tooltip,
} from '@mui/material';
import { Edit as EditIcon } from '@mui/icons-material';
import { contentService } from '../services/contentService';
import { useAdmin } from '../contexts/AdminContext';

type ContentVariant = 
  | 'h1' 
  | 'h2' 
  | 'h3' 
  | 'h4' 
  | 'h5' 
  | 'h6' 
  | 'subtitle1' 
  | 'subtitle2' 
  | 'body1' 
  | 'body2' 
  | 'button';

interface EditableContentProps {
  pageName: string;
  contentKey: string;
  defaultValue?: string;
  variant?: ContentVariant;
  multiline?: boolean;
}

export const EditableContent: React.FC<EditableContentProps> = ({
  pageName,
  contentKey,
  defaultValue = '',
  variant = 'body1',
  multiline = false,
}) => {
  const { user } = useAdmin();
  const [content, setContent] = useState(defaultValue);
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    loadContent();
  }, [pageName, contentKey]);

  const loadContent = async () => {
    try {
      const value = await contentService.getContent(pageName, contentKey);
      setContent(value || defaultValue);
    } catch (error) {
      console.error('Error loading content:', error);
    }
  };

  const handleSave = async () => {
    try {
      await contentService.updateContent(pageName, contentKey, editValue);
      setContent(editValue);
      setIsEditing(false);
    } catch (error) {
      console.error('Error saving content:', error);
    }
  };

  const handleEdit = () => {
    setEditValue(content);
    setIsEditing(true);
  };

  return (
    <Box
      position="relative"
      onMouseEnter={() => user && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{ 
        '&:hover': user ? {
          backgroundColor: 'rgba(0, 0, 0, 0.02)',
          borderRadius: 1,
        } : {}
      }}
    >
      <Typography variant={variant}>
        {content || defaultValue}
      </Typography>

      {user && isHovered && (
        <Tooltip title="Edit content">
          <IconButton
            size="small"
            onClick={handleEdit}
            sx={{
              position: 'absolute',
              top: -20,
              right: -20,
              backgroundColor: 'background.paper',
              boxShadow: 1,
              '&:hover': {
                backgroundColor: 'primary.light',
              },
            }}
          >
            <EditIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      )}

      <Dialog open={isEditing} onClose={() => setIsEditing(false)} maxWidth="md" fullWidth>
        <DialogTitle>Edit Content</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            multiline={multiline}
            rows={multiline ? 4 : 1}
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            variant="outlined"
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsEditing(false)}>Cancel</Button>
          <Button onClick={handleSave} variant="contained" color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
