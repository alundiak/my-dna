## SETUP

# 2025

Decides to rework base `index.css` from Vite + React boilerplate into using CSS Layers aka `@layer`.

| Feature                     | Standard? | Notes                               |
| --------------------------- | --------- | ----------------------------------- |
| `@layer` syntax             | ✅ Yes    | Part of official CSS                |
| Named layers (`reset`, etc) | ❌ No     | Developer-defined, not standardized |
| Built-in browser layers     | ❌ No     | No predefined or automatic layers   |

| Layer name   | Standard in spec? | Common in practice? |
| ------------ | ----------------- | ------------------- |
| `reset`      | ❌ No             | ✅ Yes              |
| `tokens`     | ❌ No             | ✅ Yes              |
| `base`       | ❌ No             | ✅ Yes              |
| `components` | ❌ No             | ✅ Yes              |
| `utilities`  | ❌ No             | ✅ Yes              |
| `frameworks` | ❌ No             | ⚠️ Sometimes        |
| `packages`   | ❌ No             | ⚠️ Rare             |

Cascade Order (from lowest to highest priority):

- Browser styles
- Layered styles (via `@layer`)
- Unlayered styles (`@import` or direct CSS)
- Inline styles or JS-modified styles

![example in browser](./images/css-layers.png)

# 2024

https://vite.dev/guide/

Initially project bootstrapped with minimal setup within Vite, with HMR and some ESLint rules.

```sh
npm create vite@latest
```

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```
