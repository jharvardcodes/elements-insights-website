import React from 'react';
import { Box } from '@mui/material';

interface ImageOptimizerProps {
  src: string;
  alt: string;
  sizes?: string;
  className?: string;
  style?: React.CSSProperties;
  loading?: 'lazy' | 'eager';
}

const generateSrcSet = (src: string): string => {
  const extension = src.split('.').pop();
  const basePath = src.substring(0, src.lastIndexOf('.'));
  
  return `
    ${basePath}-300w.${extension} 300w,
    ${basePath}-600w.${extension} 600w,
    ${basePath}-900w.${extension} 900w,
    ${src} 1200w
  `.trim();
};

const ImageOptimizer: React.FC<ImageOptimizerProps> = ({
  src,
  alt,
  sizes = '(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw',
  className,
  style,
  loading = 'lazy'
}) => {
  // Check if the image is from the public folder
  const isPublicImage = src.startsWith('/');
  const imagePath = isPublicImage ? process.env.PUBLIC_URL + src : src;
  
  // Generate WebP version path
  const webpSrc = imagePath.replace(/\.(jpg|jpeg|png)$/, '.webp');
  const webpSrcSet = generateSrcSet(webpSrc);
  const fallbackSrcSet = generateSrcSet(imagePath);

  return (
    <Box
      component="picture"
      className={className}
      style={style}
    >
      {/* WebP source */}
      <source
        type="image/webp"
        srcSet={webpSrcSet}
        sizes={sizes}
      />
      
      {/* Fallback image source */}
      <source
        type={`image/${imagePath.split('.').pop()}`}
        srcSet={fallbackSrcSet}
        sizes={sizes}
      />
      
      {/* Fallback img element */}
      <Box
        component="img"
        src={imagePath}
        alt={alt}
        loading={loading}
        sx={{
          maxWidth: '100%',
          height: 'auto',
          display: 'block',
        }}
      />
    </Box>
  );
};

export default ImageOptimizer;
