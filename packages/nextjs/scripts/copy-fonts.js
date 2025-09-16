import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function ensureDirectoryExists(dirPath) {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
        console.log(`Created directory: ${dirPath}`);
    }
}

function copyFile(source, destination) {
    try {
        fs.copyFileSync(source, destination);
        console.log(`Copied: ${source} -> ${destination}`);
    } catch (error) {
        console.error(`Error copying ${source}:`, error.message);
    }
}

function main() {
    console.log('Copying font files...');
    
    // Ensure fonts directory exists
    const fontsDir = path.join(__dirname, '..', 'font', 'fonts');
    ensureDirectoryExists(fontsDir);
    
    // Copy webfont files from dist directory
    const webfontsSource = path.join(__dirname, '..', '..', '..', 'dist', 'webfonts');
    if (fs.existsSync(webfontsSource)) {
        console.log('Copying webfont files...');
        const webfontFiles = fs.readdirSync(webfontsSource);
        webfontFiles.forEach(file => {
            if (file.endsWith('.woff2')) {
                copyFile(
                    path.join(webfontsSource, file),
                    path.join(fontsDir, file)
                );
            }
        });
    } else {
        console.error('Webfonts directory not found. Please ensure dist/webfonts exists.');
    }
    
    console.log('Font files copied successfully!');
}

main();
