module.exports = {
  // TypeScript and JavaScript files
  '*.{ts,tsx,js,jsx}': ['eslint --fix', 'prettier --write'],

  // JSON, Markdown, YAML files
  '*.{json,md,yml,yaml}': ['prettier --write'],

  // Story files - regenerate story index
  'src/stories/*.stories.{ts,tsx}': ['npm run storybook:update'],
};
