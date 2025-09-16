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

function copyDirectory(source, destination) {
    if (!fs.existsSync(source)) {
        console.error(`Source directory does not exist: ${source}`);
        return;
    }

    ensureDirectoryExists(destination);
    
    const files = fs.readdirSync(source);
    files.forEach(file => {
        const sourcePath = path.join(source, file);
        const destPath = path.join(destination, file);
        
        if (fs.statSync(sourcePath).isDirectory()) {
            copyDirectory(sourcePath, destPath);
        } else {
            copyFile(sourcePath, destPath);
        }
    });
}

function main() {
    console.log('Building Hikasami Sans package...');
    
    // Create dist directory
    const distDir = path.join(__dirname, '..', 'dist');
    ensureDirectoryExists(distDir);
    
    // Copy font files to dist
    const fontDir = path.join(__dirname, '..', 'font');
    if (fs.existsSync(fontDir)) {
        console.log('Copying font files to dist...');
        copyDirectory(fontDir, distDir);
    }
    
    // Copy other necessary files
    const filesToCopy = [
        'font.d.ts',
        'README.md',
        'LICENSE.TXT'
    ];
    
    filesToCopy.forEach(file => {
        const sourcePath = path.join(__dirname, '..', file);
        const destPath = path.join(distDir, file);
        if (fs.existsSync(sourcePath)) {
            copyFile(sourcePath, destPath);
        }
    });
    
    // Update package.json for dist
    const packageJsonPath = path.join(__dirname, '..', 'package.json');
    const distPackageJsonPath = path.join(distDir, 'package.json');
    
    if (fs.existsSync(packageJsonPath)) {
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
        
        // Update paths for dist
        packageJson.main = './font.js';
        packageJson.module = './font.js';
        packageJson.types = './font.d.ts';
        
        // Update exports
        packageJson.exports = {
            ".": {
                "types": "./font.d.ts",
                "default": "./font.js"
            },
            "./sans": {
                "types": "./font.d.ts",
                "default": "./sans.js"
            },
            "./sans-non-variable": {
                "types": "./font.d.ts",
                "default": "./sans-non-variable.js"
            }
        };
        
        fs.writeFileSync(distPackageJsonPath, JSON.stringify(packageJson, null, 2));
        console.log('Updated package.json for dist');
    }
    
    console.log('Build completed successfully!');
    console.log('Package is ready for publishing.');
}

main();
