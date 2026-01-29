# Storybook Configuration

This directory contains the Storybook configuration for React Native.

## Files

- **`index.tsx`** - Storybook entry point with platform-aware AsyncStorage
- **`main.ts`** - Storybook configuration (stories glob, addons)
- **`preview.tsx`** - Global decorators (fonts, theme, providers)
- **`storybook.requires.ts`** - Auto-generated story index (DO NOT EDIT)

## Important: storybook.requires.ts

This file is **auto-generated** by running:

```bash
npm run storybook:update
```

### For CodeSandbox / Online Environments

The `storybook.requires.ts` file is **committed to git** (not in `.gitignore`) so that:

- CodeSandbox can run immediately without manual setup
- The app works on first `npm install`
- No manual story regeneration needed

### When to Regenerate

Run `npm run storybook:update` when you:

- Add new story files
- Remove story files
- Rename story files
- Change story file locations

The `postinstall` script automatically runs this after `npm install`.

## Platform Support

- **iOS/Android**: Full support with AsyncStorage persistence
- **Web**: Full support with in-memory mock storage (resets on refresh)

### Storage Implementation

`index.tsx` provides platform-specific storage:

```typescript
if (Platform.OS !== 'web') {
  // Native: Real AsyncStorage with persistence
  storage = { getItem: AsyncStorage.getItem, setItem: AsyncStorage.setItem };
} else {
  // Web: In-memory mock (prevents "Cannot read properties of undefined" errors)
  const memoryStorage = {};
  storage = {
    getItem: async (key) => memoryStorage[key] || null,
    setItem: async (key, value) => {
      memoryStorage[key] = value;
    },
  };
}
```
