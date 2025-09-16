import { NextFontWithVariable } from "next/dist/compiled/@next/font";

declare module "hikasami-sans/font" {
  /**
   * Hikasami Sans variable font, with `className` and `variable` properties,
   * meant to be attached to DOM elements via `className`
   *
   * `HikasamiSans`—approximately 30kb—is preferred in almost all cases.
   *
   * Included weights: 100 through 900
   *
   * * {@link https://www.npmjs.com/package/hikasami-sans?activeTab=readme#app-router View App Router Example}
   * * {@link https://www.npmjs.com/package/hikasami-sans?activeTab=readme#with-tailwind-css View Tailwind Example}
   * * {@link https://www.npmjs.com/package/hikasami-sans?activeTab=readme#pages-router View Pages Router Example}
   * * {@link https://github.com/hikasami/font/releases Download Font Files}
   */
  export const HikasamiSans: NextFontWithVariable;
}

declare module "hikasami-sans/font/sans" {
  /**
   * Hikasami Sans variable font, with `className` and `variable` properties,
   * meant to be attached to DOM elements via `className`
   *
   * `HikasamiSans`—approximately 30kb—is preferred in almost all cases.
   *
   * Included weights: 100 through 900
   *
   * * {@link https://www.npmjs.com/package/hikasami-sans?activeTab=readme#app-router View App Router Example}
   * * {@link https://www.npmjs.com/package/hikasami-sans?activeTab=readme#with-tailwind-css View Tailwind Example}
   * * {@link https://www.npmjs.com/package/hikasami-sans?activeTab=readme#pages-router View Pages Router Example}
   * * {@link https://github.com/hikasami/font/releases Download Font Files}
   */
  export const HikasamiSans: NextFontWithVariable;
}

declare module "hikasami-sans/font/sans-non-variable" {
  /**
   * Hikasami Sans font, with `className` and `variable` properties,
   * meant to be attached to DOM elements via `className`
   *
   * `HikasamiSans`—approximately 30kb—is preferred in almost all cases. Use `HikasamiSansNonVariable`—approximately
   * 300kb—if you need to support browsers that {@link https://caniuse.com/variable-fonts cannot display variable fonts}
   *
   * Included weights: 100 through 900
   *
   * * {@link https://www.npmjs.com/package/hikasami-sans?activeTab=readme#app-router View App Router Example}
   * * {@link https://www.npmjs.com/package/hikasami-sans?activeTab=readme#with-tailwind-css View Tailwind Example}
   * * {@link https://www.npmjs.com/package/hikasami-sans?activeTab=readme#pages-router View Pages Router Example}
   * * {@link https://github.com/hikasami/font/releases Download Font Files}
   */
  export const HikasamiSansNonVariable: NextFontWithVariable;
}