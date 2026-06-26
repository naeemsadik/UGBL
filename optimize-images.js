const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const assetsDir = path.join(__dirname, 'assets');

async function optimizeImages() {
  const files = fs.readdirSync(assetsDir);
  
  for (const file of files) {
    if (file.match(/\.(jpg|jpeg|png)$/i)) {
      const filePath = path.join(assetsDir, file);
      const tempPath = path.join(assetsDir, `temp_${file}`);
      const stats = fs.statSync(filePath);
      
      // If image is larger than 1MB
      if (stats.size > 1024 * 1024) {
        console.log(`Optimizing ${file} (${(stats.size / 1024 / 1024).toFixed(2)} MB)...`);
        
        try {
          await sharp(filePath)
            .resize({ width: 1920, withoutEnlargement: true })
            .jpeg({ quality: 80, progressive: true }) // Convert png to jpeg if it's large and resize
            .toFile(tempPath);
            
          fs.unlinkSync(filePath);
          fs.renameSync(tempPath, filePath);
          
          const newStats = fs.statSync(filePath);
          console.log(`  -> Done. New size: ${(newStats.size / 1024 / 1024).toFixed(2)} MB`);
        } catch (err) {
          console.error(`  -> Failed to optimize ${file}:`, err.message);
          if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
        }
      }
    }
  }
}

optimizeImages().then(() => console.log('Image optimization complete.'));
