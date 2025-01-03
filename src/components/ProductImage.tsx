import React from 'react';
import { Box, BoxProps } from '@mui/material';
import ImageOptimizer from './ImageOptimizer';

interface ProductImageProps extends Omit<BoxProps, 'component'> {
  productName: string;
  imagePath: string;
  priority?: boolean;
}

const ProductImage: React.FC<ProductImageProps> = ({
  productName,
  imagePath,
  priority = false,
  sx,
  ...props
}) => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        borderRadius: 1,
        overflow: 'hidden',
        ...sx
      }}
      {...props}
    >
      <ImageOptimizer
        src={`/images/candles/${imagePath}`}
        alt={productName}
        loading={priority ? 'eager' : 'lazy'}
        sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
      />
    </Box>
  );
};

export default ProductImage;
