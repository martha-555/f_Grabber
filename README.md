# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

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
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

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
})
```
Technologies

Core
	•	React 19 – Library for building user interfaces
	•	React DOM 19 – React bindings for the DOM
	•	React Router DOM 7 – Declarative routing for React
	•	React Hook Form – Form handling and validation
	•	Zustand – State management

Styling
	•	Tailwind CSS 4 – Utility-first CSS framework
	•	PostCSS 8 – CSS transformations
	•	Autoprefixer – Vendor prefixing for CSS

Development & Tooling
	•	Vite 6 – Development server and build tool
	•	TypeScript 5 – Strongly typed JavaScript
	•	ESLint 9 – Linter for code quality
	•	Prettier 3 – Code formatter
	•	ESLint Plugins:
	•	eslint-plugin-react – React linting rules
	•	eslint-plugin-react-hooks – Rules for React Hooks
	•	eslint-plugin-react-refresh – Fast Refresh support
	•	eslint-config-prettier – Disables conflicting ESLint rules

Other Dependencies
	•	Axios – HTTP client for API requests
	•	@types/node – TypeScript definitions for Node.js
	•	@types/react & @types/react-dom – TypeScript definitions for React
	•	Globals – List of global variables
