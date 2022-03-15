module.exports = {
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 80,
  proseWrap: 'always',
  overrides: [
    {
      files: '*.scss',
      options: {
        parser: 'scss',
        singleQuote: false,
      },
    },
    {
      files: '*.css',
      options: {
        parser: 'css',
        singleQuote: false,
      },
    },
    {
      files: '*.mdx',
      options: {
        singleQuote: false,
      },
    },
  ],
}
