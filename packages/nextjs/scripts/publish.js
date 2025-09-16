import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function runCommand(command, description) {
    try {
        console.log(`\n${description}...`);
        const output = execSync(command, { 
            cwd: path.join(__dirname, '..'),
            encoding: 'utf8',
            stdio: 'inherit'
        });
        console.log(`${description} completed`);
        return true;
    } catch (error) {
        console.error(`${description} failed:`, error.message);
        return false;
    }
}

function checkGitStatus() {
    try {
        const status = execSync('git status --porcelain', { 
            cwd: path.join(__dirname, '..', '..', '..'),
            encoding: 'utf8'
        });
        
        if (status.trim()) {
            console.log('Warning: You have uncommitted changes:');
            console.log(status);
            console.log('Consider committing your changes before publishing.');
            return false;
        }
        return true;
    } catch (error) {
        console.log('Could not check git status:', error.message);
        return true; // Continue anyway
    }
}

function checkNpmAuth() {
    try {
        execSync('npm whoami', { 
            cwd: path.join(__dirname, '..'),
            encoding: 'utf8',
            stdio: 'pipe'
        });
        console.log('NPM authentication verified');
        return true;
    } catch (error) {
        console.log('NPM authentication failed. Please run "npm login" first.');
        return false;
    }
}

function publishPackage(versionType = 'patch') {
    console.log('Hikasami Sans Package Publisher');
    console.log('='.repeat(40));
        
    // Check prerequisites
    if (!checkGitStatus()) {
        console.log('\nPlease commit your changes before publishing.');
        return 1;
    }
    
    if (!checkNpmAuth()) {
        console.log('\nPlease authenticate with NPM first.');
        return 1;
    }
    
    // Run tests
    if (!runCommand('npm test', 'Running tests')) {
        console.log('\nTests failed. Please fix issues before publishing.');
        return 1;
    }
    
    // Build package
    if (!runCommand('npm run build', 'Building package')) {
        console.log('\nBuild failed. Please fix issues before publishing.');
        return 1;
    }
    
    // Version and publish
    const versionCommand = `npm version ${versionType}`;
    if (!runCommand(versionCommand, `Updating version (${versionType})`)) {
        console.log('\nVersion update failed.');
        return 1;
    }
    
    if (!runCommand('npm publish', 'Publishing to NPM')) {
        console.log('\nPublishing failed.');
        return 1;
    }
    
    console.log('\nPackage published successfully!');
    console.log('\nNext steps:');
    console.log('1. Push changes to git: git push && git push --tags');
    console.log('2. Create a GitHub release');
    console.log('3. Update documentation if needed');
    
    return 0;
}

// Get version type from command line arguments
const versionType = process.argv[2] || 'patch';
const validTypes = ['patch', 'minor', 'major'];

if (!validTypes.includes(versionType)) {
    console.log('Invalid version type. Use: patch, minor, or major');
    process.exit(1);
}

publishPackage(versionType);
