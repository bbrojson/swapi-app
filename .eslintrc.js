module.exports = {
  extends: [
    'airbnb-typescript',
    // 'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    "linebreak-style": 0,
    "arrow-parens": 1,
    "@typescript-eslint/no-shadow": 1,

    "react/require-default-props": [2, { ignoreFunctionalComponents: true }],
    "@typescript-eslint/explicit-module-boundary-types": 0
    
    // "no-shadow": 1,
    // "arrow-body-style": 1,
    // "@typescript-eslint/comma-dangle": 0,
    // "@typescript-eslint/no-loop-func": 0,
    // "@typescript-eslint/no-redeclare": 0,
    // "@typescript-eslint/no-shadow": 0,
    // "@typescript-eslint/dot-notation": 0,
  }
};
