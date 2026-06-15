import fs from 'fs';
import google from 'googlethis';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read current products.js
const productsPath = join(__dirname, 'src', 'data', 'products.js');
let productsContent = fs.readFileSync(productsPath, 'utf8');

// We will extract the products array by using a regex or simple eval if we just want the data.
// But it's easier to just do a search for each product name we know has placehold.co
// We'll search for 'https://placehold.co/' in the file, find the name associated with it, search google, and replace.

async function updateImages() {
  const lines = productsContent.split('\n');
  let currentProductName = '';
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.includes('name:')) {
      currentProductName = line.match(/name:\s*'([^']+)'/)?.[1] || '';
    }
    
    if (line.includes('https://placehold.co/')) {
      if (currentProductName) {
        console.log(`Searching for: ${currentProductName}`);
        try {
          const images = await google.image(currentProductName, { safe: false });
          if (images && images.length > 0) {
            // Find a valid image URL (some might be base64, some http)
            const validImage = images.find(img => img.url.startsWith('http') && !img.url.includes('fbsbx'));
            if (validImage) {
              console.log(`Found image: ${validImage.url}`);
              lines[i] = line.replace(/https:\/\/placehold\.co\/[^']*/, validImage.url);
            } else {
              console.log(`No valid http image found for ${currentProductName}`);
            }
          }
        } catch (e) {
          console.error(`Error searching for ${currentProductName}:`, e.message);
        }
        // sleep a bit to avoid rate limits
        await new Promise(r => setTimeout(r, 1500));
      }
    }
  }
  
  fs.writeFileSync(productsPath, lines.join('\n'));
  console.log('Done replacing images');
}

updateImages();
