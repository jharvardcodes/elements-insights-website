// Example 1: Basic Product Image
import ProductImage from '../components/ProductImage';

function ProductCard() {
  return (
    <ProductImage
      productName="Lavender Dream Candle"
      imagePath="lavender-dream.jpg"
      priority={true}
    />
  );
}

// Example 2: Team Member Photo
import ImageOptimizer from '../components/ImageOptimizer';

function TeamMember() {
  return (
    <ImageOptimizer
      src="/images/headshots/jane-doe.jpg"
      alt="Jane Doe - CEO"
      sizes="(max-width: 600px) 100vw, 300px"
      loading="lazy"
    />
  );
}

// Example 3: Background Image
function HeroSection() {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '60vh',
        width: '100%',
        overflow: 'hidden',
      }}
    >
      <ImageOptimizer
        src="/images/backgrounds/hero.jpg"
        alt=""
        sizes="100vw"
        loading="eager"
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
          background: 'rgba(0,0,0,0.4)',
        }}
      >
        <Typography variant="h1">Welcome to Elements Insights</Typography>
      </Box>
    </Box>
  );
}

// Example 4: Blog Post Image
function BlogPostImage({ src, alt, caption }) {
  return (
    <figure>
      <ImageOptimizer
        src={`/images/blog/${src}`}
        alt={alt}
        sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 800px"
        loading="lazy"
      />
      {caption && (
        <figcaption>
          <Typography variant="caption" color="text.secondary">
            {caption}
          </Typography>
        </figcaption>
      )}
    </figure>
  );
}

// Example 5: Gallery Image Grid
function ImageGallery({ images }) {
  return (
    <Grid container spacing={2}>
      {images.map((image, index) => (
        <Grid item xs={12} sm={6} md={4} key={image.id}>
          <ImageOptimizer
            src={`/images/gallery/${image.filename}`}
            alt={image.description}
            sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
            loading="lazy"
          />
        </Grid>
      ))}
    </Grid>
  );
}
