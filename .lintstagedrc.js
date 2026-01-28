module.exports = {
  // TypeScript and JavaScript files - run eslint and prettier
  '*.{ts,tsx,js,jsx}': ['eslint --fix', 'prettier --write'],

  // JSON, Markdown, YAML files - only prettier
  '*.{json,md,yml,yaml}': ['prettier --write'],

  // Story files - regenerate story index (ignore passed filenames)
  'src/stories/*.stories.{ts,tsx}': () => 'npm run storybook:update',
};
