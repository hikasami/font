# Import Examples for @hikasami/font

This document shows all the different ways to import and use the Hikasami Sans font.

## Installation

```bash
npm install @hikasami/font
```

## Import Options

### 1. Main Import (Recommended)

```jsx
import { HikasamiSans } from '@hikasami/font';
```

### 2. Sans-specific Import

```jsx
import { HikasamiSans } from '@hikasami/font/sans';
```

### 3. Non-variable Font Import

```jsx
import { HikasamiSansNonVariable } from '@hikasami/font/sans-non-variable';
```

## Usage Examples

### Next.js App Router

```jsx
// app/layout.js
import { HikasamiSans } from '@hikasami/font';

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={HikasamiSans.className}>
      <body>{children}</body>
    </html>
  );
}
```

### Next.js Pages Router

```jsx
// pages/_app.js
import { HikasamiSans } from '@hikasami/font';

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={HikasamiSans.className}>
      <Component {...pageProps} />
    </main>
  );
}
```

### With Tailwind CSS

```jsx
// app/layout.js
import { HikasamiSans } from '@hikasami/font';

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={HikasamiSans.variable}>
      <body>{children}</body>
    </html>
  );
}
```

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-hikasami-sans)'],
      },
    },
  },
}
```

### Individual Font Weights (Non-variable)

```jsx
import { HikasamiSansNonVariable } from '@hikasami/font/sans-non-variable';

export default function MyComponent() {
  return (
    <div className={HikasamiSansNonVariable.className}>
      <h1 className="font-bold">Bold Text</h1>
      <p className="font-normal">Regular Text</p>
    </div>
  );
}
```

## CSS Variables

When using the variable font, you can access these CSS variables:

- `--font-hikasami-sans` - Main font family
- `--font-hikasami-sans-regular` - Regular weight
- `--font-hikasami-sans-medium` - Medium weight
- `--font-hikasami-sans-semibold` - SemiBold weight
- `--font-hikasami-sans-bold` - Bold weight

## TypeScript Support

All imports are fully typed with TypeScript support:

```typescript
import { HikasamiSans } from '@hikasami/font';

// HikasamiSans has type NextFontWithVariable
const font: NextFontWithVariable = HikasamiSans;
```

## Package Information

- **Package Name**: `@hikasami/font`
- **Version**: 1.0.1
- **License**: SIL Open Font License
- **Repository**: https://github.com/hikasami/font
