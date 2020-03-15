module.exports = {
  'root': true,
  'parser': '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json',
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier',
    // 'airbnb',
    // 'prettier/@typescript-eslint',  // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    // 'plugin:prettier/recommended',  // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  plugins: [
    '@typescript-eslint',
    'prettier'
  ],
  rules: {
    'prettier/prettier': 2 // Means error
  },
//   settings: {
//     react: {
//       'version': '999.999.999'
//     }
//   },
//   rules: {
//     'import/extensions': [
//        'error',
//        'ignorePackages',
//        {
//          'js': 'never',
//          'jsx': 'never',
//          'ts': 'never',
//          'tsx': 'never'
//        }
//     ]
//  }
}