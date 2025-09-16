# Publishing Hikasami Sans to NPM

This document explains how to publish the Hikasami Sans package to NPM.

## Prerequisites

1. **NPM Account**: You need an NPM account and be logged in
   ```bash
   npm login
   ```

2. **Git Repository**: Ensure all changes are committed
   ```bash
   git add .
   git commit -m "Prepare for publishing"
   ```

## Publishing Commands

### Quick Publish (Recommended)

```bash
# Patch version (1.0.0 -> 1.0.1)
npm run publish:patch

# Minor version (1.0.0 -> 1.1.0)  
npm run publish:minor

# Major version (1.0.0 -> 2.0.0)
npm run publish:major
```

### Manual Publishing

```bash
# 1. Run tests
npm test

# 2. Build package
npm run build

# 3. Dry run (test without publishing)
npm run publish:dry-run

# 4. Publish
npm publish
```

## What Happens During Publishing

1. **Tests**: Runs all tests to ensure package works
2. **Build**: Creates optimized dist/ directory
3. **Version**: Updates version number in package.json
4. **Publish**: Uploads package to NPM registry

## Package Structure After Build

```
dist/
├── font.js                    # Main export
├── sans.js                    # Sans-serif export
├── sans-non-variable.js       # Non-variable export
├── font.d.ts                  # TypeScript types
├── fonts/                     # Font files
│   ├── Hikasami-Regular.woff2
│   ├── Hikasami-Medium.woff2
│   ├── Hikasami-SemiBold.woff2
│   ├── Hikasami-Bold.woff2
│   └── Hikasami-VF.woff2
├── package.json               # Optimized for publishing
├── README.md                  # Documentation
└── LICENSE.TXT                # License file
```

## After Publishing

1. **Push to Git**:
   ```bash
   git push
   git push --tags
   ```

2. **Create GitHub Release**:
   - Go to GitHub repository
   - Create a new release
   - Use the version tag created by npm version

3. **Verify Installation**:
   ```bash
   npm install hikasami-sans
   ```

## Troubleshooting

### Authentication Issues
```bash
npm whoami  # Check if logged in
npm login   # Login to NPM
```

### Version Conflicts
```bash
npm view hikasami-sans versions  # Check existing versions
```

### Build Issues
```bash
npm run test    # Check for errors
npm run build   # Rebuild package
```

## Package Information

- **Name**: hikasami-sans
- **Registry**: https://www.npmjs.com/package/hikasami-sans
- **Repository**: https://github.com/hikasami/font
- **License**: SIL Open Font License
