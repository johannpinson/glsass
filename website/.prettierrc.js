module.exports = {
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 80,
  proseWrap: 'preserve',
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
