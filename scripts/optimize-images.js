const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const SIZES = [300, 600, 900, 1200];
const QUALITY = 80;

async function processImage(inputPath, outputDir) {
  const filename = path.basename(inputPath, path.extname(inputPath));
  const metadata = await sharp(inputPath).metadata();

  // Create output directory if it doesn't exist
  await fs.mkdir(outputDir, { recursive: true });

  // Generate different sizes
  for (const width of SIZES) {
    if (width <= metadata.width) {
      // Regular format (jpg/png)
      await sharp(inputPath)
        .resize(width, null, { withoutEnlargement: true })
        .jpeg({ quality: QUALITY })
        .toFile(path.join(outputDir, `${filename}-${width}w.jpg`));

      // WebP format
      await sharp(inputPath)
        .resize(width, null, { withoutEnlargement: true })
        .webp({ quality: QUALITY })
        .toFile(path.join(outputDir, `${filename}-${width}w.webp`));
    }
  }

  // Generate original size in WebP
  await sharp(inputPath)
    .webp({ quality: QUALITY })
    .toFile(path.join(outputDir, `${filename}.webp`));

  console.log(`✓ Processed ${filename}`);
}

async function processDirectory(inputDir, outputDir) {
  try {
    const files = await fs.readdir(inputDir);
    
    for (const file of files) {
      const inputPath = path.join(inputDir, file);
      const stats = await fs.stat(inputPath);
      
      if (stats.isDirectory()) {
        // Recursively process subdirectories
        await processDirectory(
          inputPath,
          path.join(outputDir, file)
        );
      } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
        await processImage(inputPath, outputDir);
      }
    }
  } catch (error) {
    console.error('Error processing directory:', error);
  }
}

// Add this to package.json scripts:
// "optimize-images": "node scripts/optimize-images.js"
const sourceDir = path.join(__dirname, '../public/images');
const outputDir = path.join(__dirname, '../public/images/optimized');

processDirectory(sourceDir, outputDir)
  .then(() => console.log('Image optimization complete!'))
  .catch(console.error);
