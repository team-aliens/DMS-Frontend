import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import parserTs from '@typescript-eslint/parser';
import tseslintPlugin from '@typescript-eslint/eslint-plugin';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import aliens from 'eslint-plugin-aliens';

const { configs: tsConfigs } = tseslintPlugin;

const cleanGlobals = Object.fromEntries(
  Object.entries(globals.browser).map(([key, value]) => [key.trim(), value]),
);

export default [
  {
    ignores: [
      'dist',
      '**/dist',
      'node_modules',
      '**/node_modules',
      'coverage',
      '.nx/cache',
      '.nx/workspace-data',
    ],
  },
  prettierConfig,
  js.configs.recommended,
  {
    files: ['src/**/*.{ts,tsx}', 'cypress/**/*.{ts,tsx}'],
    languageOptions: {
      parser: parserTs,
      ecmaVersion: 2023,
      globals: cleanGlobals,
      sourceType: 'module',
      parserOptions: {
        project: ['./tsconfig.json', './cypress/tsconfig.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': tseslintPlugin,
      prettier,
      aliens,
    },
    rules: {
      ...tsConfigs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...aliens.configs.recommended.rules,
      'array-type': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'func-style': 'off',
      'arrow-body-style': 'off',
      'react-refresh/only-export-components': 'off',
      'prettier/prettier': 'error',
      '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/consistent-type-imports': 'off',
      '@typescript-eslint/naming-convention': 'off',
    },
  },
  {
    files: [
      '**/vite.config.ts',
      '**/*.config.ts',
      '**/*.config.mts',
      '**/*.config.cts',
    ],
    languageOptions: {
      parser: parserTs,
      ecmaVersion: 2023,
      globals: cleanGlobals,
      sourceType: 'module',
      parserOptions: {
        project: null,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      '@typescript-eslint/no-duplicate-type-constituents': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
  },
];
