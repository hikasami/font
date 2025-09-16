import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function testFileExists(filePath, description) {
    if (fs.existsSync(filePath)) {
        console.log(`${description}: ${filePath}`);
        return true;
    } else {
        console.log(`${description}: ${filePath} - MISSING`);
        return false;
    }
}

function testPackageJson() {
    console.log('\nTesting package.json...');
    const packageJsonPath = path.join(__dirname, '..', 'package.json');
    
    if (!fs.existsSync(packageJsonPath)) {
        console.log('package.json not found');
        return false;
    }
    
    try {
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
        
        const requiredFields = ['name', 'version', 'main', 'types', 'exports'];
        let allFieldsPresent = true;
        
        requiredFields.forEach(field => {
            if (packageJson[field]) {
                console.log(`${field}: ${packageJson[field]}`);
            } else {
                console.log(`✗ ${field}: MISSING`);
                allFieldsPresent = false;
            }
        });
        
        return allFieldsPresent;
    } catch (error) {
        console.log(`Error parsing package.json: ${error.message}`);
        return false;
    }
}

function testFontFiles() {
    console.log('\nTesting font files...');
    const fontDir = path.join(__dirname, '..', 'font', 'fonts');
    
    const requiredFonts = [
        'Hikasami-Regular.woff2',
        'Hikasami-Medium.woff2',
        'Hikasami-SemiBold.woff2',
        'Hikasami-Bold.woff2',
        'Hikasami-VF.woff2'
    ];
    
    let allFontsPresent = true;
    
    requiredFonts.forEach(font => {
        const fontPath = path.join(fontDir, font);
        if (testFileExists(fontPath, font)) {
            const stats = fs.statSync(fontPath);
            console.log(`  Size: ${(stats.size / 1024).toFixed(2)} KB`);
        } else {
            allFontsPresent = false;
        }
    });
    
    return allFontsPresent;
}

function testExports() {
    console.log('\nTesting export files...');
    const fontDir = path.join(__dirname, '..', 'font');
    
    const requiredExports = [
        'font.js',
        'sans.js',
        'sans-non-variable.js',
        'font.d.ts'
    ];
    
    let allExportsPresent = true;
    
    requiredExports.forEach(exportFile => {
        const exportPath = path.join(fontDir, exportFile);
        if (!testFileExists(exportPath, exportFile)) {
            allExportsPresent = false;
        }
    });
    
    return allExportsPresent;
}

function testImports() {
    console.log('\nTesting import syntax...');
    const fontPath = path.join(__dirname, '..', 'font', 'font.js');
    
    if (!fs.existsSync(fontPath)) {
        console.log('font.js not found for import testing');
        return false;
    }
    
    try {
        const content = fs.readFileSync(fontPath, 'utf8');
        
        // Check for required imports
        if (content.includes('import localFont from "next/font/local"')) {
            console.log('Correct Next.js font import');
        } else {
            console.log('Missing Next.js font import');
            return false;
        }
        
        if (content.includes('export const HikasamiSans')) {
            console.log('Correct export syntax');
        } else {
            console.log('Missing or incorrect export syntax');
            return false;
        }
        
        return true;
    } catch (error) {
        console.log(`✗ Error reading font.js: ${error.message}`);
        return false;
    }
}

function main() {
    console.log('Hikasami Sans Package Test');
    console.log('='.repeat(40));
    
    const tests = [
        { name: 'Package.json', fn: testPackageJson },
        { name: 'Font Files', fn: testFontFiles },
        { name: 'Export Files', fn: testExports },
        { name: 'Import Syntax', fn: testImports }
    ];
    
    let passed = 0;
    const total = tests.length;
    
    tests.forEach(test => {
        try {
            if (test.fn()) {
                console.log(`\n${test.name}: PASSED`);
                passed++;
            } else {
                console.log(`\n${test.name}: FAILED`);
            }
        } catch (error) {
            console.log(`\n${test.name}: ERROR - ${error.message}`);
        }
    });
    
    console.log('\n' + '='.repeat(40));
    console.log(`Results: ${passed}/${total} tests passed`);
    
    if (passed === total) {
        console.log('All tests passed! Package is ready for publishing.');
        return 0;
    } else {
        console.log('Some tests failed. Please fix the issues before publishing.');
        return 1;
    }
}

main();
