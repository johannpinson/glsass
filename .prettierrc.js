module.exports = {
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 80,
  overrides: [
    {
      files: '*.scss',
      options: {
        parser: 'scss',
        singleQuote: false,
      },
    },
  ],
}
