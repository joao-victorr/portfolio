module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    '@rocketseat/eslint-config/react',
    'plugin:tailwindcss/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    "prettier/prettier": ["error", {
    "printWidth": 120,
    "proseWrap": "never"
  }],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}