# Project Structure

This document outlines the folder structure and organization of the Twigs React Native Storybook project.

## Directory Tree

```
twigs-react-native-storybook/
├── .cursor/
│   └── rules/                    # AI coding rules for Cursor
│       ├── react-native.mdc      # React Native best practices
│       ├── storybook.mdc         # Storybook configuration rules
│       ├── testing-twigs.mdc     # Component library usage
│       ├── typescript.mdc        # TypeScript guidelines
│       └── folder-structure.mdc  # Project organization
│
├── .rnstorybook/                 # Storybook configuration
│   ├── index.tsx                 # Storybook UI entry point
│   ├── main.ts                   # Stories glob and addons
│   ├── preview.tsx               # Global decorators and theme
│   └── storybook.requires.ts     # Auto-generated (gitignored)
│
├── app/                          # Expo Router application
│   ├── _layout.tsx               # Root layout with providers
│   └── index.tsx                 # Home screen with toggle
│
├── assets/                       # Static assets
│   ├── images/                   # Image files
│   └── fonts/                    # Custom fonts (if needed)
│
├── lib/                          # Shared application code
│   └── StorybookContext.tsx      # Storybook toggle context
│
├── src/                          # Source code
│   ├── stories/                  # All Storybook stories
│   │   ├── Avatar.stories.tsx
│   │   ├── Box.stories.tsx
│   │   ├── BottomSheet.stories.tsx
│   │   ├── BottomSheetModal.stories.tsx
│   │   ├── Button.stories.tsx
│   │   ├── Checkbox.stories.tsx
│   │   ├── Flex.stories.tsx
│   │   ├── Radio.stories.tsx
│   │   ├── Switch.stories.tsx
│   │   ├── Text.stories.tsx
│   │   └── TextInput.stories.tsx
│   │
│   ├── hooks/                    # Custom React hooks
│   │   └── (future hooks here)
│   │
│   ├── types/                    # TypeScript type definitions
│   │   └── (future types here)
│   │
│   └── utils/                    # Utility functions
│       └── (future utils here)
│
├── .gitignore                    # Git ignore rules
├── app.json                      # Expo configuration
├── eslint.config.js              # ESLint configuration
├── metro.config.js               # Metro bundler config
├── package.json                  # Dependencies and scripts
├── tsconfig.json                 # TypeScript configuration
├── README.md                     # Project documentation
└── PROJECT_STRUCTURE.md          # This file
```

## Key Directories

### `.cursor/rules/`

Contains AI coding guidelines for Cursor IDE (`.mdc` format):

- **react-native.mdc**: React Native development patterns
- **storybook.mdc**: Storybook story creation guidelines
- **testing-twigs.mdc**: Component library API reference
- **typescript.mdc**: TypeScript best practices
- **folder-structure.mdc**: Project organization rules

### `.rnstorybook/`

Storybook configuration for on-device preview:

- **index.tsx**: Initializes Storybook UI with AsyncStorage
- **main.ts**: Defines story paths and enabled addons
- **preview.tsx**: Global decorators (fonts, theme, providers)
- **storybook.requires.ts**: Auto-generated, don't edit manually

### `app/`

Expo Router application structure:

- **\_layout.tsx**: Root layout with TwigsProvider, fonts, theme
- **index.tsx**: Main app screen with Storybook toggle button
- Files here become routes automatically

### `lib/`

Shared application-level code:

- **StorybookContext.tsx**: React Context for Storybook toggle state
- Add global utilities and configurations here

### `src/stories/`

All Storybook stories for testing-twigs components:

- One file per component
- Demonstrates component variants, states, and usage
- Run `npm run storybook:update` after changes

### `src/hooks/`

Custom React hooks (future):

- Reusable stateful logic
- Example: `useAuth.ts`, `useTheme.ts`

### `src/types/`

TypeScript type definitions (future):

- Shared interfaces and types
- Example: `User.types.ts`, `API.types.ts`

### `src/utils/`

Pure utility functions (future):

- Helper functions without React dependencies
- Example: `formatDate.ts`, `validators.ts`

## File Naming Conventions

| Type       | Pattern                | Example              |
| ---------- | ---------------------- | -------------------- |
| Components | PascalCase.tsx         | `UserProfile.tsx`    |
| Hooks      | useCamelCase.ts        | `useAuth.ts`         |
| Utils      | camelCase.ts           | `formatDate.ts`      |
| Types      | PascalCase.types.ts    | `User.types.ts`      |
| Stories    | PascalCase.stories.tsx | `Button.stories.tsx` |
| Contexts   | PascalCaseContext.tsx  | `AuthContext.tsx`    |

## Import Paths

Use the `@/` alias for cleaner imports:

```typescript
// ✅ Good
import { useAuth } from '@/src/hooks/useAuth';
import { UserType } from '@/src/types/User.types';
import { StorybookContext } from '@/lib/StorybookContext';

// ❌ Avoid
import { useAuth } from '../../../src/hooks/useAuth';
```

## When to Add New Directories

- **`src/components/`**: When creating reusable app components (not stories)
- **`src/screens/`**: When app grows beyond Expo Router's file-based routing
- **`src/services/`**: For API clients, data fetching, external integrations
- **`src/constants/`**: For app-wide constants and configuration
- **`src/theme/`**: If creating custom theme beyond testing-twigs

## Best Practices

1. **Keep stories organized**: All stories in `src/stories/`
2. **Use path aliases**: Import with `@/` for absolute paths
3. **One responsibility per file**: Don't mix concerns
4. **Co-locate related files**: Keep tests/styles near components
5. **Avoid deep nesting**: Max 3 levels for readability
6. **Document as you go**: Update this file when structure changes

## Scripts

```bash
# Development
npm start              # Start Expo dev server
npm run android        # Run on Android
npm run ios            # Run on iOS

# Storybook
npm run storybook:update   # Regenerate story index

# Code Quality
npm run lint           # Run ESLint
npm run lint:fix       # Run ESLint and auto-fix issues
npm run format         # Format code with Prettier
npm run format:check   # Check code formatting
npm run type-check     # Run TypeScript type checking
```

## Configuration Files

- **app.json**: Expo app configuration
- **metro.config.js**: Metro bundler with Storybook integration
- **tsconfig.json**: TypeScript compiler options
- **eslint.config.js**: Linting rules
- **package.json**: Dependencies and scripts

## Generated/Ignored Files

These files are auto-generated and should be gitignored:

```
.rnstorybook/storybook.requires.ts
node_modules/
.expo/
dist/
*.log
.DS_Store
```

## Adding New Features

1. **New Component Story**: Add to `src/stories/` and run `npm run storybook:update`
2. **New Hook**: Add to `src/hooks/` with `use` prefix
3. **New Type**: Add to `src/types/` with `.types.ts` suffix
4. **New Screen**: Add to `app/` directory (Expo Router)
5. **New Utility**: Add to `src/utils/`

## References

- [Expo Documentation](https://docs.expo.dev/)
- [Expo Router](https://docs.expo.dev/router/introduction/)
- [Storybook for React Native](https://storybook.js.org/docs/react-native)
- [Testing Twigs Package](https://www.npmjs.com/package/testing-twigs)
