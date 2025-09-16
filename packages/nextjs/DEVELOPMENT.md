# Development Guide for Hikasami Sans

This document explains the development workflow and package structure.

## Package Structure

```
packages/nextjs/
├── font/                      # Source files
│   ├── fonts/                 # Font files (.woff2)
│   ├── font.js                # Main export
│   ├── sans.js                # Sans-serif export
│   ├── sans-non-variable.js   # Non-variable export
│   └── *.d.ts                 # TypeScript definitions
├── scripts/                   # Build and utility scripts
│   ├── build.js               # Build script
│   ├── copy-fonts.js          # Font copying script
│   ├── publish.js             # Publishing script
│   └── test.js                # Testing script
├── dist/                      # Built package (generated)
├── example/                   # Usage examples
├── package.json               # Package configuration
├── README.md                  # User documentation
├── PUBLISHING.md              # Publishing instructions
└── DEVELOPMENT.md             # This file
```

## Development Workflow

### 1. Making Changes

1. **Edit source files** in `font/` directory
2. **Update TypeScript types** in `font.d.ts`
3. **Test changes** with `npm test`
4. **Build package** with `npm run build`

### 2. Testing

```bash
# Run all tests
npm test

# Test specific functionality
node scripts/test.js
```

### 3. Building

```bash
# Build for development
npm run build

# Build creates optimized dist/ directory
```

### 4. Publishing

```bash
# Patch version (1.0.0 -> 1.0.1)
npm run publish:patch

# Minor version (1.0.0 -> 1.1.0)
npm run publish:minor

# Major version (1.0.0 -> 2.0.0)
npm run publish:major
```

## File Descriptions

### Core Files

- **`font/font.js`**: Main export with variable font
- **`font/sans.js`**: Sans-serif specific export
- **`font/sans-non-variable.js`**: Individual font weights
- **`font.d.ts`**: TypeScript type definitions

### Scripts

- **`scripts/build.js`**: Creates optimized dist/ directory
- **`scripts/copy-fonts.js`**: Copies font files from parent dist/
- **`scripts/publish.js`**: Handles versioning and publishing
- **`scripts/test.js`**: Validates package integrity

### Configuration

- **`package.json`**: NPM package configuration
- **`.npmignore`**: Files to exclude from NPM package
- **`.gitignore`**: Files to exclude from Git

## Adding New Font Weights

1. **Add font file** to `font/fonts/`
2. **Update `sans-non-variable.js`** with new weight
3. **Update TypeScript types** in `font.d.ts`
4. **Test and build**

## Troubleshooting

### Build Issues
```bash
# Clean and rebuild
rm -rf dist/
npm run build
```

### Test Failures
```bash
# Check font files
ls -la font/fonts/

# Verify package.json
npm run test
```

### Publishing Issues
```bash
# Check NPM authentication
npm whoami

# Verify package name availability
npm view hikasami-sans
```

## Best Practices

1. **Always test** before building
2. **Use semantic versioning** for releases
3. **Update documentation** with changes
4. **Keep font files optimized** (woff2 format)
5. **Maintain TypeScript compatibility**

## Package Size Optimization

- Font files are in woff2 format (smallest size)
- Only necessary files are included in dist/
- Source maps are not included (reduces size)
- Unused files are excluded via .npmignore
