# Image System Documentation

## Table of Contents
1. [Directory Structure](#directory-structure)
2. [Image Optimization](#image-optimization)
3. [Components](#components)
4. [Usage Guidelines](#usage-guidelines)
5. [Best Practices](#best-practices)
6. [Troubleshooting](#troubleshooting)

## Directory Structure

```
elements-insights-website/
├── public/
│   ├── images/
│   │   ├── candles/          # Product images
│   │   │   └── new-candle-designs/
│   │   ├── headshots/        # Team member photos
│   │   ├── services/         # Service-related images
│   │   ├── blog/             # Blog post images
│   │   ├── backgrounds/      # Background images
│   │   ├── icons/           # Custom icons
│   │   └── optimized/       # Optimized versions (generated)
└── src/
    ├── assets/              # UI-related images
    └── components/
        ├── ImageOptimizer.tsx
        └── ProductImage.tsx
```

## Image Optimization

### Automatic Optimization Process

The system automatically:
- Generates multiple sizes (300w, 600w, 900w, 1200w)
- Converts images to WebP format with fallbacks
- Optimizes file size while maintaining quality
- Creates responsive variants for different screen sizes

### Running the Optimizer

```bash
# Install dependencies
npm install

# Run the optimizer
npm run optimize-images
```

### Configuration

The optimizer settings can be adjusted in `scripts/optimize-images.js`:

```javascript
const SIZES = [300, 600, 900, 1200]; // Image widths
const QUALITY = 80;                   // Output quality (0-100)
```

## Components

### ImageOptimizer

Core component that handles:
- Responsive images
- WebP conversion with fallbacks
- Lazy loading
- Proper aspect ratio maintenance

```tsx
import ImageOptimizer from '../components/ImageOptimizer';

<ImageOptimizer
  src="/images/candles/new-candle-designs/lavender-dream.jpg"
  alt="Lavender Dream Candle"
  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
  loading="lazy"
/>
```

### ProductImage

Specialized component for product images with:
- Consistent styling
- Proper aspect ratio
- Optional priority loading

```tsx
import ProductImage from '../components/ProductImage';

<ProductImage
  productName="Lavender Dream Candle"
  imagePath="new-candle-designs/lavender-dream.jpg"
  priority={true}
/>
```

## Usage Guidelines

### 1. Image Placement

- **UI Elements (<100KB)**: Place in `/src/assets/`
  ```tsx
  import logo from '../assets/logo.png';
  ```

- **Content Images**: Place in `/public/images/[category]/`
  ```tsx
  <img src="/images/candles/new-candle-designs/lavender-dream.jpg" />
  ```

### 2. Image Formats

- **Photos**: Use JPG/JPEG
- **Transparency**: Use PNG
- **Icons/Graphics**: Use SVG when possible
- **Modern Browsers**: WebP (automatically generated)

### 3. Image Sizes

Recommended maximum dimensions:
- Product images: 1200x1200px
- Blog images: 1600x900px
- Thumbnails: 300x300px
- Background images: 1920x1080px

## Best Practices

1. **Original Images**
   - Keep high-quality originals in `/public/images/originals/`
   - Use descriptive filenames: `new-candle-designs/lavender-dream-candle.jpg`
   - Maintain aspect ratios appropriate for content type

2. **Performance**
   - Use `priority={true}` for above-the-fold images
   - Lazy load below-the-fold images
   - Provide proper image dimensions to prevent layout shift

3. **Accessibility**
   - Always include meaningful alt text
   - Use appropriate image roles
   - Ensure sufficient color contrast

4. **Responsive Images**
   - Use appropriate sizes attribute
   - Consider mobile-first approach
   - Test on multiple devices

## Troubleshooting

### Common Issues

1. **Images Not Loading**
   - Check file paths
   - Verify image exists in correct directory
   - Ensure optimization script has run

2. **Poor Performance**
   - Check image sizes
   - Verify lazy loading implementation
   - Consider using priority loading for critical images

3. **Layout Shifts**
   - Add width/height attributes
   - Use aspect ratio boxes
   - Implement proper loading strategies

### Debug Tips

1. Check optimized image output:
```bash
ls -la public/images/optimized
```

2. Verify WebP support:
```tsx
const hasWebP = () => {
  const elem = document.createElement('canvas');
  return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
};
```

3. Monitor network requests:
- Use browser DevTools
- Check image loading order
- Verify correct image sizes being served

### Need Help?

For additional assistance:
1. Check the React documentation
2. Review Material-UI image handling
3. Consult the sharp documentation
4. Open an issue in the project repository

## Future Improvements

- [ ] Add image upload component
- [ ] Implement image compression on upload
- [ ] Add image cropping tools
- [ ] Integrate with CDN
- [ ] Add image caching strategy
