# Running in CodeSandbox / Online Environments

This project is configured to work in CodeSandbox and other online development environments.

## ✅ What's Already Configured

### **1. Metro Config (ESM-Safe)**

The `metro.config.js` uses **plain Expo config** without Storybook's Metro wrapper:

```javascript
// metro.config.js
const { getDefaultConfig } = require('expo/metro-config');
const config = getDefaultConfig(__dirname);
module.exports = config;
```

**Why?** The `withStorybook()` wrapper causes ESM/CommonJS conflicts in Node 20+. We avoid it entirely.

### **2. Runtime Storybook Loading**

Storybook is loaded **at runtime** in `app/_layout.tsx`, not via Metro config:

```typescript
// app/_layout.tsx
const StorybookUIRoot = __DEV__ ? require("../.rnstorybook").default : null;

// Toggle between app and Storybook
if (__DEV__ && showStorybook && StorybookUIRoot) {
  return <StorybookUIRoot />;
}
```

**Why?** This avoids module system conflicts and works everywhere.

### **3. Platform-Aware Storage**

AsyncStorage is conditionally loaded in `.rnstorybook/index.tsx`:

```typescript
// Only load AsyncStorage on native platforms (not web)
let storage;
if (Platform.OS !== 'web') {
  const AsyncStorage = require('@react-native-async-storage/async-storage').default;
  storage = { getItem: AsyncStorage.getItem, setItem: AsyncStorage.setItem };
}
```

**Why?** AsyncStorage doesn't work on web. Storybook works fine without it (just won't persist state between refreshes).

### **4. Story Discovery**

Stories are discovered via `storybook.requires.ts` (auto-generated):

```bash
npm run storybook:update
```

This generates `.rnstorybook/storybook.requires.ts` which imports all stories.

## 🚀 Running in CodeSandbox

### **Option 1: Web Preview (Expo Web)**

```bash
npm run web
```

- Opens in browser
- Full Storybook functionality
- No device/emulator needed

### **Option 2: Device Preview (Expo Go)**

```bash
npm start
```

Then:

1. Scan QR code with Expo Go app
2. Tap "📚 Open Storybook" button
3. Browse components

### **Option 3: Tunnel Mode**

```bash
npx expo start --tunnel
```

- Works through firewalls
- Access from any device
- Slower but more reliable

## 🔧 Troubleshooting

### **Error: Cannot find module 'storybook'**

**Cause:** Missing `storybook.requires.ts`

**Fix:**

```bash
npm run storybook:update
```

### **Error: ERR_REQUIRE_ESM**

**Cause:** Using `withStorybook()` in metro.config.js

**Fix:** Already fixed! Check that `metro.config.js` doesn't use `withStorybook()`

### **Stories not showing**

**Cause:** Story index not regenerated after adding new stories

**Fix:**

```bash
npm run storybook:update
npm start
```

### **Module not found errors**

**Cause:** Dependencies not installed

**Fix:**

```bash
rm -rf node_modules package-lock.json
npm install
```

## 📱 Device Requirements

### **For Web:**

- ✅ Works in any browser
- ✅ No device needed
- ✅ Full Storybook controls

### **For Mobile Preview:**

- ✅ Expo Go app (iOS/Android)
- ✅ Physical device or emulator
- ⚠️ Some native features may not work in Expo Go

## 🎯 CodeSandbox-Specific Notes

### **What Works:**

- ✅ Expo Web preview
- ✅ Story browsing
- ✅ Component controls
- ✅ Hot reload
- ✅ TypeScript
- ✅ ESLint/Prettier

### **What Doesn't Work:**

- ❌ Native modules (camera, sensors, etc.)
- ❌ iOS/Android simulators (use Expo Go instead)
- ❌ Some performance-heavy animations

### **Recommended Workflow:**

1. **Develop in CodeSandbox:**

   ```bash
   npm run web  # Preview in browser
   ```

2. **Test on device:**

   ```bash
   npm start    # Scan QR with Expo Go
   ```

3. **Build for production:**
   ```bash
   # Do this locally, not in CodeSandbox
   eas build --platform ios
   eas build --platform android
   ```

## 🔄 Syncing with Local Development

If you started in CodeSandbox and want to move to local:

```bash
# 1. Download/clone the project
git clone <your-repo>

# 2. Install dependencies
npm install

# 3. Run locally
npm start
```

Everything will work the same way!

## 📚 Key Differences from Standard Setup

| Standard Storybook             | This Setup                |
| ------------------------------ | ------------------------- |
| Metro plugin (`withStorybook`) | ❌ Not used (ESM issues)  |
| Separate Storybook server      | ❌ Not needed (on-device) |
| Web-only                       | ✅ Works on web + mobile  |
| Build-time story discovery     | ✅ Runtime discovery      |

## 🎨 Adding New Stories in CodeSandbox

1. Create story file in `src/stories/`:

   ```typescript
   // src/stories/NewComponent.stories.tsx
   import type { Meta, StoryObj } from '@storybook/react-native';
   import { NewComponent } from 'testing-twigs';

   const meta: Meta<typeof NewComponent> = {
     title: 'Components/NewComponent',
     component: NewComponent,
   };

   export default meta;

   export const Default: StoryObj<typeof NewComponent> = {};
   ```

2. Regenerate story index:

   ```bash
   npm run storybook:update
   ```

3. Refresh preview:
   ```bash
   npm run web  # or npm start
   ```

## ✅ Verification

To verify everything works:

```bash
# 1. Check Metro config (should be plain Expo)
cat metro.config.js

# 2. Regenerate stories
npm run storybook:update

# 3. Start dev server
npm run web

# 4. Open browser and click "Open Storybook"
```

You should see all 11 components with 39 stories! 🎉

## 🆘 Still Having Issues?

1. **Clear everything:**

   ```bash
   rm -rf node_modules .expo
   npm install
   ```

2. **Check Node version:**

   ```bash
   node --version  # Should be 18+ or 20+
   ```

3. **Verify dependencies:**

   ```bash
   npm list @storybook/react-native
   npm list expo
   ```

4. **Check for ESM errors in logs** - If you see `ERR_REQUIRE_ESM`, the metro config still has `withStorybook()`

## 🎓 Learn More

- [Expo in CodeSandbox](https://docs.expo.dev/guides/using-codesandbox/)
- [Storybook for React Native](https://storybook.js.org/docs/react-native)
- [Expo Go App](https://expo.dev/go)
