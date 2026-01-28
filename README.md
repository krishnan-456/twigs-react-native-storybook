# Twigs React Native Storybook

This is an [Expo](https://expo.dev) project with on-device [Storybook](https://storybook.js.org/) integration for the `testing-twigs` component library.

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app in development mode

   ```bash
   npx expo start
   ```

3. Choose your platform:
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Scan the QR code with Expo Go app on your device

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Storybook Integration

This project includes an on-device Storybook setup for developing and testing `testing-twigs` components.

### Opening Storybook

1. **Start the development server** (if not already running):

   ```bash
   npm start
   ```

2. **Open the app** on your device or simulator

3. **Tap the "Open Storybook" button** on the home screen

   The button is only visible in development builds (`__DEV__ === true`) and will not appear in production.

4. **Browse and interact with stories** using the Storybook UI

5. **Return to the app** by tapping the "← Back to App" button at the top of the Storybook screen

### Project Structure

See [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) for detailed folder organization and Cursor AI rules in `.cursor/rules/`.

### Adding New Stories

Stories are located in the `src/stories/` directory and follow the pattern `*.stories.(ts|tsx|js|jsx)`.

To add a new story:

1. **Create a new file** in `src/stories/`:

   ```
   src/stories/YourComponent.stories.tsx
   ```

2. **Write your story** using the Storybook format:

   ```typescript
   import type { Meta, StoryObj } from '@storybook/react-native';
   import { YourComponent, TwigsProvider } from 'testing-twigs';
   import { View } from 'react-native';

   const meta: Meta<typeof YourComponent> = {
     title: 'Components/YourComponent',
     component: YourComponent,
     decorators: [
       (Story) => (
         <TwigsProvider>
           <View style={{ padding: 20 }}>
             <Story />
           </View>
         </TwigsProvider>
       ),
     ],
   };

   export default meta;

   type Story = StoryObj<typeof YourComponent>;

   export const Default: Story = {
     args: {
       // Your component props
     },
   };
   ```

3. **Regenerate the story index**:

   ```bash
   npm run storybook:update
   ```

4. **Reload the app** - Metro bundler will automatically pick up the new story

### Example Stories

The project includes comprehensive stories for all `testing-twigs` components:

#### Layout Components

- **Flex** - Direction, justify, align, wrap, spacing utilities
- **Box** - Padding, margin, custom spacing, nested containers

#### Form Components

- **Button** - Variants (solid/outline/ghost), colors, sizes, states
- **TextInput** - Variants (outline/filled), sizes, states, password input
- **Checkbox** - Sizes, checked/unchecked/disabled states
- **Radio** - Group selection, sizes, states
- **Switch** - Toggle states (on/off/disabled)

#### Display Components

- **Text** - Typography scale, font weights (Regular/Medium/Bold + Italics), colors, spacing
- **Avatar** - Sizes with rounded prop, initials generation

#### Modal Components

- **BottomSheet** - Basic sheet, multiple snap points, custom styling
- **BottomSheetModal** - Modal with backdrop, dynamic content, custom press behavior

> **Note**: BottomSheet components require `@gorhom/bottom-sheet`, `react-native-gesture-handler`, `react-native-reanimated`, and `react-native-svg` as peer dependencies (already installed).

### Storybook Addons

This setup includes the following on-device addons:

- **Controls** - Interact with component props in real-time
- **Actions** - Log component events and callbacks
- **Notes** - Add documentation to your stories

### Configuration

Storybook configuration files are located in `.rnstorybook/`:

- `.rnstorybook/main.ts` - Main configuration (stories glob, addons)
- `.rnstorybook/preview.tsx` - Global decorators and parameters
- `.rnstorybook/index.tsx` - Storybook UI entry point

## Code Quality

### Linting and Formatting

This project uses ESLint and Prettier for code quality:

```bash
# Lint all files
npm run lint

# Lint and auto-fix
npm run lint:fix

# Format all files
npm run format

# Check formatting
npm run format:check

# Type check
npm run type-check
```

### Git Hooks (Husky)

Automated quality checks run on:

- **Pre-commit**: Lints and formats staged files automatically
- **Pre-push**: Runs type checking and full lint
- **Commit-msg**: Validates conventional commit message format

### Commit Message Format

Use conventional commits:

```bash
feat(button): add new size variant
fix: resolve bottom sheet crash
docs: update README
style: format code
refactor: simplify context logic
test: add button tests
chore: update dependencies
```

### ESLint Rules

- TypeScript strict rules
- React and React Hooks best practices
- React Native specific rules
- Prettier integration
- Auto-fix on save (in Cursor/VSCode)

### Metro Configuration

The project uses a custom Metro configuration (`metro.config.js`) that wraps Expo's default config with Storybook's `withStorybook()` function. This enables Storybook's Metro integration for story discovery and hot reloading.

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
