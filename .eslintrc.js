/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["__repo__(noCase)/eslint-config/library.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.lint.json",
  },
  rules: {
    // '@typescript-eslint/no-explicit-any': ['off'],
    // '@typescript-eslint/explicit-function-return-type': 'off',
    // '@typescript-eslint/member-delimiter-style': 'off'
    'no-unused-vars': 'off',
    '@typescript-eslint/no-extraneous-class': 'off',
  },
  "env": {
    "jest": true
  }
};
