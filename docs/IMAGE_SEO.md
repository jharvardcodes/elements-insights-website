# Image SEO Optimization Guide

## Table of Contents
1. [File Names](#file-names)
2. [Alt Text](#alt-text)
3. [Image Metadata](#image-metadata)
4. [Structured Data](#structured-data)
5. [Performance](#performance)
6. [Implementation Guide](#implementation-guide)

## File Names

### Best Practices
- Use descriptive, keyword-rich names
- Separate words with hyphens
- Keep names concise but meaningful

✅ Good Examples:
```
lavender-dream-candle-16oz.jpg
meditation-workshop-january-2025.jpg
chakra-healing-session.jpg
```

❌ Bad Examples:
```
IMG_12345.jpg
photo1.jpg
DSC_0001.jpg
```

## Alt Text

### Guidelines
- Be descriptive but concise
- Include relevant keywords naturally
- Convey the image's purpose or content
- Keep under 125 characters

```tsx
// ✅ Good Alt Text
<ProductImage
  productName="Lavender Dream Candle"
  alt="Hand-poured lavender soy candle in a clear glass jar with dried lavender garnish"
/>

// ❌ Bad Alt Text
<ProductImage
  productName="Candle"
  alt="product image"
/>
```

### Context-Specific Alt Text
```tsx
// Product Images
alt="16oz Lavender Dream soy candle with dried flowers and wooden wick"

// Team Photos
alt="Jane Doe, Lead Energy Healer, smiling in a meditation pose"

// Decorative Images
alt="" // Use empty alt for purely decorative images
```

## Image Metadata

### Required Metadata
```tsx
<ImageOptimizer
  src="/images/candles/new-candle-designs/lavender-dream.jpg"
  alt="Lavender Dream Candle"
  width={800}
  height={800}
  loading="lazy"
  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
/>
```

### Open Graph Tags
```tsx
// In your page head
<meta property="og:image" content="https://elements-insights.com/images/candles/new-candle-designs/lavender-dream.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="Hand-poured Lavender Dream soy candle" />
```

## Structured Data

### Product Images
```tsx
const productSchema = {
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Lavender Dream Candle",
  "image": [
    "https://elements-insights.com/images/candles/new-candle-designs/lavender-dream-1200w.jpg",
    "https://elements-insights.com/images/candles/new-candle-designs/lavender-dream-800w.jpg",
    "https://elements-insights.com/images/candles/new-candle-designs/lavender-dream-600w.jpg"
  ],
  "description": "Hand-poured lavender soy candle with dried flowers",
  // ... other product details
};
```

### Implementation
```tsx
import { Helmet } from 'react-helmet-async';

function ProductPage() {
  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
        </script>
      </Helmet>
      {/* Page content */}
    </>
  );
}
```

## Performance

### Image Size Optimization
- Implement WebP with fallbacks
- Use responsive images
- Lazy load below-the-fold images
- Specify image dimensions

```tsx
<ImageOptimizer
  src="/images/candles/new-candle-designs/lavender-dream.jpg"
  alt="Lavender Dream Candle"
  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
  loading="lazy"
  width={800}
  height={800}
/>
```

### Core Web Vitals
- Optimize Largest Contentful Paint (LCP)
- Minimize Cumulative Layout Shift (CLS)
- Improve First Contentful Paint (FCP)

## Implementation Guide

### 1. Update Image Component
```tsx
interface SEOImageProps extends ImageOptimizerProps {
  title?: string;
  caption?: string;
  licensingInfo?: string;
}

const SEOImage: React.FC<SEOImageProps> = ({
  src,
  alt,
  title,
  caption,
  licensingInfo,
  ...props
}) => (
  <figure>
    <ImageOptimizer
      src={src}
      alt={alt}
      {...props}
    />
    {(caption || licensingInfo) && (
      <figcaption>
        {caption && <p>{caption}</p>}
        {licensingInfo && (
          <small className="licensing-info">{licensingInfo}</small>
        )}
      </figcaption>
    )}
  </figure>
);
```

### 2. Add Structured Data
```tsx
const ImageStructuredData = ({ image }) => (
  <Helmet>
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org/",
        "@type": "ImageObject",
        "contentUrl": image.url,
        "description": image.alt,
        "caption": image.caption,
        "height": image.height,
        "width": image.width,
        "license": image.license
      })}
    </script>
  </Helmet>
);
```

### 3. Implement Image Sitemap
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>https://elements-insights.com/products/lavender-dream-candle</loc>
    <image:image>
      <image:loc>https://elements-insights.com/images/candles/new-candle-designs/lavender-dream.jpg</image:loc>
      <image:title>Lavender Dream Candle</image:title>
      <image:caption>Hand-poured lavender soy candle with dried flowers</image:caption>
    </image:image>
  </url>
</urlset>
