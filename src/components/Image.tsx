import React from 'react';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
}

const Image: React.FC<ImageProps> = ({ src, ...props }) => {
  const getImagePath = (path: string) => {
    const baseUrl = process.env.PUBLIC_URL || '';
    // Remove leading slash if present to avoid double slashes
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `${baseUrl}/${cleanPath}`;
  };

  return <img src={getImagePath(src)} {...props} />;
};

export default Image;
