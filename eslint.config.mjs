import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';

export default defineConfig([
  ...nextVitals,
  {
    rules: {
      'no-console': 'off',
      'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  globalIgnores([
    '.next/**',
    'node_modules/**',
    'out/**',
  ]),
]);
