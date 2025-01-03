# Quick Start Guide: Image System

## 🚀 Getting Started in 5 Minutes

### 1. Add a New Image

```bash
# 1. Place your image in the correct directory
cp your-image.jpg public/images/candles/

# 2. Run the optimizer
npm run optimize-images
```

### 2. Use the Image in a Component

```tsx
// Product Image
import ProductImage from '../components/ProductImage';

<ProductImage
  productName="Your Product Name"
  imagePath="your-image.jpg"
  priority={true}
/>

// Generic Image
import ImageOptimizer from '../components/ImageOptimizer';

<ImageOptimizer
  src="/images/your-category/your-image.jpg"
  alt="Descriptive alt text"
  sizes="(max-width: 600px) 100vw, 800px"
/>
```

## 📁 Where to Put Images

```
public/images/
├── candles/      → Product images
├── headshots/    → Team photos
├── services/     → Service images
├── blog/         → Blog images
├── backgrounds/  → Background images
└── icons/        → Custom icons
```

## 🎯 Common Use Cases

### 1. Product Images
```tsx
<ProductImage
  productName="Lavender Dream"
  imagePath="lavender-dream.jpg"
  priority={true}
/>
```

### 2. Team Member Photos
```tsx
<ImageOptimizer
  src="/images/headshots/team-member.jpg"
  alt="Jane Doe - Energy Healer"
  sizes="300px"
/>
```

### 3. Blog Post Images
```tsx
<ImageOptimizer
  src="/images/blog/post-image.jpg"
  alt="Descriptive alt text"
  sizes="(max-width: 600px) 100vw, 800px"
/>
```

## ✅ Best Practices Checklist

- [ ] Image is in the correct directory
- [ ] Image is optimized (ran npm run optimize-images)
- [ ] Meaningful alt text provided
- [ ] Appropriate sizes attribute set
- [ ] Priority loading for above-the-fold images
- [ ] Lazy loading for below-the-fold images

## 🔍 SEO Checklist

- [ ] Descriptive file name (e.g., lavender-dream-candle.jpg)
- [ ] Meaningful alt text
- [ ] Image dimensions specified
- [ ] Structured data added for product images
- [ ] Open Graph tags for shared pages

## 🚫 Common Mistakes to Avoid

1. ❌ Using unoptimized images
2. ❌ Missing alt text
3. ❌ Wrong image directory
4. ❌ Non-descriptive file names
5. ❌ Incorrect image dimensions

## 🛠 Troubleshooting

### Image Not Showing
1. Check file path
2. Verify image exists
3. Run optimizer
4. Clear browser cache

### Poor Performance
1. Check image size
2. Verify optimization
3. Use correct loading attribute
4. Implement proper sizes

## 📱 Mobile Testing

1. Use Chrome DevTools mobile emulator
2. Test on real devices
3. Verify responsive images
4. Check loading performance

## 🆘 Need Help?

1. Check [IMAGE_SYSTEM.md](./IMAGE_SYSTEM.md) for detailed documentation
2. Review [IMAGE_SEO.md](./IMAGE_SEO.md) for SEO guidelines
3. See example components in [/docs/examples/](./examples/)
4. Contact the development team

## 🔄 Quick Reference

### Image Sizes
- Product images: 1200x1200px max
- Blog images: 1600x900px max
- Thumbnails: 300x300px
- Team photos: 800x800px

### Loading Strategies
```tsx
// Above the fold
loading="eager"

// Below the fold
loading="lazy"
```

### Responsive Sizes
```tsx
// Full width on mobile, half on tablet, third on desktop
sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"

// Fixed width
sizes="300px"

// Full width
sizes="100vw"
```
